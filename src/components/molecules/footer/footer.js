import { UtilLinks } from "@/components/atoms/util-links/util-links";
import styles from "./footer.module.css";
import { IconTray } from "@/components/atoms/icon-tray/icon-tray";

const utilities = [
  'About Us',
  'Contact Us',
  'mynewsassistant',
  'RSS Feeds',
  'Newsletter Signup',
  'Syndication & Licensing',
  'T&Cs',
  'Cookie Policy',
  'Competition Rules',
  'How to Complain',
  'Corrections & Clarifications',
  'Privacy Notice',
  'AI Notice',
  'Do not sell or share my data',
  '© 2024 a Reach plc subsidiary'
  ];

const Footer = () => {
  return (
    <main className={styles.container}>
      <ul className={styles.links}>
        <li>
          <a>Liverpool FC News</a>
        </li>
        <li>
          <a>Shop</a>
        </li>
        <li>
          <a>Schedule</a>
        </li>
        <li>
          <a>Premier League</a>
        </li>
        <li>
          <a>Features</a>
        </li>
      </ul>
      <div className={styles.socials}>
        <h5>Follow Us</h5>
        <IconTray/> 
      </div>
      <UtilLinks links={utilities}/>
    </main>
  );
};

export { Footer };
