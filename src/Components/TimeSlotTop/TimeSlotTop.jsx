import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper/modules';
import 'swiper/css/bundle';
import { useMemo, useState } from 'react';
import { Tab } from '@mui/base/Tab';
import { TabsList } from '@mui/base/TabsList';
import { Tabs } from '@mui/base/Tabs';
import { formatDate, formattedDate, getConsecutiveDates, getBookingsById } from '../../booking';
import { TimeSlotBottom } from '../TimeSlotBottom/TimeSlotBottom';
import styles from "./TimeSlotTop.module.css";


export const TimeSlotTop = ({id, onSlotSelection}) => {

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabChange = (_, newIndex) => {
        setSelectedTab(newIndex);
    }


    const dates = useMemo(() => getConsecutiveDates(new Date(), 9),[])

    const selectedDate = formatDate(dates[selectedTab]);

    
    const bookingsAvailable = (currentDate) => {

        const bookings = getBookingsById(id).filter(x => x.date === formatDate(currentDate));
        
        return 15 - bookings.length;
    }
    
    return(
        <div className={styles.root}>
            <div className={styles.swiperContainer}>
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={3}
                    navigation
                >
                    {dates.map((date, index) => <SwiperSlide><Tabs value={selectedTab} onChange={handleTabChange}>
                        <TabsList>
                            <Tab value={index} style={{ width: "205px", height: "58.2px", border: "none", background: "#FFFFFF", borderBottom: "4px solid", borderColor: selectedTab === index ? "#2AA7FF" : "#F0F0F5" }}>
                                <div className={styles.dateAndAvailabilityContainer}>
                                    <div style={{ color: "#414146", fontSize: "16px", fontWeight: selectedTab === index ? "700" : "400" }}>{formattedDate(date)}</div>
                                    <div className={styles.availabilityText}>{bookingsAvailable(date)} Slots Available</div>
                                </div>
                            </Tab>
                        </TabsList>
                    </Tabs></SwiperSlide>)}
                </Swiper>
            </div>
           
            <TimeSlotBottom id={id} date={selectedDate} onSlotButtonClick={onSlotSelection} ></TimeSlotBottom>
           
        </div>
    )
}