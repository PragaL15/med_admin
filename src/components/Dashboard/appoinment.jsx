import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

export default function AppointmentsDemo() {
    const [appointments, setAppointments] = useState([]);
    const [admitted, setAdmitted] = useState([]);

    // Helper function to format time from 24-hour to 12-hour format
    const formatTime = (time) => {
        if (!time) return ""; // Return empty if time is undefined or null
        const [hours, minutes] = time.split(":");
        const hour = parseInt(hours, 10);
        const formattedHour = hour % 12 || 12;
        return `${String(formattedHour).padStart(2, "0")}:${minutes} ${hour >= 12 ? "PM" : "AM"}`;
    };

    // Custom button template for the appo_status column
    const statusButtonTemplate = (rowData) => {
        const statusLabel = rowData.appo_status;
        const statusClass = statusLabel === 'initiated'
            ? 'bg-blue-500 text-white'
            : statusLabel === 'pending'
            ? 'bg-yellow-500 text-black'
            : statusLabel === 'completed'
            ? 'bg-green-500 text-white'
            : 'bg-gray-300 text-black';

        return (
            <Button 
                label={statusLabel}
                className={`p-2 rounded-md ${statusClass}`}
            />
        );
    };

    // Fetch data from the backend
    useEffect(() => {
        const token = localStorage.getItem("authToken"); // Retrieve token from localStorage

        if (!token) {
            console.error("No auth token found in localStorage");
            return;
        }

        // Fetching appointments data
        fetch("http://localhost:8080/api/AppointmentTable", {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error fetching appointments");
            }
            return response.json();
        })
        .then((data) => setAppointments(data))
        .catch((error) => console.error("Error fetching appointments:", error));

        // Fetching admitted data
        fetch("http://localhost:8080/api/AdmittedTable", {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error fetching admitted records");
            }
            return response.json();
        })
        .then((data) => setAdmitted(data))
        .catch((error) => console.error("Error fetching admitted records:", error));
    }, []);

    return (
        <div className="inline mt-12 gap-0 text-xxs" style={{ width: "100%" }}>
            {/* Appointments Table */}
            <div className="w-full overflow-hidden mb-10 ml-10 mt-12 text-xxs font-sans" style={{ height: "13rem", borderRight: "1px solid #ccc" }}>
                <h1 className="text-black ml-32 font-sans text-2xl mb-3 font-bold">Appointments</h1>
                <DataTable
                    value={appointments}
                    paginator rows={2}
                    showGridlines
                    scrollable
                    scrollDirection="both"
                    scrollHeight="12rem"
                    className="w-full text-xxs border-black"
                    tableStyle={{ minWidth: '3rem' }}
                >
                    <Column field="p_name" style={{ width: '10%' }} header="Name" />
                    <Column field="p_number" style={{ width: '10%' }} header="Number" />
                    <Column field="time" style={{ width: '10%' }} header="Time" body={(rowData) => formatTime(rowData.time)} />
                    <Column field="problem_hint" style={{ width: '10%' }} header="Problem" />
                    <Column field="appo_status" style={{ width: '10%' }} header="Status" body={statusButtonTemplate} />
                </DataTable>
            </div>
            <div className="w-full overflow-hidden text-xxs ml-10" style={{ height: "13rem" }}>
                <h1 className="text-black ml-32 font-sans text-lg mb-3 font-bold">Admitted Patients</h1>
                <DataTable
                    value={admitted}
                    showGridlines
                    scrollable
                    scrollHeight="12rem"
                    className="w-full text-xxs small-padding-table"
                >
                    <Column field="p_name" header="Patient Name" />
                    <Column field="ward_no" header="Ward No" />
                    <Column field="p_health" header="Health" />
                    <Column field="p_operation" header="Operation" />
                </DataTable>
            </div>
        </div>
    );
}
