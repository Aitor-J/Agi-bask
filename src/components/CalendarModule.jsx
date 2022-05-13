import { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment";

const CalendarModule = ({ sessions, setSessions }) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toLocaleDateString()
  );
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <div className="App">
      <div>
        <input
          value={selectedDate}
          onFocus={() => setShowCalendar(true)}
          readOnly
        />
        <Calendar
          className={showCalendar ? "" : "hide"}
          onChange={(date) => {
            console.log(date.toLocaleDateString());
            console.log(sessions);
            setSelectedDate(moment(date).format("DD-MM-YYYY"));
            setShowCalendar(false);
            setSessions([...sessions, date.toLocaleDateString()]);
          }}
          tileClassName={({ date }) => {
            let b = "";
            if (sessions.find((x) => x === moment(date).format("DD-MM-YYYY"))) {
              b = "highlight";
            }
            return b;
          }}
        />
      </div>
    </div>
  );
};

export default CalendarModule;
