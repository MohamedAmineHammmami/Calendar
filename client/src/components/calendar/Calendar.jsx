import React, { useEffect, useState } from "react";
import calendarStyle from "./calendar.module.css";
import TopSection from "../topSection/TopSection";
import MainSection from "../mainSection/MainSection";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
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
  const [toggle, setToggle] = useState(true);
  const [dates, setDates] = useState([]);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentMonthIndex, setCurrentMonthIndex] = useState(
    new Date().getMonth()
  );

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const checkNextDatesLong = (currentDateLong) => {
    let v = 0;
    switch (currentDateLong) {
      case 28:
        v = 14;
        break;
      case 29:
        v = 13;
        break;
      case 30:
        v = 12;
        break;
      case 31:
        v = 11;
        break;
    }
    return v;
  };

  const genDates = () => {
    const currentDates = [];
    const prevDates = [];
    const nextDates = [];
    let index = 1;
    const currentDateLong = months[currentMonthIndex].long;
    let nextDatesLong = checkNextDatesLong(currentDateLong);
    let prevMonthLong =
      currentMonthIndex === 0
        ? months[11].long
        : months[currentMonthIndex - 1].long;

    const firstDayIndex = new Date(
      `${currentYear}-${currentMonthIndex + 1}-1`
    ).getDay();

    !firstDayIndex && (index = 5);

    for (let i = 1; i <= currentDateLong; i++) {
      if (index < firstDayIndex) {
        prevDates.unshift(prevMonthLong);
        prevMonthLong--;
      }
      if (index <= nextDatesLong - firstDayIndex + 1) {
        nextDates.push(i);
        index++;
      }
      currentDates.push(i);
    }
    setDates([...prevDates, ...currentDates, ...nextDates]);
  };

  useEffect(() => {
    genDates();
  }, [currentMonthIndex, currentYear]);

  return (
    <div
      className={
        toggle
          ? ` ${calendarStyle.baseContainer} ${calendarStyle.container}`
          : `${calendarStyle.baseContainer} ${calendarStyle.shrinkContainer}`
      }
    >
      <TopSection
        {...{
          months,
          days,
          currentMonthIndex,
          currentYear,
          handleToggle,
        }}
      />
      {toggle && <MainSection {...{ dates, days }} />}
    </div>
  );
}

export default Calendar;
