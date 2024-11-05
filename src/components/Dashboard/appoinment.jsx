import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

export default function GridLinesDemo() {
    const [products1] = useState([
        { code: 'P001', name: 'Product 1', category: 'Category A', quantity: 10 },
        { code: 'P002', name: 'Product 2', category: 'Category B', quantity: 5 },
        { code: 'P003', name: 'Product 3', category: 'Category C', quantity: 20 },
        { code: 'P004', name: 'Product 4', category: 'Category A', quantity: 8 },
        { code: 'P005', name: 'Product 5', category: 'Category B', quantity: 15 },
    ]);

    const [products2] = useState([
        { code: 'P101', name: 'Product 6', category: 'Category A', quantity: 12 },
        { code: 'P102', name: 'Product 7', category: 'Category C', quantity: 7 },
        { code: 'P103', name: 'Product 8', category: 'Category B', quantity: 25 },
        { code: 'P104', name: 'Product 9', category: 'Category A', quantity: 11 },
        { code: 'P105', name: 'Product 10', category: 'Category C', quantity: 9 },
    ]);

    return (
        <div className="inline mt-12 gap-0 text-xxs" style={{ width: '100%' }}>
            {/* First table */}
            <div className="w-full overflow-hidden mb-10 ml-10 mt-12 text-xxs font-sans" style={{ height: '13rem', borderRight: '1px solid #ccc' }}>
                <h1 className='text-black ml-32 font-sans text-lg mb-3 font-bold'>Appoinments</h1>
                <DataTable 
                    value={products1} 
                    showGridlines 
                    scrollable 
                    scrollHeight="12rem" 
                    className="w-full text-xxs small-padding-table" // Applies text-xxs to the entire table
                >
                    <Column field="code" header="id"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Number"></Column>
                    <Column field="quantity" header="Time"></Column>
                    <Column field="quantity" header="Problem"></Column>

                </DataTable>
            </div>
            
            {/* Second table */}
            <div className="w-full overflow-hidden text-xxs ml-10" style={{ height: '13rem' }}>
                <h1 className='text-black ml-32 font-sans text-lg mb-3 font-bold'>Routine Rounds</h1>
                <DataTable 
                    value={products2} 
                    showGridlines 
                    scrollable 
                    scrollHeight="12rem" 
                    className="w-full text-xxs small-padding-table" 
                >
                    <Column field="code" header="Code"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
            </div>
        </div>
    );
}
