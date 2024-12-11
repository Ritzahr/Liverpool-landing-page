import { Banner } from "../../atoms/banner/banner";
import Image from "next/image";
import styles from "./row-image.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/bundle';


const RowImage = ({ img, text }) => {
    return (
       <div className={styles.container} >
        <div className={styles.bannerWrap}> 
          <Banner text={text}/>
        </div>
        <div className={styles.inner}>
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{duration: 2000}}
            effect='fade'
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {img.map((a) => {
              return (
                <SwiperSlide
                  key={a.src}
                  className={styles.swiperSlide}
                >
                <Image
                  src={a.src} 
                  alt=''
                  fill
                  className={styles.images}
                />
                </SwiperSlide>
            )}
          )}
          </Swiper>
        </div>
      </div>
      )
};

export { RowImage };

/* {
  url: '/Users/dwayne.afadoh/Projects/liverpool-landing-page/src/images/img-edit1.webp'
}
  */