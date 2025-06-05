import styles from './years.module.css';

const Years = ({ expand, clickedYear }) => {
  return (
   <div className={styles.years_container}>
        <div
          className={`${styles.years} ${clickedYear === "2024" ? styles.active_2024 : ""}`}
          onClick={expand}
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
          onClick={expand}
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
  )
}

export { Years };