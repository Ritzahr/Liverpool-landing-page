import styles from "./banner.module.css";

const Banner = ({ text }) => {
  return (
    <>
    {text.split(' ').map((word, i) => {
      return ( 
        <p 
          className={`${styles.text} ${styles[`text-${i}`]}`}
          key={`${word}-section`}
        >
          { word }
        </p>
      );
    })
    }
    </>
  );
};

export { Banner };
