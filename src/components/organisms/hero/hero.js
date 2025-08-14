import styles from "./hero.module.css";
import Image from "next/image";
import { Mantra } from "../../atoms/mantra";
import { LinkBTN } from "../../atoms/link-button";

const Hero = ({ img, title }) => {
  return (
    <div className={styles.section}>
        <div className={styles.blinder}/>
        <Image
          src={img.src}
          alt={"liverpool_banner"}
          className={styles.image}
          fill
        />
      <div className={styles.layout}>
        <div className={styles.intro}>
          <p> 
            {title}
          </p>
        </div>
        <LinkBTN text={"VISIT OFFICIAL SITE"} link={'https://www.liverpool.com/'} />
      </div>
      <Mantra text={'You Will Never Walk Alone'}/>
    </div>
  );
};

export { Hero };
