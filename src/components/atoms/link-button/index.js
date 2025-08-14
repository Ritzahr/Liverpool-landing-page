import Link from "next/link";
import styles from './link-button.module.css';

const LinkBTN = ({text, link}) => {
  return (
    <div className={styles.link}> 
        <button>
          <Link 
            href={link}
            target={"_blank"}
          >
            {text}
          </Link>
        </button>
      </div> 
  )
}

export { LinkBTN }