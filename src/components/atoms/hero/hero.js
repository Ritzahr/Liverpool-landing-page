import styles from "./hero.module.css";
import Image from "next/image";

const Hero = ({ img }) => {
  return (
    <div className={styles.hero}>
      <Image 
        src={img.src}
        fill
        alt={"liverpool_banner"}
      />
      <div className={styles.intro}>
        <p> 
          The Unofficial Liverpool Football Club Landing Page!
        </p>
      </div>
      <div className={styles.link}> 
        <p>
          VISIT OFFICIAL SITE
        </p>
      </div> 
      <div className={styles.mantraContainer}/>
      <h1 className={styles.mantra}>
        &quot;You Will Never Walk Alone.&quot;
      </h1>
    </div>
  );
};

export { Hero };
