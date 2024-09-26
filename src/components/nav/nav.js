import styles from "./nav.module.css";

const Nav = () => { 
  return (
    <nav> 
      <ul className={styles.nav}>
          <li className={styles.li}>
              News
          </li>
          <li className={styles.li}>
              Official Site
          </li>
          <li 
            target="_blank"
            src="https://store.liverpoolfc.com/?utm_proposition=retail&gad_source=1&gclid=CjwKCAjwreW2BhBhEiwAavLwfHdTwvt9kUGfrFwiMKx-gtcQdGcle-yLUWZpC6Vbn1K44q_YjEZnERoCw7MQAvD_BwE#"
            className={styles.li}>
              Shop
          </li>
      </ul>
    </nav>
    ) 
};

export { Nav };