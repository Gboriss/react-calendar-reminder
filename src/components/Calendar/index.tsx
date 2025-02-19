import React, { useState } from "react";
import Calendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styles from "./Calendar.module.scss";
import eventStore from "../../store/eventStore";
import { observer } from "mobx-react-lite";

type Value = Date | [Date, Date] | null;

const CustomCalendar: React.FC = observer(() => {
  const [date, setDate] = useState<Value>(new Date());

  const handleDateChange: CalendarProps["onChange"] = (value) => {
    setDate(value as Value);
  };

  const tileClassName = ({ date }: { date: Date }) => {
    const dateString = date.toISOString().split("T")[0];
    return eventStore.events[dateString] ? styles.hasEvent : "";
  };

  return (
    <div className={styles.calendarWrapper}>
      <h2 className={styles.calendarTitle}>Выбери дату</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
        className={styles.calendar}
        tileClassName={tileClassName}
      />
    </div>
  );
});

export default CustomCalendar;
