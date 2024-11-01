import React, { useState, useEffect } from "react";
import { classNames } from "primereact/utils";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { Button } from "primereact/button";

export default function DataRecord() {
  const [records, setRecords] = useState([]);
  const [filters, setFilters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  const dummyData = [
    {
      id: 1,
      drName: "Dr. John",
      date: new Date("2023-01-01"),
      description: "Routine check-up",
      prescription: "Vitamin D supplements",
      name: "John Doe",
    },
    {
      id: 2,
      drName: "Dr. Smith",
      date: new Date("2023-02-15"),
      description: "Follow-up",
      prescription: "Painkillers",
      name: "Jane Smith",
    },
  ];

  useEffect(() => {
    setRecords(dummyData);
    setLoading(false);
    initFilters();
  }, []);

  const initFilters = () => {
    setFilters({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      date: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }],
      },
      drName: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      description: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      prescription: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
     
    });
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };

  const clearFilter = () => {
    initFilters();
    setGlobalFilterValue("");
  };

  const applyFilter = () => {
    let _filters = { ...filters };
    _filters["global"].value = globalFilterValue;
    setFilters(_filters);
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-content-between">
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label="Clear"
          outlined
          onClick={clearFilter}
        />
        <IconField iconPosition="left" className="flex items-center w-full">
          <InputIcon className="pi pi-search mr-6 ml-5" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
            className="border-0 focus:outline-none p-1 w-56 ml-9"
          />
        </IconField>
        <Button
          type="button"
          icon="pi pi-filter"
          label="Filter"
          outlined
          onClick={applyFilter}
          className="ml-3"
        />
      </div>
    );
  };

  const dateBodyTemplate = (rowData) => {
    return rowData.date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const dateFilterTemplate = (options) => {
    return (
      <Calendar
        value={options.value}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        dateFormat="mm/dd/yy"
        placeholder="mm/dd/yyyy"
        mask="99/99/9999"
      />
    );
  };

  const dropdownFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={[]}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        placeholder="Select One"
        className="p-column-filter"
        showClear
      />
    );
  };

  const header = renderHeader();

  return (
    <div className="card">
      <DataTable
        value={records}
        paginator
        showGridlines
        rows={2}
        loading={loading}
        dataKey="id"
        filters={filters}
        globalFilterFields={["name", "description", "prescription", "drName"]}
        header={header}
        emptyMessage="No records found."
      >
        <Column field="name" header="Name" filter filterPlaceholder="Search by name" />
        <Column
          field="date"
          header="Date"
          body={dateBodyTemplate}
          filter
          filterElement={dateFilterTemplate}
        />
         <Column
          field="drName"
          header="Dr Name"
          filter
          filterPlaceholder="Search by Dr name"
        />
        <Column
          field="description"
          header="Description"
          filter
          filterPlaceholder="Search by description"
        />
        <Column
          field="prescription"
          header="Prescription"
          filter
          filterPlaceholder="Search by prescription"
        />
       
      </DataTable>
    </div>
  );
}
