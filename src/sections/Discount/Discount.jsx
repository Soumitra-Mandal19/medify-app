import styles from "./Discount.module.css";
import discountImgOne from "../../assets/flat30discount.png";
import discountImgTwo from "../../assets/get100off.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

const images = [{ img: discountImgOne }, { img: discountImgTwo },
{ img: discountImgOne }, { img: discountImgTwo },
{ img: discountImgOne }, { img: discountImgTwo },
{ img: discountImgOne }, { img: discountImgTwo }];

export const Discount = () => {

    return (
        <div className={styles.root}>
        <div className={styles.swiperConatiner}>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={3}
                spaceBetween={20}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}>
                {images.map((image, index) => {
                    return (
                        <SwiperSlide key={index}><div><img className={styles.image} src={image.img} alt="" /></div></SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
        </div>
    )
}