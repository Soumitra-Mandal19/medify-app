import styles from "./BookingCard.module.css"
import HospitalLogo from "../../assets/hospital_logo_img.png";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

export const BookingCard = ({hospitalName, hospitalAddress, city, state, hospitalRating, time, date }) => {
    return (
        <>
            <div className={styles.root}>
                <div style={{display:"flex", padding:"24px", gap:"16px" }} >
                <div className={styles.imageColumn}>
                    <div className={styles.logoCircleBackground}>
                        <img className={styles.hospitalLogoImage} src={HospitalLogo} alt="" />
                    </div>
                </div>
                <div className={styles.hospitalDetailsContainer}>
                    <div className={styles.hospitalName}>{hospitalName}</div>
                    <div className={styles.hospitalCityAndState}>{`${city},${state}`}</div>
                    <div className={styles.hospitalDetail}>{hospitalAddress}</div>
                    <div><span className={styles.free}>FREE</span><span className={styles.hospitalDetail}> <span className={styles.strikeThrough}>₹500</span> Consultation fee at clinic</span></div>
                    <div className={styles.rating}>
                    <ThumbUpAltIcon className={styles.thumbIcon} />  {hospitalRating}
                    </div>
                </div>
                <div className={styles.availableAndButtonContainer}>
                    <div style={{width:"84px", height:"31px", border:"1px solid #2AA7FF",borderRadius:"3px", background:"white", color:"#2AA7FF" , display:"flex", justifyContent:"center", alignItems:"center"}} >{time}</div>
                    <div style={{width: "128px", height:"32px", borderRadius:"3px", border:"1px solid #00A500", color:"#007100",fontWeight:"700", display:"flex", justifyContent:"center", alignItems:"center"}}>{date}</div>
                </div>
                </div>
            </div>
            
        </>
    )
}