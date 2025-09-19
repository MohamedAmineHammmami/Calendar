import React, { useState } from "react";
import calendarStyle from "./calendar.module.css";
import { CiSquareChevDown } from "react-icons/ci";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";

const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
const leapYear = () => {
  const currentYear = new Date().getFullYear();
  return (currentYear % 4 === 0 && currentYear % 100 !== 0) ||
    currentYear % 400 === 0
    ? 29
    : 28;
};
const months = [
  { month: "January", long: 31 },
  { month: "February", long: leapYear() },
  { month: "March", long: 31 },
  { month: "April", long: 30 },
  { month: "May", long: 31 },
  { month: "June", long: 30 },
  { month: "July", long: 31 },
  { month: "August", long: 31 },
  { month: "September", long: 30 },
  { month: "October", long: 31 },
  { month: "November", long: 30 },
  { month: "December", long: 31 },
];

function Calendar() {
  const [dates, setDates] = useState(() => {
    let acc = [];
    for (let i = 1; i <= 42; i++) {
      acc.push(i);
    }
    return acc;
  });
  return (
    <div className={calendarStyle.container}>
      <div className={calendarStyle.topSection}>
        <div className={calendarStyle.dayMonthDisplay}>
          <span>Thursday, September 18</span>
          <CiSquareChevDown />
        </div>
        <div className={calendarStyle.monthYearDisplay}>
          <span>September 2025</span>
          <div className={calendarStyle.upDownBtns}>
            <FaCaretUp />
            <FaCaretDown />
          </div>
        </div>
      </div>
      <div className={calendarStyle.mainSection}>
        <div className={calendarStyle.weekDays}>
          {days.map((el, i) => {
            return <span key={i}>{el}</span>;
          })}
        </div>
        <div className={calendarStyle.dates}>
          {dates.map((el, i) => {
            return <span key={i}>{el}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
