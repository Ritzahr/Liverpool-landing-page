import { Banner } from "../../atoms/banner/banner";
import Image from "next/image";
import styles from "./squad-row.module.css";
import 'swiper/css';
import 'swiper/css/bundle';


const SquadRow = ({ img }) => {
    return (
       <div className={styles.container} >
        <div className={styles.bannerWrap}> 
          <p className={styles.text_1}>Squad</p>
          <p className={styles.text_2}>Details</p>
        </div>
        <div className={styles.inner}>
        <Image
          className={styles.images}
          src={img[0]} 
          alt=''
          fill
        />
        </div>
      </div>
      )
};

export { SquadRow };
