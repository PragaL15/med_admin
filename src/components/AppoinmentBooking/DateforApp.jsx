import React, { useState } from "react";
import { Calendar } from "primereact/calendar";

export default function TimeDemo() {
  const [date, setDate] = useState(null); 
  const [time, setTime] = useState(null); 

  const handleDateTimeChange = (value) => {
    if (value) {
      const selectedDate = value.toISOString().split("T")[0]; 
      const selectedTime = value.toTimeString().split(" ")[0]; 
      setDate(selectedDate);
      setTime(selectedTime);
    } else {
      setDate(null);
      setTime(null);
    }
  };

  return (
    <div className="card flex flex-wrap gap-3 p-fluid">
      <div className="flex-auto">
        <Calendar
          id="calendar-12h"
          value={date && time ? new Date(`${date}T${time}`) : null}
          onChange={(e) => handleDateTimeChange(e.value)}
          showTime
          hourFormat="12"
        />
      </div>
    </div>
  );
}
