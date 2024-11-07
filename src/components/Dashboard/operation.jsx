import React, { useState } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';

export function UrgentNotificationTable() {
    const [patients, setPatients] = useState([
        { code: 'P001', name: 'Patient 1', operation: 'Category A', date: 10, admitted: true },
        { code: 'P002', name: 'Patient 2', operation: 'Category B', date: 5, admitted: false },
        { code: 'P003', name: 'Patient 3', operation: 'Category A', date: 20, admitted: false },
        { code: 'P004', name: 'Patient 4', operation: 'Category C', date: 15, admitted: true },
    ]);

    const columns = [
        { field: 'code', header: 'ID' },
        { field: 'name', header: 'Patient Name' },
        { field: 'operation', header: 'Operation' },
        { field: 'date', header: 'Date' },
        { field: 'admitted', header: 'Admitted' }
    ];

    return (
        <div className="card overflow-x-auto">
            <DataTable className="md:w-full" value={patients} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>
    );
}

export function UrgentNotificationDialog() {
    const showUrgentNotification = () => {
        confirmDialog({
            group: 'urgentNotification',
            header: 'Pecent Operation',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
        });
    };

    return (
        <>
            <ConfirmDialog
                group="urgentNotification"
                content={({ headerRef, contentRef, footerRef, hide, message }) => (
                    <div className="inline flex flex-col items-center p-5 bg-white rounded-lg shadow-lg w-64 ml-0 md:w-80 md:ml-36">
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

export default function App() {
    return (
        <div className="p-4 mt-10">
            <UrgentNotificationDialog />
        </div>
    );
}
