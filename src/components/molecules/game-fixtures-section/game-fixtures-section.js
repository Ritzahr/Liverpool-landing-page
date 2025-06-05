import styles from './game-fixtures-section.module.css';
import { CalendarDates } from '@/components/atoms/calendar-dates/calendar-dates';
import { useState, useEffect } from 'react';
import { Years } from '@/components/atoms/years';
import { months } from '@/app/config/variables';
import { FixtureHud } from '@/components/molecules/fixture-hud';

const GameFixturesSection = () => {
  const [clickedYear, setClickedYear] = useState(null);
  const [clickedMonth, setClickedMonth] = useState(null);
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

  const showGames = ({target}) => {
      setClickedMonth(target.innerHTML)
  }

  useEffect(() => {
    setClickedMonth(null)
  }, [clickedYear])
  
  return (
    <div className={styles.main}>
      <Years
        expand={expandCalendar}
        clickedYear={clickedYear}
      />
      <CalendarDates
        range={range}
        months={months}
        showGames={showGames}
      />
      <FixtureHud month={clickedMonth} setClickedMonth={setClickedMonth}/>
    </div>
  )
};

export { GameFixturesSection };

//When I click the year, I want to change the font style, size and also add some extra effects. 
//I also want to change the font stylings of the other button.
