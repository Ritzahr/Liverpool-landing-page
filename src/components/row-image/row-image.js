import { Banner } from "../banner/banner";
import styles from "./row-image.module.css"


const RowImage = ({ img, text }) => { 
    return ( <div className={styles.rowImage} style={{
        backgroundImage: `url(${img.src})`
      }}>
        <Banner text={text}/>
      </div>
      )
};

export { RowImage };