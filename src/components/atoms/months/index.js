import styles from './months.module.css';
import { useState, useRef, useEffect } from "react";
import { InView } from "react-intersection-observer";

const Months = ({setContainerRef, setCardWidth, range, months, showGames, setVisibleMonth, setIntersectRect}) => {
  const [activeDate, setActiveDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  
   const dateClick = ({target}) => {
    setSelectedMonth(target.innerHTML);
    setActiveDate(target.innerHTML);
  }

  const handleScroll = (entry, inView) => {
    if (inView) {
      setVisibleMonth(entry.target.innerText);
      setIntersectRect(entry.boundingClientRect);
      // console.log(entry.boundingClientRect)
    };
  }

  useEffect(() => {
      setCardWidth(cardRef)
      setContainerRef(containerRef)
  }, [])

  return (
    <div className={styles.container} ref={containerRef}>
        {range ? range === "2025" ? months.slice(0, 5).map((month, i) => {
          return (
            <InView
              onChange={(inView, entry) => handleScroll(entry, inView)}
              root={containerRef.current}
              key={`${month}-div1-container`}
            > 
              <div 
                className={styles.section}
                onClick={showGames}
                ref={cardRef}
                id={`${month}`}
                >
                <p 
                  onClick={dateClick}
                  className={month.includes(selectedMonth) ? styles.opacity100 : styles.opacity50}
                  >
                  {month}
                </p>
              </div>
            </InView>
              )}) : months.slice(5, -2).map((month) => {
                return (
                  <div 
                    className={`${styles.section} ${activeDate ? styles.active : ''}`}
                    key={`${month}-div2-container`}
                    onClick={dateClick}
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
  )
};

export { Months };
