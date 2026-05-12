import { UtilLinks } from "@/components/atoms/util-links/util-links";
import styles from "./footer.module.css";
import { IconTray } from "@/components/atoms/icon-tray/icon-tray";
import { utilities, links } from "@/app/config";
import { LinkBTN } from "@/components/atoms/link-button";
import { icons } from "@/assets/icons";

const Footer = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        {links.map(({text, link}) => {
          return <LinkBTN 
            text={text}
            link={link}
            key={`key:${text}+${link}`}
          />
        })}
      </ul>
      <div className={styles.socials}>
        <h5>Follow Us</h5>
        <IconTray icons={icons}/> 
      </div>
      <UtilLinks links={utilities}/>
    </div>
  );
};

export { Footer };
