import styles from "./years.module.css";

const Years = ({ expand, clickedYear, isHovering }) => {
  return (
    <div
      className={`${styles.years_container} ${isHovering ? styles.hide : ""}`}
    >
      <div
        className={`${styles.years} ${
          clickedYear === "2025" ? styles.active_2025 : ""
        }`}
        onClick={expand}
      >
        {clickedYear === "2025" ? (
          <p className={styles.year_shadow}>2025</p>
        ) : null}
        <p>2025</p>
      </div>
      <div
        className={`${styles.years} ${
          clickedYear === "2026" ? styles.active_2026 : ""
        }`}
        onClick={expand}
      >
        {clickedYear === "2026" ? (
          <p className={styles.year_shadow}>2026</p>
        ) : null}
        <p>2026</p>
      </div>
    </div>
  );
};

export { Years };
