import styles from "./months.module.css";
import { useState, useRef, useEffect } from "react";
import { InView } from "react-intersection-observer";

const Months = ({
  setContainerRef,
  setCardWidth,
  range,
  months,
  showGames,
  clickedMonth,
  setClickedMonth
}) => {
  const [activeDate, setActiveDate] = useState(null);
  const containerRef = useRef(null);
  const [elementRef, setElementRef] = useState(null);
  const cardRef = useRef(null);
  
  const dateClick = ({ target }) => {
    if (clickedMonth) {
      setClickedMonth(null);
      showGames(null)
    } else {
      setClickedMonth(target.innerHTML);
    }
    setActiveDate(target.innerHTML);
  };
  
  const handleScroll = (entry, inView) => {
    if (inView) {
      if (clickedMonth) {
        showGames(entry)
        setClickedMonth(entry.target.innerText)
      }
    }
  };

  useEffect(() => {
    setCardWidth(cardRef);
    setContainerRef(containerRef);
    setElementRef(containerRef.current)
  }, []);

  return (
      <ul className={styles.container} ref={containerRef}>
        {range
          ? range === "2025"
            ? months.slice(0, 5).map((month) => {
                return (
                  <li key={`${month}-div1-container`}>
                  <InView
                    onChange={(inView, entry) => handleScroll(entry, inView)}
                    root={elementRef}
                  >
                    <div
                      className={styles.section}
                      onClick={showGames}
                      ref={cardRef}
                      id={`${month}`}
                    >
                      <button
                        onClick={dateClick}
                        className={
                          month.includes(clickedMonth)
                            ? styles.opacity100
                            : styles.opacity50
                        }
                      >
                        {month}
                      </button>
                    </div>
                  </InView>
                  </li>
                );
              })
            : months.slice(5, -2).map((month) => {
                return (
                  <li key={`${month}-div2-container`}>
                  <InView
                    onChange={(inView, entry) => handleScroll(entry, inView)}
                    root={elementRef}
                  >
                  <div
                    className={`${styles.section} ${
                      activeDate ? styles.active : ""
                    }`}
                    onClick={showGames}
                    ref={cardRef}
                    >
                    <button
                      onClick={dateClick}
                      className={
                        month.includes(clickedMonth)
                          ? styles.opacity100
                          : styles.opacity50
                      }
                    >
                      {month}
                    </button>
                  </div>
                  </InView>
                  </li>
                );
              })
          : null}
      </ul>
  );
};

export { Months };
