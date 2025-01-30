import React, { useState, useEffect } from "react";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
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
      return;
    }

    try {
      const [recordsResponse, patientsResponse, doctorsResponse] = await Promise.all([
        fetch("http://localhost:8080/api/records", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch("http://localhost:8080/api/patients", {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch("http://localhost:8080/api/doctors", {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      if (!recordsResponse.ok || !patientsResponse.ok || !doctorsResponse.ok) {
        throw new Error("Failed to fetch data. Please check your credentials or try again later.");
      }

      const recordsData = await recordsResponse.json();
      const patientsData = await patientsResponse.json();
      const doctorsData = await doctorsResponse.json();

      const combinedData = recordsData.map((record) => {
        const patient = patientsData.find((p) => p.p_id === record.p_id) || {};
        const doctor = doctorsData.find((d) => d.doctor_id === record.doctor_id) || {};
        return {
          ...record,
          patient_id: patient.p_id,
          name: patient.name,
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
      global: { value: "", matchMode: FilterMatchMode.CONTAINS },
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: "", matchMode: FilterMatchMode.STARTS_WITH }],
      },
    });
  };

  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    setGlobalFilterValue(value);

    setFilters((prevFilters) => ({
      ...prevFilters,
      global: { ...prevFilters.global, value },
    }));
  };


  const applyFilter = () => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      global: { ...prevFilters.global, value: globalFilterValue },
    }));
  };

  const renderHeader = () => {
    return (
      <div className="flex justify-between items-center ">
        
        <div className="flex items-center space-x-2">
          <IconField iconPosition="left">
           
            <InputIcon className="pi pi-search w-8 h-8 border border-gray-300 rounded-md p-2 mr-10" />
            <InputText
              value={globalFilterValue}
              onChange={onGlobalFilterChange}
              placeholder="Search by Name"
              className="input-class-inp ml-16 mt-3"
            />
          </IconField>
        </div>
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

  const header = renderHeader();

  return (
    <div >
      <h1 className="text-xl max-h-full font-bold mb-9 ml-2 mt-8 ">Patient Past Records</h1>
      <div className="bg-bg-Add_details_bac">
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
  className="md:mt-0 mt-7 mb-10 rounded-md overflow-hidden shadow-lg border border-gray-200 bg-Add_details_bac"
>
  <Column
    field="p_id"
    header="Patient ID"
    headerClassName="bg-slate-100 border-b border-gray-300"
    bodyClassName="border-b border-gray-300 bg-Add_details_bac"
  />
  <Column
    field="name"
    header="Name"
    headerClassName="bg-slate-100 border-b bg-Add_details_bac border-gray-300"
    bodyClassName="border-b border-gray-300 bg-Add_details_bac"
  />
  <Column
    field="date"
    header="Date"
    body={dateBodyTemplate}
    headerClassName="bg-slate-100 border-b bg-Add_details_bac border-gray-300"
    bodyClassName="border-b border-gray-300 bg-Add_details_bac"
  />
  <Column
    field="drName"
    header="Dr. Name"
    headerClassName="bg-slate-100 border-b bg-Add_details_bac border-gray-300"
    bodyClassName="border-b border-gray-300 bg-Add_details_bac"
  />
  <Column
    field="description"
    header="Description"
    headerClassName="bg-slate-100 border-b bg-Add_details_bac border-gray-300"
    bodyClassName="border-b border-gray-300 bg-Add_details_bac"
  />
  <Column
    field="prescription"
    header="Prescription"
    headerClassName="bg-slate-100 border-b bg-Add_details_bac border-gray-300"
    bodyClassName="border-b border-gray-300 bg-Add_details_bac"
  />
</DataTable>

      </div>
    </div>
  );
}
