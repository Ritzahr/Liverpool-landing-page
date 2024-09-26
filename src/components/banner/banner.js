import styles from "./banner.module.css";

const Banner = ({ text }) => {
  return (
    <div className={styles.banner}>
      <p className={styles.text}>{ text }</p>
    </div>
  );
};

export { Banner };
