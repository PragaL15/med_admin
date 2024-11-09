import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function AppointmentsDemo() {
    const [appointments, setAppointments] = useState([]);
    const [rounds, setRounds] = useState([]);

    // Helper function to format time from 24-hour to 12-hour format
    const formatTime = (time) => {
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours, 10);
     
        const formattedHour = hour % 12 || 12; // Converts '0' to '12' for 12-hour format
    
        return `${String(formattedHour).padStart(2, '0')}:${minutes} `;
    };

    // Fetch data from the backend
    useEffect(() => {
        // Fetching appointments data
        fetch('http://localhost:8080/AppointmentTable')  // Update the URL as needed
            .then(response => response.json())
            .then(data => setAppointments(data))
            .catch(error => console.error('Error fetching appointments:', error));

        // Fetching routine rounds data
        // fetch('http://localhost:5000/api/rounds')  // Update the URL as needed
        //     .then(response => response.json())
        //     .then(data => setRounds(data))
        //     .catch(error => console.error('Error fetching rounds:', error));
    }, []);

    return (
        <div className="inline mt-12 gap-0 text-xxs" style={{ width: '100%' }}>
            {/* Appointments Table */}
            <div className="w-full overflow-hidden mb-10 ml-10 mt-12 text-xxs font-sans" style={{ height: '13rem', borderRight: '1px solid #ccc' }}>
                <h1 className="text-black ml-32 font-sans text-lg mb-3 font-bold">Appointments</h1>
                <DataTable 
                    value={appointments} 
                    showGridlines 
                    scrollable 
                    scrollHeight="12rem" 
                    className="w-full text-xxs small-padding-table"
                >
                    <Column field="p_id" header="ID"></Column>
                    <Column field="p_name" header="Name"></Column>
                    <Column field="p_number" header="Number"></Column>
                    {/* Apply formatTime function to display time in 12-hour format */}
                    <Column 
                        field="time" 
                        header="Time" 
                        body={(rowData) => formatTime(rowData.time)} // Format time here
                    ></Column>
                    <Column field="problem_hint" header="Problem"></Column>
                </DataTable>
            </div>
            
            {/* Routine Rounds Table */}
            {/* <div className="w-full overflow-hidden text-xxs ml-10" style={{ height: '13rem' }}>
                <h1 className="text-black ml-32 font-sans text-lg mb-3 font-bold">Routine Rounds</h1>
                <DataTable 
                    value={rounds} 
                    showGridlines 
                    scrollable 
                    scrollHeight="12rem" 
                    className="w-full text-xxs small-padding-table"
                >
                    <Column field="id" header="ID"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div> */}
        </div>
    );
}
