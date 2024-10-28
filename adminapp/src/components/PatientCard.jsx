import React, { useState } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import { InputTextarea } from "primereact/inputtextarea";

export default function PatientCard() {
  const [selectedPid, setSelectedPid] = useState(null);
  const [buttonStatus, setButtonStatus] = useState(false);
  const Pid = [
    { name: "123465" },
    { name: "234876" },
    { name: "984533" },
    { name: "897045" },
  ];

  const buttonClick = () => {
    setButtonStatus((prevStatus) => !prevStatus);
  };

  const selectedPidTemp = (option, props) => {
    return <span>{option ? option.name : props.placeholder}</span>;
  };

  return (

    <div className="flex w-full gap-4">
      {/* <div className="inline w-1/2"> */}
      <Card title="Simple Card" className="w-1/2">
        <div className="card inline justify-content-center">
          <Dropdown
            value={selectedPid}
            onChange={(e) => setSelectedPid(e.value)}
            options={Pid}
            optionLabel="name"
            placeholder="Select a PID"
            filter
            valueTemplate={selectedPidTemp}
            className="w-full md:w-14rem bg-white border-2 border-blue-500 rounded-lg shadow-md hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Card className="mt-3">
            <h1>Pragalya</h1>
          </Card>
        </div>
        <Button
          onClick={buttonClick}
          icon={buttonStatus ? <MicIcon /> : <MicOffIcon />}
          label="Record"
          className="bg-red-600 text-slate-50 p-2 mt-2"
        />
        </Card>
       
        {/* </div>
      */}
      <Card className="w-1/2 flex" title="Converted text">
        <InputTextarea disabled rows={5} cols={30} value="context will be displayed here" className="md:w-14rem" />
      </Card>
    </div>
  );
}
