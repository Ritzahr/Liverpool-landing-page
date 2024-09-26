import styles from "./fixtures-image.module.css";

const FixturesImage = ({ img, children }) => {
  return (
    <div 
      className={styles.tableFixtures} 
      style={{
        backgroundImage: `url(${img.src})`,
      }}>
        {children}
      </div>
  );
};

export { FixturesImage };
