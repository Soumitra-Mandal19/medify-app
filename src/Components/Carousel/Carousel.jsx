import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/bundle';



import { TimeSlotTop } from '../TimeSlotTop/TimeSlotTop';

export const Carousel = () => {
    return (
        <Swiper
      modules={[Navigation,Pagination]}
      slidesPerView={3}
      navigation
    >

      <SwiperSlide><div style={{width:"250px", height:"150px", background:"red"}}>Slide 1</div></SwiperSlide>  
      <SwiperSlide><div style={{width:"250px", height:"150px", background:"red"}}>Slide 2</div></SwiperSlide>
      <SwiperSlide><div style={{width:"250px", height:"150px", background:"orange"}}>Slide 3</div></SwiperSlide>
      <SwiperSlide><div style={{width:"250px", height:"150px", background:"green"}}>Slide 4</div></SwiperSlide>
      <SwiperSlide><div style={{width:"250px", height:"150px", background:"blue"}}>Slide 5</div></SwiperSlide>
    
    </Swiper>
    )
}