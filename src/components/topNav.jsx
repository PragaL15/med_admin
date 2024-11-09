import React from "react";
import { Toolbar } from "primereact/toolbar";
import { Avatar } from "primereact/avatar";

export default function TopBar() {
  const endContent = (
    <>
      <div className="flex align-items-center">
        <Avatar
          image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
          shape="circle"
        />
        <span className="font-bold text-white ml-2">Pragalya K</span>
      </div>
    </>
  );
  return (
    <div className="hidden md:block h-20 bg-side-blue fixed top-0 left-0 w-full">
      <Toolbar
        end={endContent}
        className="ml-52 bg-side-blue h-20 rounded-none"
      />
    </div>
  );
}