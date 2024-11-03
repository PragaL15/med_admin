import React, { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { InputTextarea } from "primereact/inputtextarea";
import axios from "axios";
import * as WavEncoder from "wav-encoder";
import Nodata from "../../public/Nodata.png";

export default function PatientCard() {
  const [selectedPid, setSelectedPid] = useState(null);
  const [patientDetails, setPatientDetails] = useState(null);
  const [Pids, setPids] = useState([]);
  const [recordedText, setRecordedText] = useState("");
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch PIDs
  useEffect(() => {
    const fetchPids = async () => {
      try {
        const response = await axios.get("http://localhost:8080/patients");
        setPids(response.data);
      } catch (error) {
        console.error("Error fetching PIDs:", error);
      }
    };
    fetchPids();
  }, []);

  // Fetch Patient Details based on selected PID
  useEffect(() => {
    const fetchPatientDetails = async () => {
      if (selectedPid) {
        try {
          setIsLoading(true);
          const response = await axios.get(`http://localhost:8080/patients/${selectedPid.p_id}`);
          setPatientDetails(response.data);
        } catch (error) {
          console.error("Error fetching patient details:", error);
          setPatientDetails(null);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchPatientDetails();
  }, [selectedPid]);

  // Start recording audio
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const options = { mimeType: "audio/webm" };
      const newMediaRecorder = new MediaRecorder(stream, options);

      newMediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) sendAudio(event.data);
      };

      newMediaRecorder.start();
      setMediaRecorder(newMediaRecorder);
      setIsRecording(true);
      setIsPaused(false);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  // Pause recording audio
  const pauseRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.pause();
      setIsPaused(true);
    }
  };

  // Resume recording audio
  const resumeRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "paused") {
      mediaRecorder.resume();
      setIsPaused(false);
    }
  };

  // Stop recording audio
  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((track) => track.stop()); // Stop mic input
      setIsRecording(false);
      setIsPaused(false);
    }
  };

  // Send audio to backend with WAV conversion and save the converted text
  const sendAudio = async (blob) => {
    try {
      const arrayBuffer = await blob.arrayBuffer();
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      const wavBuffer = await WavEncoder.encode({
        sampleRate: audioBuffer.sampleRate,
        channelData: [audioBuffer.getChannelData(0)], // Mono channel
      });

      const wavBlob = new Blob([wavBuffer], { type: "audio/wav" });

      const formData = new FormData();
      formData.append("audio_data", wavBlob, "audio.wav");

      const response = await axios.post("http://localhost:5000/convert", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data && response.data.text) {
        const convertedText = response.data.text;
        setRecordedText(convertedText);
      } else if (response.data && response.data.error) {
        setRecordedText(response.data.error);
      } else {
        setRecordedText("No text detected.");
      }
    } catch (error) {
      console.error("Error converting audio:", error);
      setRecordedText(error.response?.data?.error || "Conversion failed.");
    }
  };

  // Submit converted text to backend
  const handleSubmit = async () => {
    if (!selectedPid || !recordedText) {
      alert("Please select a patient and ensure there is converted text.");
      return;
    }

    try {
      await axios.put(`http://localhost:8080/records/${selectedPid.p_id}/description`, {
        description: recordedText,
      });
      alert("Converted text saved successfully.");
    } catch (error) {
      console.error("Error saving converted text:", error);
      alert("Failed to save the converted text.");
    }
  };

  return (
    <div className="inline w-full gap-4 mt-7 md:flex">
      <Card title="Patient Details" className="w-full mt-6 md:w-1/2 md:mt-0">
        <div className="card inline justify-content-center">
          <Dropdown
            value={selectedPid}
            onChange={(e) => setSelectedPid(e.value)}
            options={Pids}
            optionLabel="p_id"
            placeholder="Select a PID"
            filter
            className="w-full md:w-10rem bg-white border-2 border-blue-500 rounded-lg shadow-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Card className="mt-4 flex items-center justify-center border-black">
            {isLoading ? (
              <p>Loading patient details...</p>
            ) : patientDetails ? (
              <div>
                <p className="text-lg font-semibold text-blue-700 mb-2">
                  Name: <span className="font-normal text-gray-800">{patientDetails.p_name}</span>
                </p>
                <p className="text-lg font-semibold text-blue-700 mb-2">
                  Phone Number: <span className="font-normal text-gray-800">{patientDetails.p_number}</span>
                </p>
                <p className="text-lg font-semibold text-blue-700 mb-2">
                  Email: <span className="font-normal text-gray-800">{patientDetails.p_email}</span>
                </p>
                <p className="text-lg font-semibold text-blue-700 mb-2">
                  Status: <span className="font-normal text-gray-800">{patientDetails.p_status}</span>
                </p>
              </div>
            ) : (
              <img src={Nodata} alt="No Data" className="w-20 h-24 mx-auto" />
            )}
          </Card>
        </div>

        <div className="flex gap-2 mt-3">
          <Button
            onClick={startRecording}
            icon={<MicIcon />}
            label="Start"
            className="bg-green-600 text-white p-2"
            disabled={isRecording || isPaused}
          />
          <Button
            onClick={pauseRecording}
            icon={<PauseIcon />}
            label="Pause"
            className="bg-yellow-600 text-white p-2"
            disabled={!isRecording || isPaused}
          />
          <Button
            onClick={resumeRecording}
            icon={<PlayArrowIcon />}
            label="Resume"
            className="bg-blue-600 text-white p-2"
            disabled={!isRecording || !isPaused}
          />
          <Button
            onClick={stopRecording}
            icon={<MicOffIcon />}
            label="Stop"
            className="bg-red-600 text-white p-2"
            disabled={!isRecording}
          />
        </div>
      </Card>

      <Card className="w-full mt-4 md:w-1/2 lg:w-3/5 flex md:mt-0" title="Converted Text">
        <InputTextarea
          disabled
          rows={5}
          cols={30}
          value={recordedText}
          className="w-full"
          placeholder="Converted text will appear here..."
        />
        <Button
          onClick={handleSubmit}
          label="Submit"
          className="bg-blue-600 text-white p-2 mt-3 w-full"
        />
      </Card>
    </div>
  );
}
