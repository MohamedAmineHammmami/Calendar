import React, { useState } from "react";
import topSectionStyle from "./topSection.module.css";
import { CiSquareChevDown } from "react-icons/ci";
import { FaCaretUp, FaCaretDown } from "react-icons/fa6";

function TopSection({
  days,
  months,
  currentMonthIndex,
  currentYear,
  handleToggle,
}) {
  return (
    <div className={topSectionStyle.topSection}>
      <div className={topSectionStyle.dayMonthDisplay}>
        <span>
          {days[new Date().getDay() - 1]}, {months[currentMonthIndex].month}{" "}
          {new Date().getDate()}
        </span>
        <CiSquareChevDown onClick={handleToggle} />
      </div>

      <div className={topSectionStyle.monthYearDisplay}>
        <span>
          {months[currentMonthIndex].month} {currentYear}
        </span>
        <div className={topSectionStyle.upDownBtns}>
          <FaCaretUp />
          <FaCaretDown />
        </div>
      </div>
    </div>
  );
}

export default TopSection;
