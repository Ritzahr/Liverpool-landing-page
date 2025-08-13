import Link from "next/link";
import styles from "./hero.module.css";
import Image from "next/image";

const Hero = ({ img }) => {
  return (
    <div className={styles.hero}>
      <Image 
        src={img.src}
        alt={"liverpool_banner"}
        className={styles.image}
        width={500}
        height={500}
      />
      <div className={styles.intro}>
        <p> 
          The Official Unofficial Liverpool Football Club Landing Page!
        </p>
      </div>
      <div className={styles.link}> 
        <button>
          <Link 
            href={'https://www.liverpool.com/'}
            target={"_blank"}
          >
            VISIT OFFICIAL SITE
          </Link>
        </button>
      </div> 
      <div className={styles.mantraContainer}/>
      <h1 className={styles.mantra}>
        &quot;You Will Never Walk Alone.&quot;
      </h1>
    </div>
  );
};

export { Hero };
