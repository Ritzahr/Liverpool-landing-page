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
        </div>
        <div className={styles.inner}>
          <Swiper
            modules={[Autoplay, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{duration: 2000}}
            effect='fade'
            >
            {img.map(({img, color}) => {
              return (
                <SwiperSlide
                  key={img.src}
                  className={styles.swiperSlide}
                >
                <div> 
                  <Image
                    src={img.src} 
                    alt=''
                    fill
                    className={styles.images}
                  />
                   <Banner 
                    color={color}
                    text={text}
                  />
                </div>
                </SwiperSlide>
            )}
          )}
          </Swiper>
        </div>
      </div>
      )
};

export { RowImage };
