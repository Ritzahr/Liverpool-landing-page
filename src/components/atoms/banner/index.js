import styles from "./banner.module.css";

const Banner = ({ title, color }) => {
  return (
    <div className={styles.container} role="header">
    {title.split(' ').map((word, i) => {
      return ( 
        <p 
          className={`${styles.text} ${styles[`title-${i}`]}`}
          key={`${word}-section`}
          style={{color: color}}
        >
          { word }
        </p>
      );
    })
    }
    </div>
  );
};

export { Banner };
