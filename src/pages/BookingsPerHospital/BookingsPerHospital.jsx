import { BookingCard } from "../../Components/BookingCard/BookingCard"
import { getBookingsFromLocalStorage } from "../../booking"
import { Navbar } from "../../Components/Navbar/Navbar";
import styles from "./BookingsPerHospital.module.css";
import advertisementImg from "../../assets/sensodyne_dweb.png.png";
import { DownloadApp } from "../../sections/DownloadApp/DownloadApp";
import { Footer } from "../../sections/Footer/Footer";
import { useState } from "react";


export const BookingsPerHospital = () => {

    const bookings = getBookingsFromLocalStorage();
    const [searchText, setSearchText] = useState("");
    
    return (
        <div className={styles.root}>
            <Navbar />
            <div className={styles.blueBoxBelowNav}>
                <div style={{ paddingLeft: "30px" }}>My Bookings</div>
                <div className={styles.hospitalSearchBoxContainer}>
                    <input 
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText} className={styles.hospitalSearchBoxInput} placeholder="Search By Hospital">
                    </input>
                    <button className={styles.searchButton}>Search</button>
                </div>
            </div>

            <div className={styles.mainContainer}>
                <div className={styles.bookingCardContainerInner}>{bookings
                .filter(x => x.hospitalName.toLowerCase().includes(searchText.toLowerCase()))
                .map((booking, index) => <BookingCard
                    key={index}
                    id={booking.id}
                    hospitalName={booking.hospitalName}
                    hospitalAddress={booking.hospitalAddress}
                    city={booking.city}
                    state={booking.state}
                    hospitalRating={booking.hospitalRating}
                    date={booking.date}
                    time={booking.time}
                >

                </BookingCard>)}
                </div>
                <div className={styles.advertisement}><img src={advertisementImg} alt="advertisement" /></div>
            </div>
            <div className={styles.adjustPosition}>
                <DownloadApp />
            </div>
            <div className={styles.adjustPosition}>
                <Footer />
            </div>

        </div>
    )
}