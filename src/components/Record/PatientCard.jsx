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
import Nodata from "../../../public/Nodata.png";

export default function PatientCard() {
  const [selectedPid, setSelectedPid] = useState(null);
  const [patientDetails, setPatientDetails] = useState(null);
  const [p_id, setPid] = useState([]);
  const [recordedText, setRecordedText] = useState("");
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getAuthToken = () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("No auth token found in localStorage");
    }
    return token;
  };
  useEffect(() => {
    const fetchPID = async () => {
      try {
        const token = getAuthToken();
        if (token) {
          const response = await axios.get(
            "http://localhost:8080/api/patients",
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          console.log("PIDs API Response:", response.data);
          setPid(response.data);
        } else {
          console.error("Unable to fetch PIDs due to missing token.");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          console.error("Unauthorized access - redirecting to login.");
        } else {
          console.error("Error fetching PIDs:", error);
        }
      }
    };
    fetchPID();
  }, []);

  useEffect(() => {
    const fetchPatientDetails = async () => {
      if (selectedPid) {
        try {
          setIsLoading(true);
          const token = getAuthToken();
          if (token) {
            const response = await axios.get(
              `http://localhost:8080/api/patients/${selectedPid.p_id}`,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );
            console.log("Patient Details API Response:", response.data);
            setPatientDetails(response.data);
          } else {
            console.error(
              "Unable to fetch patient details due to missing token."
            );
          }
        } catch (error) {
          if (error.response && error.response.status === 401) {
            console.error("Unauthorized access - redirecting to login.");
          } else {
            console.error("Error fetching patient details:", error);
          }
          setPatientDetails(null);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchPatientDetails();
  }, [selectedPid]);

  useEffect(() => {
    console.log("Auth Token:", localStorage.getItem("authToken"));
    console.log("Role:", localStorage.getItem("role"));
    console.log("User ID:", localStorage.getItem("user_id"));
  }, []);

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

  const pauseRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.pause();
      setIsPaused(true);
    }
  };

  const resumeRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "paused") {
      mediaRecorder.resume();
      setIsPaused(false);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      setIsRecording(false);
      setIsPaused(false);
    }
  };

  const sendAudio = async (blob) => {
    try {
      const arrayBuffer = await blob.arrayBuffer();
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      const channelData =
        audioBuffer.numberOfChannels > 1
          ? Array.from({ length: audioBuffer.numberOfChannels }, (_, i) =>
              audioBuffer.getChannelData(i)
            )
          : [audioBuffer.getChannelData(0)];
      const wavBuffer = await WavEncoder.encode({
        sampleRate: audioBuffer.sampleRate,
        channelData: channelData,
      });

      const wavBlob = new Blob([wavBuffer], { type: "audio/wav" });

      const formData = new FormData();
      formData.append("audio_data", wavBlob, "audio.wav");

      const response = await axios.post(
        "http://localhost:5000/convert",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data && response.data.text) {
        setRecordedText(response.data.text);
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

  const handleSubmit = async () => {
    if (!selectedPid || !recordedText) {
      alert("Please select a patient and ensure there is converted text.");
      return;
    }

    const token = getAuthToken();
    try {
      if (token) {
        await axios.put(
          `http://localhost:8080/api/records/${selectedPid.p_id}/description`,
          { description: recordedText },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        alert("Converted text saved successfully.");
        window.location.reload();
      } else {
        alert("Authorization token is missing. Please log in again.");
      }
    } catch (error) {
      console.error("Error saving converted text:", error);
      alert("Failed to save the converted text.");
    }
  };

  return (
    <div className="inline w-full gap-5 mt-5 md:flex">
      <Card
        title="PATIENT DETAILS"
        className="w-full mt-6 ml-1 md:w-2/5 md:mt-0"
      >
        <div className="card inline justify-content-center ">
          <Dropdown
            value={selectedPid}
            onChange={(e) => setSelectedPid(e.value)}
            options={p_id}
            optionLabel="p_id"
            placeholder="Select a PID"
            filter
            className="input-class-drop"
            panelClassName="custom-dropdown-panel"
          />

          <Card className="mt-4 h-52 flex  items-center justify-center shadow-lg border-black bg-white">
            {isLoading ? (
              <p>Loading patient details...</p>
            ) : patientDetails ? (
              <div>
                <p className=" font-semibold text-blue-700 mb-2">
                  Name:{" "}
                  <span className="font-normal text-sm text-gray-800">
                    {patientDetails.name}
                  </span>
                </p>
                <p className=" font-semibold text-blue-700 mb-2">
                  Phone number:{" "}
                  <span className="font-normal text-sm text-gray-800">
                    {patientDetails.name}
                  </span>
                </p>
                <p className=" font-semibold text-blue-700 mb-2">
                  Email:{" "}
                  <span className="font-normal text-sm text-gray-800">
                    {patientDetails.name}
                  </span>
                </p>
                <p className=" font-semibold text-blue-700 mb-2">
                  Existing Allergies:{" "}
                  <span className="font-normal text-sm text-gray-800">
                    {patientDetails.phone}
                  </span>
                </p>
                <p className=" font-semibold text-blue-700 mb-2">
                  Current Problem:{" "}
                  <span className="font-normal text-sm text-gray-800">
                    {patientDetails.email}
                  </span>
                </p>
              </div>
            ) : (
              <img src={Nodata} alt="No Data" className="w-36 h-36 mx-auto" />
            )}
          </Card>
        </div>

        <div className="flex gap-1 mt-5">
          <Button
            onClick={startRecording}
            icon={<MicIcon sx={{ width: 20, height: 20 }} />}
            label="Start"
            className="bg-green-600 text-white text-sm p-2 w-24"
            disabled={isRecording || isPaused}
          />
          <Button
            onClick={pauseRecording}
            icon={<PauseIcon sx={{ width: 20, height: 20 }} />}
            label="Pause"
            className="bg-yellow-800 text-white p-2 text-sm w-24"
            disabled={!isRecording || isPaused}
          />
          <Button
            onClick={resumeRecording}
            icon={<PlayArrowIcon sx={{ width: 20, height: 20 }} />}
            label="Resume"
            className="bg-blue-600 text-white text-sm p-2 w-28"
            disabled={!isRecording || !isPaused}
          />
          <Button
            onClick={stopRecording}
            icon={<MicOffIcon sx={{ width: 20, height: 20 }} />}
            label="Stop"
            className="bg-red-600 text-white text-sm p-2 w-20"
            disabled={!isRecording}
          />
        </div>
      </Card>

      <Card
        className="w-full md:w-1/2 lg:w-3/5 md:mt-0  ml-5 bg-white"
        title="CONVERTED TEXT"
      >
        <InputTextarea
          disabled
          rows={5}
          value={recordedText}
          className="w-full h-64 border text-sm shadow-lg border-gray-300 rounded-md p-4 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Converted text will appear here..."
        />
        <Button
          onClick={handleSubmit}
          label="Submit"
          className="bg-blue-600  text-white text-sm p-2 w-20 mt-4"
        />
      </Card>
    </div>
  );
}
