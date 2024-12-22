import { useState } from "react";
import styles from "./TimeSlotBottom.module.css";
import { getBookingsById } from "../../booking";


export const TimeSlotBottom = ({ id, date, onSlotButtonClick }) => {


    let morningTimeSlots = ["9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM"];
    let afternoonTimeSlots = ["12:00 PM", "12:30 PM", "01:30 PM", "02:00 PM", "02:30 PM"];
    let eveningTimeSlots = ["06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM", "08:00 PM"];

    const [selectedSlot, setSelectedSlot] = useState("");

    const handleOnClick = (timeSlot) => {

        setSelectedSlot(timeSlot);
        onSlotButtonClick(date, timeSlot);

    }

    const bookings = getBookingsById(id).filter(x => x.date === date);
    bookings.forEach(element => {
        morningTimeSlots = morningTimeSlots.filter(x => x !== element.time);
        afternoonTimeSlots = afternoonTimeSlots.filter(x => x !== element.time);
        eveningTimeSlots = eveningTimeSlots.filter(x => x !== element.time);
    });


    return (
        <div className={styles.root}>
            <div className={styles.mainContainer}>
                <div className={styles.slotContainer}><span className={styles.timeslotLabel}>Morning</span> {morningTimeSlots.map((morningTimeSlot) => {
                    return (
                        <button onClick={() => handleOnClick(morningTimeSlot)} className={selectedSlot === morningTimeSlot ? styles.slotButtonSlected : styles.slotButton}>{morningTimeSlot}</button>
                    )
                })}</div>
                <div className={styles.slotContainer}><span className={styles.timeslotLabel}>Afternoon</span> {afternoonTimeSlots.map((afternoonTimeSlot) => {
                    return (
                        <button onClick={() => handleOnClick(afternoonTimeSlot)} className={selectedSlot === afternoonTimeSlot ? styles.slotButtonSlected : styles.slotButton}>{afternoonTimeSlot}</button>
                    )
                })}</div>
                <div className={styles.slotContainer}><span className={styles.timeslotLabel}>Evening</span> {eveningTimeSlots.map((eveningTimeSlot) => {
                    return (
                        <button onClick={() => handleOnClick(eveningTimeSlot)} className={selectedSlot === eveningTimeSlot ? styles.slotButtonSlected : styles.slotButton}>{eveningTimeSlot}</button>
                    )
                })}</div>
            </div>
        </div>
    )
}