import { Banner } from "../banner/banner";
import styles from "./row-image.module.css"


const RowImage = ({ img }) => { 
    return ( <div className={styles.rowImage} style={{
        backgroundImage: `url(${img.src})`
      }}>
        <Banner text={"Game Fixtures"}/>
      </div>
      )
};

export { RowImage };