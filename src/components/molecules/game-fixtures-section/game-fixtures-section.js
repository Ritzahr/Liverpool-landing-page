import { CalendarDates } from '@/components/atoms/calendar-dates/calendar-dates';
import styles from './game-fixtures-section.module.css';
import { useState, useEffect } from 'react';
import { getClassnames } from '@/utils/style';


const GameFixturesSection = () => {
  const [clickedYear, setClickedYear] = useState(null);
  const [activeYear, setActiveYear] = useState(null);
  const [range, setRange] = useState(null);

  const expandCalendar = ({target}) => {
    setRange(null)
    if (clickedYear) {
      setClickedYear(null)
    }
    else { 
      setClickedYear(target.innerHTML);
        setRange(target.innerHTML);
    }
  };

  useEffect(() => {
  }, [clickedYear])
  
  return (
    <div className={styles.main}>
      <div className={styles.years_container}>
        <div
          className={`${styles.years} ${clickedYear === "2024" ? styles.active_2024 : ""}`}
          onClick={expandCalendar}
        >
          {clickedYear === "2024" ? (
            <p className={styles.year_shadow}>2024</p> ) : null
          }
          <p>2024</p> 
        </div>
        <div 
          className={
            `${styles.years} ${clickedYear === "2025" ?
              styles.active_2025 : ""
              }
            `} 
          onClick={expandCalendar}
        >
          {clickedYear === "2025" ? (
            <p className={styles.year_shadow}>
              2025
            </p>
            ) : null
          }
          <p>2025</p>
        </div>
      </div>
      <CalendarDates range={range}/>
    </div>
  )
};

export { GameFixturesSection };

//When I click the year, I want to change the font style, size and also add some extra effects. 
//I also want to change the font stylings of the other button.
