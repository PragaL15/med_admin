import React from "react";
import Booking from "../components/AppoinmentBooking/Booking";
import Sidebar from "../components/sidebar";
import TopBar from "../components/topNav";
const AppointMent = () => {
  return (
    <div className="h-screen">
      <TopBar />
      <Sidebar />
      <div className="md:flex md:ml-9 md:pl-60 md:pt-10 p-3 bg-rec_bac h-full ">
        <Booking />
      </div>
    </div>
  );
};
export default AppointMent;
