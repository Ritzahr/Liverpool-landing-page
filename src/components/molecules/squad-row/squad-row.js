import Image from "next/image";
import styles from "./squad-row.module.css";

const SquadRow = ({ img }) => {
    return (
       <div className={styles.container} >
        <div className={styles.bannerWrap}> 
          <p className={styles.text}>Squad</p>
        </div>
        <div className={styles.inner}>
        <Image
          className={styles.images}
          src={img[0]} 
          alt='image of player squad'
          fill
        />
        </div>
      </div>
      )
};

export { SquadRow };
