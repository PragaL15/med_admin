import React, { useState, useEffect } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';

// Component for displaying the urgent notification table
export function UrgentNotificationTable() {
    const [patients, setPatients] = useState([]);

    // Fetch data from the backend when the component mounts
    useEffect(() => {
        const fetchPatients = async () => {
            const token = localStorage.getItem("authToken"); // Retrieve token from localStorage
            if (!token) {
                console.error("No auth token found in localStorage");
                return;
            }
    
            try {
                const response = await fetch("http://localhost:8080/api/dashboard/RecentOperation", {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });
    
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
                const data = await response.json();
                setPatients(data);
            } catch (error) {
                console.error("Error fetching patient data:", error);
            }
        };
    
        fetchPatients();
    }, []);
    

    // Define the columns to display in the table
    const columns = [
        { field: 'id', header: 'ID' },
        { field: 'p_name', header: 'Patient Name' },
        { field: 'p_health', header: 'Health' },
        { field: 'p_operation', header: 'Operation' },
        { field: 'p_operation_date', header: 'Operation Date' },
        { field: 'p_operated_doctor', header: 'Doctor' },
        { field: 'duration_admit', header: 'Duration' },
        { field: 'ward_no', header: 'Ward No' },
    ];

    return (
      
        <div className="card overflow-x-auto w-full">
            <DataTable className="md:w-full"  paginator rows={3}  value={patients} tableStyle={{ minWidth: '80rem' }}>
                {columns.map((col) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>

    );
}

// Dialog component for displaying urgent notifications
export function UrgentNotificationDialog() {
    const showUrgentNotification = () => {
        confirmDialog({
            group: 'urgentNotification',
            header: 'Recent Operations',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
        });
    };

    return (
        <>
            <ConfirmDialog
                group="urgentNotification"
                content={({ headerRef, contentRef, footerRef, hide, message }) => (
                    <div className="inline flex flex-col items-center p-5 bg-white rounded-lg shadow-lg w-64 ml-0 md:w-96 md:ml-36">
                        <div className="flex justify-center items-center w-16 h-16 rounded-full bg-blue-500 -mt-12">
                            <i className="pi pi-question text-white text-4xl"></i>
                        </div>
                        <span className="font-bold text-xl mt-4" ref={headerRef}>
                            {message.header}
                        </span>
                        <p className="text-center mt-2" ref={contentRef}>{message.message}</p>
                        <div className="w-full mt-4">
                            <UrgentNotificationTable />
                        </div>
                        <div className="flex items-center gap-2 mt-6 w-full justify-center" ref={footerRef}>
                            <Button
                                label="OK"
                                outlined
                                onClick={(event) => hide(event)}
                                className="w-20 bg-blue-500 text-white"
                            />
                        </div>
                    </div>
                )}
            />
            <div className="card flex flex-wrap gap-2 justify-center mt-4">
                <Button
                    onClick={showUrgentNotification}
                    icon={<MedicalInformationIcon />}
                    label="Recent Operations"
                    className="p-3 text-sm bg-slate-300"
                />
            </div>
        </>
    );
}

// Main App component
export default function App() {
    return (
        <div className="p-4 mt-10">
            <UrgentNotificationDialog />
        </div>
    );
}
