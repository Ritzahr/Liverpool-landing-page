import styles from './game-fixtures-section.module.css';
import { CalendarDates } from '@/components/atoms/calendar-dates';
import { useState, useEffect } from 'react';
import { Years } from '@/components/atoms/years';
import { months } from '@/app/config/months';
import Image from 'next/image';
import { FixtureHud } from '@/components/molecules/fixture-hud';

const GameFixturesSection = () => {
  const [clickedYear, setClickedYear] = useState(null);
  const [clickedMonth, setClickedMonth] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoveredTeam, setHoveredTeam] = useState(null);
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
    if (clickedMonth) {
      setClickedMonth(null)
    } else {
      setClickedMonth(target.innerText)
    }
  }

  useEffect(() => {
    setClickedMonth(null)
  }, [clickedYear])
  return (
    <div className={styles.main}>
      <div className={`${styles.hidden} ${isHovering ? styles.reveal : ''}`}>
        <Image
          alt={"testimage"}
          src={`/${hoveredTeam}.jpg`}
          fill
        />
      </div>
      <Years
        expand={expandCalendar}
        clickedYear={clickedYear}
        isHovering={isHovering}
      />
      <CalendarDates
        range={range}
        months={months}
        showGames={showGames}
        clickedYear={clickedYear}
        clickedMonth={clickedMonth}
        setClickedMonth={setClickedMonth}
      />
      <FixtureHud
        month={clickedMonth}
        setClickedMonth={setClickedMonth}
        setIsHovering={setIsHovering}
        setHoveredTeam={setHoveredTeam}
        isHovering={isHovering}
      />
    </div>
  )
};

export { GameFixturesSection };
