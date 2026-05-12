import styles from "./fixtures-image.module.css";

const FixturesImage = ({ img, children }) => {
  return (
    <div className={styles.wrapper}> 
      <div
        className={styles.tableFixtures} 
        style={{
          backgroundImage: `url(${img.src})`,
        }}>
          {children}
        </div>
    </div>
  );
};

export { FixturesImage };
