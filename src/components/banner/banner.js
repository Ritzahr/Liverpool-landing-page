import styles from "./banner.module.css";

const Banner = ({ text }) => {
  return (
    <>
    <p className={styles.text}>{ text }</p>
    <div className={styles.banner}>
    </div>
    
    </>
  );
};

export { Banner };
