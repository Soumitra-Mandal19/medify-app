import { useState } from "react";
import HospitalLogo from "../../assets/hospital_logo_img.png";
import styles from "./MedicalCenterCard.module.css"
import { TimeSlotTop } from "../TimeSlotTop/TimeSlotTop";
import { addBooking } from "../../booking";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { ConfirmBookingModal } from "../ConfirmBookingModal/ConfirmBookingModal";


export const MedicalCenterCard = ({ id, hospitalName, hospitalAddress, city, state, hospitalRating }) => {

    const [displayTimeSlot, setDisplayTimeSlot] = useState(false);
    const [displayModal, setDisplayModal] = useState(false);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSlotSelection = (date, time) => {
        setDate(date);
        setTime(time);
        setDisplayModal(true);

    }

    const handleButtonClick = () => {
        setDisplayTimeSlot(true);

    }

    const handleCancelClick = () => {
        setDisplayTimeSlot(false);
    }

    const handleConfirmClick = () => {
        addBooking(id, hospitalName, city, state, hospitalAddress, hospitalRating, date, time);
        setDisplayModal(false);
        setDisplayTimeSlot(false);

    }

    const handleOnCancelClick = () => {
        setDisplayModal(false);
    }

    return (

        <div>
            <div className={styles.root}>
                <div className={styles.imageColumn}>
                    <div className={styles.logoCircleBackground}>
                        <img className={styles.hospitalLogoImage} src={HospitalLogo} alt="" />
                    </div>
                </div>
                <div className={styles.hospitalDetailsContainer}>
                    <div className={styles.hospitalName}>{hospitalName}</div>
                    <div className={styles.hospitalCityAndState}>{`${city},${state}`}</div>
                    <div className={styles.hospitalDetail}>{hospitalAddress}</div>
                    <div><span className={styles.free}>FREE</span><span className={styles.hospitalDetail}>
                        <span className={styles.strikeThrough}>₹500</span> Consultation fee at clinic</span></div>
                    <div className={styles.rating}>
                        <ThumbUpAltIcon className={styles.thumbIcon} /> {hospitalRating || 'N/A'}
                    </div>
                </div>
                <div className={styles.availableAndButtonContainer}>
                    <div className={styles.availablity}>Available Today</div>
                    {displayTimeSlot ? <button onClick={handleCancelClick} className={styles.cancelButton}>Cancel</button> :
                        <button onClick={handleButtonClick} className={styles.button}>Book FREE Center Visit</button>}
                </div>
            </div>
            {displayTimeSlot ? <TimeSlotTop id={id} onSlotSelection={handleSlotSelection} ></TimeSlotTop> : null}
            {displayModal ? <ConfirmBookingModal date={date} time={time} onConfirmClick={handleConfirmClick} onCancelClick={handleOnCancelClick} /> : null}

        </div>

    )
}