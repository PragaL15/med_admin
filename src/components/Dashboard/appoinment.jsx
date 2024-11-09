import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function AppointmentsDemo() {
  const [appointments, setAppointments] = useState([]);
  const [admitted, setAdmitted] = useState([]);

  // Helper function to format time from 24-hour to 12-hour format
  const formatTime = (time) => {
    if (!time) return ""; // Return empty if time is undefined or null
    const [hours, minutes] = time.split(":");
    const hour = parseInt(hours, 10);
    const formattedHour = hour % 12 || 12; // Converts '0' to '12' for 12-hour format
    return `${String(formattedHour).padStart(2, "0")}:${minutes} ${
      hour >= 12 ? "PM" : "AM"
    }`;
  };

  // Fetch data from the backend
  useEffect(() => {
    // Fetching appointments data
    fetch("http://localhost:8080/AppointmentTable")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching appointments");
        }
        return response.json();
      })
      .then((data) => setAppointments(data))
      .catch((error) => console.error("Error fetching appointments:", error));

    // Fetching admitted data
    fetch("http://localhost:8080/AdmittedTable")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching admitted records");
        }
        return response.json();
      })
      .then((data) => setAdmitted(data))
      .catch((error) =>
        console.error("Error fetching admitted records:", error)
      );
  }, []);

  return (
    <div className="inline mt-12 gap-0 text-xxs" style={{ width: "100%" }}>
      {/* Appointments Table */}
      <div
        className="w-full overflow-hidden mb-10 ml-10 mt-12 text-xxs font-sans"
        style={{ height: "13rem", borderRight: "1px solid #ccc" }}
      >
        <h1 className="text-black ml-32 font-sans text-2xl mb-3 font-bold">
          Appointments
        </h1>
        <DataTable
          value={appointments}
          paginator rows={2}
          showGridlines
          scrollable
          scrollDirection="both"
          scrollHeight="12rem"
          className="w-full text-xxs"
        >
          <Column field="p_name" header="Name" />
          <Column field="p_number" header="Number" />
          <Column
            field="time"
            header="Time"
            body={(rowData) => formatTime(rowData.time)}
          />
          <Column field="problem_hint" header="Problem" />
          <Column field="appo_status" header="Status" />
        </DataTable>
      </div>
      <div
        className="w-full overflow-hidden text-xxs ml-10"
        style={{ height: "13rem" }}
      >
        <h1 className="text-black ml-32 font-sans text-lg mb-3 font-bold">
          Admitted Patients
        </h1>
        <DataTable
          value={admitted}
          showGridlines
          scrollable
          scrollHeight="12rem"
          className="w-full text-xxs small-padding-table"
        >
          {/* Assuming p_name is already available in admitted data */}
          <Column field="p_name" header="Patient Name" />
          <Column field="ward_no" header="Ward No" />
          <Column field="p_health" header="Health" />
          <Column field="p_operation" header="Operation" />
        </DataTable>
      </div>
    </div>
  );
}
