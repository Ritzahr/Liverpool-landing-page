import styles from "./banner.module.css";

const Banner = ({ text }) => {
  return (
    <>
    {text
      .split(' ')
      .map((word, i) => {
        const paragraph = 'paragraph' + i;
      return  (
        <p
          className={`${styles[i]}`}
          key={word + '_section'}
        >
          {word}
        </p>
      );
    })}
    {/* <p className={styles.text2}>{ text }</p> */}
    </>
  );
};

export { Banner };
