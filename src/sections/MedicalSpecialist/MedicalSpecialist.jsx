import img1 from "../../assets/heena (1).png";
import img2 from "../../assets/lesley.png";
import img3 from "../../assets/ankur (1).png";
import img4 from "../../assets/ahmad (1).png";
import img5 from "../../assets/ahmad-stevens.png";
import { MedicalSpecialistCard } from "./MedicalSpecialistCard";
import styles from "./MedicalSpecialist.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';


const specialists_data = [
    { img: img1, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
    { img: img3, title: "Dr. Ankur Sharma", designation: "Medicine" },
    { img: img5, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
    { img: img4, title: "Dr. Ahmad Khan", designation: "Cardiologist" },
    { img: img2, title: "Dr. Lesley Hull", designation: "Medicine" }];


export const MedicalSpecialist = () => {

    return (
        <div className={styles.root}>
            <div className={styles.headingFont}>Our Medical Specialist</div>
            <div className={styles.swiperContainer} >
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={3}
                    autoplay={{ delay: 2000 }}
                    pagination={{ clickable: true }}
                >
                    <div className={styles.card}>

                        <div className={styles.picsAndDetailsConatiner}>
                            {specialists_data.map((specialist) => {
                                return (
                                    <SwiperSlide key={specialist.title}>
                                        <MedicalSpecialistCard img={specialist.img} title={specialist.title} designation={specialist.designation} />
                                    </SwiperSlide>
                                )
                            })}
                        </div>
                    </div>
                </Swiper>
            </div>
        </div>
    )
}


