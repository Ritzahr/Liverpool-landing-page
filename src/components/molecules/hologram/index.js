import Image from "next/image";
import styles from './hologram.module.css';
import { Cross } from "@/components/atoms/cross";
import { Bio } from "@/components/atoms/bio";

const Hologram = ({cardClicked, setCardClicked, fade}) => {
  return (
    <div
      className={`${styles.container} ${
        cardClicked ? styles.active : ""
      }`}
    >
      {cardClicked && (
        <div className={styles.section}>
          <Cross setCardClicked={setCardClicked}/>
          <div className={styles.imgWrapper}>
            <Image
              className={`${styles.image} ${fade ? styles.fadeIn : ""}`}
              src={`${cardClicked.bodyImage.src}`}
              alt={`Image of ${cardClicked.bodyImage.src}`}
              fill
            />
          </div>
          <Bio fade={fade} cardClicked={cardClicked}/>
        </div>
      )}
    </div>
  );
};

export { Hologram };
