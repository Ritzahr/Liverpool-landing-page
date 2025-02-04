import styles from "./banner.module.css";

const Banner = ({ text, color }) => {
  return (
    <>
    {text.split(' ').map((word, i) => {
      console.log("THIS is the color:", color)
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
    </>
  );
};

export { Banner };
