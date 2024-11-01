import React, { useState, useEffect } from "react";
import { classNames } from "primereact/utils";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { IconField } from "primereact/iconfield";
import { InputIcon } from "primereact/inputicon";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { ProgressBar } from "primereact/progressbar";
import { Calendar } from "primereact/calendar";
import { Slider } from "primereact/slider";
import { Tag } from "primereact/tag";
import { TriStateCheckbox } from "primereact/tristatecheckbox";
import { Dropdown } from "primereact/dropdown";

export default function DataRecord() {
  const [customers, setCustomers] = useState([]);
  const [filters, setFilters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [statuses] = useState([
    "unqualified",
    "qualified",
    "new",
    "negotiation",
    "renewal",
  ]);

  // Dummy data
  const dummyData = [
    {
      id: 1,
      name: "John Doe",
      date: new Date("2023-01-01"),
      balance: 5000,
      status: "qualified",
      activity: 60,
      verified: true,
    },
    {
      id: 2,
      name: "Jane Smith",
      date: new Date("2023-02-15"),
      balance: 3000,
      status: "unqualified",
      activity: 30,
      verified: false,
    },
    {
      id: 3,
      name: "Alice Johnson",
      date: new Date("2023-03-10"),
      balance: 8000,
      status: "new",
      activity: 80,
      verified: true,
    },
    {
      id: 4,
      name: "Bob Brown",
      date: new Date("2023-04-05"),
      balance: 1000,
      status: "negotiation",
      activity: 40,
      verified: false,
    },
  ];

  useEffect(() => {
    setCustomers(dummyData);
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
      balance: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      status: {
        operator: FilterOperator.OR,
        constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }],
      },
      activity: { value: null, matchMode: FilterMatchMode.BETWEEN },
      verified: { value: null, matchMode: FilterMatchMode.EQUALS },
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
        <IconField
          iconPosition="left"
          className="flex items-center  w-full"
        >
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

  const formatDate = (value) => {
    return value.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const dateBodyTemplate = (rowData) => {
    return formatDate(rowData.date);
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

  const balanceBodyTemplate = (rowData) => {
    return formatCurrency(rowData.balance);
  };

  const balanceFilterTemplate = (options) => {
    return (
      <InputNumber
        value={options.value}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        mode="currency"
        currency="USD"
        locale="en-US"
      />
    );
  };

  const getSeverity = (status) => {
    switch (status) {
      case "unqualified":
        return "danger";
      case "qualified":
        return "success";
      case "new":
        return "info";
      case "negotiation":
        return "warning";
      case "renewal":
        return null;
      default:
        return null; // Handle default case
    }
  };

  const statusBodyTemplate = (rowData) => {
    return (
      <Tag value={rowData.status} severity={getSeverity(rowData.status)} />
    );
  };

  const statusFilterTemplate = (options) => {
    return (
      <Dropdown
        value={options.value}
        options={statuses}
        onChange={(e) => options.filterCallback(e.value, options.index)}
        placeholder="Select One"
        className="p-column-filter"
        showClear
      />
    );
  };

  const activityBodyTemplate = (rowData) => {
    return (
      <ProgressBar
        value={rowData.activity}
        showValue={false}
        style={{ height: "6px" }}
      ></ProgressBar>
    );
  };

  const activityFilterTemplate = (options) => {
    return (
      <React.Fragment>
        <Slider
          value={options.value}
          onChange={(e) => options.filterCallback(e.value)}
          range
          className="m-3"
        ></Slider>
        <div className="flex align-items-center justify-content-between px-2">
          <span>{options.value ? options.value[0] : 0}</span>
          <span>{options.value ? options.value[1] : 100}</span>
        </div>
      </React.Fragment>
    );
  };

  const verifiedBodyTemplate = (rowData) => {
    return (
      <i
        className={classNames("pi", {
          "text-green-500 pi-check-circle": rowData.verified,
          "text-red-500 pi-times-circle": !rowData.verified,
        })}
      ></i>
    );
  };

  const verifiedFilterTemplate = (options) => {
    return (
      <div className="flex align-items-center gap-2">
        <label htmlFor="verified-filter" className="font-bold">
          Verified
        </label>
        <TriStateCheckbox
          inputId="verified-filter"
          value={options.value}
          onChange={(e) => options.filterCallback(e.value)}
        />
      </div>
    );
  };

  const header = renderHeader();

  return (
    <div className="card">
      <DataTable
        value={customers}
        paginator
        showGridlines
        rows={2}
        loading={loading}
        dataKey="id"
        filters={filters}
        globalFilterFields={["name", "balance", "status"]}
        header={header}
        emptyMessage="No customers found."
      >
        <Column field="name" header="Name" filter filterPlaceholder="Search by name" />
        <Column field="date" header="Date" body={dateBodyTemplate} filter filterElement={dateFilterTemplate} />
        <Column field="balance" header="Balance" body={balanceBodyTemplate} filter filterElement={balanceFilterTemplate} />
        <Column field="status" header="Status" body={statusBodyTemplate} filter filterElement={statusFilterTemplate} />
        <Column field="activity" header="Activity" body={activityBodyTemplate} filter filterElement={activityFilterTemplate} />
        <Column field="verified" header="Verified" body={verifiedBodyTemplate} filter filterElement={verifiedFilterTemplate} />
      </DataTable>
    </div>
  );
}