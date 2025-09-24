import styles from "./icon-tray.module.css";
import { icons } from "@/assets/icons";
import Image from "next/image";

const IconTray = () => {
  return (
    <div className={styles.icons}>
      {icons.map((icon, i) => {
        return (
         <Image 
            src={icon} 
            alt={`${icon} Icons`}
            width={40} 
            height={40}
            key={`Icon-tray-img-${icon}+${i}`}
          />
        )
      })}
    </div>
  );
};

export { IconTray };
