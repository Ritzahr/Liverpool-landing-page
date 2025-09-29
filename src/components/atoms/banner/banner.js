import styles from "./banner.module.css";

const Banner = ({ text, color }) => {
  return (
    <div className={styles.container}>
    {text.split(' ').map((word, i) => {
      return ( 
        <p 
          className={`${styles.text} ${styles[`text-${i}`]}`}
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
