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
  
  const handleScroll = (entry, inView, i) => {
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
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      {range
        ? range === "2025"
          ? months.slice(0, 5).map((month, i) => {
              return (
                <InView
                  onChange={(inView, entry) => handleScroll(entry, inView, i)}
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
                      className={
                        month.includes(clickedMonth)
                          ? styles.opacity100
                          : styles.opacity50
                      }
                    >
                      {month}
                    </p>
                  </div>
                </InView>
              );
            })
          : months.slice(5, -2).map((month) => {
              return (
                <InView
                  onChange={(inView, entry) => handleScroll(entry, inView)}
                  root={containerRef.current}
                  key={`${month}-div2-container`}
                >
                <div
                  className={`${styles.section} ${
                    activeDate ? styles.active : ""
                  }`}
                  onClick={showGames}
                  ref={cardRef}
                  >
                  <p
                    onClick={dateClick}
                    className={
                      month.includes(clickedMonth)
                        ? styles.opacity100
                        : styles.opacity50
                    }
                  >
                    {month}
                  </p>
                </div>
                </InView>
              );
            })
        : null}
    </div>
  );
};

export { Months };
