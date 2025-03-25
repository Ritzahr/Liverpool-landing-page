import styles from "./calendar-dates.module.css";
import { useEffect, useState } from "react";

const months = [
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
];

const CalendarDates = ({ range }) => {
  const [activeDate, setActiveDate] = useState(null);

  let className;

  const dateClick = (e, i) => {
    setActiveDate(e.target.innerHTML);
    console.log(activeDate);
  }

  useEffect(()=>{

  }, [activeDate]);

  return (
    <div className={styles.container}>
      {range
        ? range === "2024"
          ? months.slice(0, 5).map((month) => {
              return (
                <div 
                  className={styles.months}
                  key={`${months}-div`}
                >
                  {month}
                </div>
              )
            })
          : months.slice(5).map((month, i) => {
              return (
                <div 
                  className={
                    `${styles.months} ${activeDate ? styles.active : ''}`
                  }
                  key={`${i}-div2`}
                  onClick={(e) => dateClick(e, i)}
                >
                  <p>
                    {month}
                  </p>
                </div>
              )
            })
        : null}
    </div>
  );
};

export { CalendarDates };
