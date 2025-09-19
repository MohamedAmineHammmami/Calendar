import React from "react";
import mainSectionStyle from "./mainSection.module.css";

function MainSection({ dates, days }) {
  return (
    <div className={mainSectionStyle.mainSection}>
      <div className={mainSectionStyle.weekDays}>
        {days.map((el, i) => {
          return <span key={i}>{el.slice(0, 2)}</span>;
        })}
      </div>
      <div className={mainSectionStyle.dates}>
        {dates.map((el, i) => {
          return <span key={i}>{el}</span>;
        })}
      </div>
    </div>
  );
}

export default MainSection;
