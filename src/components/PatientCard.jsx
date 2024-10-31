import React, { useState, useEffect } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import { InputTextarea } from "primereact/inputtextarea";
import axios from "axios";
import Nodata from "../../public/Nodata.png";

export default function PatientCard() {
  const [selectedPid, setSelectedPid] = useState(null);
  const [buttonStatus, setButtonStatus] = useState(false);
  const [patientDetails, setPatientDetails] = useState(null);
  const [Pids, setPids] = useState([]);

  // Fetch the list of PIDs when the component mounts
  useEffect(() => {
    const fetchPids = async () => {
      try {
        const response = await axios.get("http://localhost:8080/patients");
        setPids(response.data); // Ensure this is an array of PID objects
      } catch (error) {
        console.error("Error fetching PIDs:", error);
      }
    };

    fetchPids();
  }, []);

  // Fetch patient details when a PID is selected
  useEffect(() => {
    const fetchPatientDetails = async () => {
      if (selectedPid) {
        try {
          // Ensure selectedPid has the correct property for the ID
          const response = await axios.get(
            `http://localhost:8080/patients/${selectedPid.p_id}`
          );
          setPatientDetails(response.data);
        } catch (error) {
          console.error("Error fetching patient details:", error);
          setPatientDetails(null); // Clear details if there's an error
        }
      }
    };

    fetchPatientDetails();
  }, [selectedPid]);

  const buttonClick = () => {
    setButtonStatus((prevStatus) => !prevStatus);
  };

  const selectedPidTemp = (option, props) => {
    return <span>{option ? option.p_id : props.placeholder}</span>; // Show the selected p_id
  };

  return (
    <div className="inline w-full gap-4 mt-7 md:flex">
      <Card title="Simple Card" className="w-full mt-6 md:w-1/2 md:mt-0">
        <div className="card inline justify-content-center">
          <Dropdown
            value={selectedPid}
            onChange={(e) => setSelectedPid(e.value)} // Set selected PID
            options={Pids}
            optionLabel="p_id"
            placeholder="Select a PID"
            filter
            valueTemplate={selectedPidTemp}
            className="w-full md:w-10rem bg-white border-2 border-blue-500 rounded-lg shadow-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Card className="mt-4 flex items-center justify-center">
            {patientDetails ? (
             <div>
                <p className="text-lg font-semibold text-blue-700 mb-2">
                  Name:{" "}
                  <span className="font-normal text-gray-800">
                    {patientDetails.p_name}
                  </span>
                </p>
                <p className="text-lg font-semibold text-blue-700 mb-2">
                  Phone Number:{" "}
                  <span className="font-normal text-gray-800">
                    {patientDetails.p_number}
                  </span>
                </p>
                <p className="text-lg font-semibold text-blue-700 mb-2">
                  Email:{" "}
                  <span className="font-normal text-gray-800">
                    {patientDetails.p_email}
                  </span>
                </p>
                <p className="text-lg font-semibold text-blue-700 mb-2">
                  Status:{" "}
                  <span className="font-normal text-gray-800">
                    {patientDetails.p_status}
                  </span>
                </p>
                </div>
            ) : (
              <img src={Nodata} alt="No Data" className="w-20 h-24 mx-auto" />
            )}
          </Card>
        </div>
        <div className="flex p-1">
          <Button
            onClick={buttonClick}
            icon={buttonStatus ? <MicIcon /> : <MicOffIcon />}
            label="Record"
            className="bg-red-600 text-slate-50 p-2 mt-2 mr-2"
          />
          {buttonStatus ? <p className="mt-3">Recording started</p> : null}
        </div>
      </Card>

      <Card className="w-full mt-4 md:w-1/2 lg:w-3/5 flex md:mt-0" title="Converted text">
        <InputTextarea
          disabled
          rows={5}
          cols={30}
          value="context will be displayed here"
          className="w-full"
        />
      </Card>
    </div>
  );
}