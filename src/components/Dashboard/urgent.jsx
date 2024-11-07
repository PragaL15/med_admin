import React, { useState } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';

export function DynamicColumnsDemo() {
    const [products, setProducts] = useState([
        { code: 'P001', name: 'Product 1', category: 'Category A', quantity: 10 },
        { code: 'P002', name: 'Product 2', category: 'Category B', quantity: 5 },
        { code: 'P003', name: 'Product 3', category: 'Category A', quantity: 20 },
        { code: 'P004', name: 'Product 4', category: 'Category C', quantity: 15 },
    ]);

    const columns = [
        { field: 'code', header: 'ID' },
        { field: 'name', header: 'Patient Name' },
        { field: 'category', header: 'Room No' },
        { field: 'quantity', header: 'Problem' }
    ];

    return (
        <div className="card overflow-x-auto">
            <DataTable className="md:w-full" value={products} tableStyle={{ minWidth: '50rem' }}>
                {columns.map((col) => (
                    <Column key={col.field} field={col.field} header={col.header} />
                ))}
            </DataTable>
        </div>
    );
}

export function HeadlessDemo() {
    const confirm1 = () => {
        confirmDialog({
            group: 'headless',
            header: 'Urgent Notification',
            icon: 'pi pi-exclamation-triangle',
            defaultFocus: 'accept',
        });
    };

    return (
        <>
            <ConfirmDialog
                group="headless"
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
                            <DynamicColumnsDemo />
                        </div>
                        <div className="flex items-center gap-2 mt-6 w-full justify-center" ref={footerRef}>
                            <Button
                                label="ok"
                                outlined
                                onClick={(event) => hide(event)}
                                className="w-20 bg-blue-500 text-white"
                            />
                        </div>
                    </div>
                )}
            />
            <div className="card flex flex-wrap gap-2 justify-center mt-4">
                <Button onClick={confirm1} icon={<AccessibleForwardIcon/>} label="Urgent Notification" className='p-3 text-sm bg-slate-300' />
            </div>
        </>
    );
}

export default function App() {
    return (
        <div className="p-4 mt-10">
            <HeadlessDemo />
        </div>
    );
}