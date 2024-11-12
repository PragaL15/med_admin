import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";

export default function DataRecord() {
  const [records, setRecords] = useState([]);
  const [filters, setFilters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState("");

  useEffect(() => {
    fetchCombinedRecords();
    initFilters();
  }, []);

  // Function to get the auth token from localStorage
  const getAuthToken = () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("No auth token found in localStorage");
    }
    return token;
  };

  const fetchCombinedRecords = async () => {
    const token = getAuthToken();
    if (!token) {
      setLoading(false);
      return; // If no token, stop fetching
    }

    try {
      // Fetch data from all three APIs with the token in the headers
      const [recordsResponse, patientsResponse, doctorsResponse] = await Promise.all([
        fetch("http://localhost:8080/api/records", {
          headers: { Authorization: `Bearer ${token}` }
        }),
        fetch("http://localhost:8080/api/patients", {
          headers: { Authorization: `Bearer ${token}` }
        }),
        fetch("http://localhost:8080/api/doctors", {
          headers: { Authorization: `Bearer ${token}` }
        }),
      ]);

      if (!recordsResponse.ok || !patientsResponse.ok || !doctorsResponse.ok) {
        throw new Error("Failed to fetch data. Please check your credentials or try again later.");
      }

      const recordsData = await recordsResponse.json();
      const patientsData = await patientsResponse.json();
      const doctorsData = await doctorsResponse.json();

      // Combine each record with corresponding patient and doctor data
      const combinedData = recordsData.map((record) => {
        const patient = patientsData.find((p) => p.p_id === record.p_id) || {};
        const doctor = doctorsData.find((d) => d.doctor_id === record.doctor_id) || {};

        return {
          ...record,
          patient_id: patient.p_id,
          name: patient.p_name,
          drName: doctor.d_name || "Unknown",
        };
      });

      setRecords(combinedData);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch records:", error);
      setLoading(false);
    }
  };

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
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
        <Button
          type="button"
          icon="pi pi-filter"
          label="Filter"
          outlined
          onClick={applyFilter}
        />
      </div>
    );
  };

  const dateBodyTemplate = (rowData) => {
    return new Date(rowData.date).toLocaleDateString("en-US", {
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

  const header = renderHeader();

  return (
    <div className="card">
      <DataTable
        value={records}
        paginator
        showGridlines
        rows={5}
        loading={loading}
        dataKey="id"
        filters={filters}
        globalFilterFields={["name", "description", "prescription", "drName"]}
        header={header}
        emptyMessage="No records found."
        className="md:mt-0 mt-7"
      >
        <Column field="patient_id" header="Patient ID" filter filterPlaceholder="Search by Patient ID" />
        <Column field="name" header="Name" filter filterPlaceholder="Search by Name" />
        <Column field="date" header="Date" body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
        <Column field="drName" header="Dr. Name" filter filterPlaceholder="Search by Dr. Name" />
        <Column field="description" header="Description" filter filterPlaceholder="Search by Description" />
        <Column field="prescription" header="Prescription" filter filterPlaceholder="Search by Prescription" />
      </DataTable>
    </div>
  );
}
