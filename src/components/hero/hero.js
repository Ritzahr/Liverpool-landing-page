import styles from "./hero.module.css";

const Hero = ({ img }) => {
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(${img.src})`,
      }}
    ></div>
  );
};

export { Hero };
