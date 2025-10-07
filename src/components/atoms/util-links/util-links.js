import styles from "./util-links.module.css";
import { LinkBTN } from "../link-button";

const UtilLinks = ({ links }) => {
  return (
    <div className={styles.utilities}>
      <ul>
        {links.map((tag) => {
          return (
            <li className={styles.link} key={`Link-${tag}`}>
              <LinkBTN link="/footer-utils-not-found" text={tag} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { UtilLinks };
