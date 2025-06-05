import styles from "./calendar-dates.module.css";
import { useEffect, useState } from "react";

const CalendarDates = ({ range, months, showGames }) => {
  const [activeDate, setActiveDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const dateClick = (e, i) => {
    setSelectedMonth(e.target.innerHTML);
    setActiveDate(e.target.innerHTML);
  }
  
  useEffect(()=>{
  }, [activeDate]);

  return (
    <div className={styles.container}>
      <div className={styles.slideTray}>
        {range ? range === "2024" ? months.slice(0, 5).map((month) => {
          return (
            <div 
              className={styles.months}
              key={`${month}-div`}
              onClick={showGames}
            >
              <p 
                onClick={dateClick}
                className={month.includes(selectedMonth) ? styles.opacity100 : styles.opacity50}  
              >
                {month}
              </p>
            </div>
                )
              }) : months.slice(5, -2).map((month, i) => {
                return (
                  <div 
                    className={`${styles.months} ${activeDate ? styles.active : ''}`}
                    key={`${i}-div2`}
                    onClick={(e) => dateClick(e, i)}
                  >
                    <p
                      onClick={showGames}
                      className={month.includes(selectedMonth) ? styles.opacity100 : styles.opacity50}  
                    >
                      {month}
                    </p>
                  </div>
                )
              }) : null}
        </div>
    </div>
  );
};

export { CalendarDates };
