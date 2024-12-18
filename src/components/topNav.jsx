import React from "react";
import { Toolbar } from "primereact/toolbar";
import { Avatar } from "primereact/avatar";
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function TopBar() {
  const endContent = (
    <>
      <div className="flex align-items-center">
        <NotificationsIcon/>
        <span className="font-bold text-side-blue ml-2">Pragalya K</span>
      </div>
    </>
  );
  return (
    <div className="hidden md:block h-20 bg-slate-100 fixed top-0 left-0 w-full">
      <Toolbar
        end={endContent}
        className="ml-52 bg-slate-100 h-20 rounded-none"
      />
    </div>
  );
}