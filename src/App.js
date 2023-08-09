import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [selectedDate, setselectedDate] = useState(null);
  return (
    <div className="App">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setselectedDate(date)}
        dateFormat="dd/MM/yyyy"
        // minDate={new Date()}
        // maxDate={new Date()}
        filterDate={(date) => date.getDay() !== 5 && date.getDay() !== 6}
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
      />
    </div>
  );
}

export default App;
