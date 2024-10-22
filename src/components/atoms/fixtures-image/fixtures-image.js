import styles from "./fixtures-image.module.css";

const FixturesImage = ({ img, children }) => {
  return (
    <div className={styles.wrapper}> 
    <section 
      className={styles.tableFixtures} 
      style={{
        backgroundImage: `url(${img.src})`,
      }}>
        {children}
      </section>
    </div>
  );
};

export { FixturesImage };
