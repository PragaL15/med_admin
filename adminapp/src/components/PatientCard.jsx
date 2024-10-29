import React, { useState } from "react";
import { Card } from "primereact/card";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import { InputTextarea } from "primereact/inputtextarea";
import Nodata from "../../public/Nodata.png";
export default function PatientCard() {
  const [selectedPid, setSelectedPid] = useState(false);
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
    <div className="flex w-full gap-4 mt-7">
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
          <Card className="mt-3 flex items-center justify-center">
            {selectedPid ? (
              <h1 className="text-center">Pragalya</h1>
            ) : (
              <img
                src="../../public/Nodata.png"
                alt="No Data"
                className="w-20 h-24"
              />
            )}
          </Card>
        </div>
        <div className="flex p-1">
        <Button
          onClick={buttonClick}
          icon={buttonStatus ? <MicIcon /> : <MicOffIcon />  }
          label="Record"
          className="bg-red-600 text-slate-50 p-2 mt-2 mr-2"
        />
        {buttonStatus ? <p className="mt-3">Recording started</p> : null}  
        </div>
        
      </Card>

      {/* </div>
       */}
      <Card className="w-full md:w-1/2 lg:w-3/5 flex" title="Converted text">
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
