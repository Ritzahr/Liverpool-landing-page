import styles from "./icon-tray.module.css";
import { icons } from "@/assets/icons";
import Image from "next/image";

const IconTray = () => {
  return (
    <div className={styles.icons}>
      {icons.map((i) => {
        return (
         <Image 
            src={i} 
            alt={`${i} Icons`}
            width={40} 
            height={40}
            key={`img-${i}`}
          />
      )
      })}
    </div>
  );
};

export { IconTray };
