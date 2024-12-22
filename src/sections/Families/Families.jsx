import styles from "./Families.module.css";
import happyPatientIcon from "../../assets/happyPatient-icon.png";
import hospitalsIcon from "../../assets/hospital-icon (1).png";
import labIcon from "../../assets/lab-icon (2).png";
import doctorIcon from "../../assets/doctor-icon (3).png";

export const Families = ()=> {
    return (
        <div className={styles.root}>
                <div className={styles.mainContainer}>
                    <div className={styles.textContainer}>
                        <div className={styles.headingOneFont}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</div>
                        <div className={styles.subHeadingFont}>Our Families</div>
                        <div className={styles.paraFont}><p >We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p></div>
                    </div>
                    <div className={styles.cardContainer}>
                        <div className={styles.cardOne}>
                            <div><img className={styles.imageLogo} src={happyPatientIcon} alt="happy-patient" /></div>
                            <div className={styles.subHeadingFont}>5000+</div>
                            <div className={styles.cardTextFont}>Happy Patients</div>
                        </div>
                        <div className={styles.cardTwo}>
                            <div><img className={styles.imageLogo} src={hospitalsIcon} alt="hospital" /></div>
                            <div className={styles.subHeadingFont}>200+</div>
                            <div className={styles.cardTextFont}>Hospitals</div>
                        </div>
                        <div className={styles.cardThree}>
                            <div><img className={styles.imageLogo} src={labIcon} alt="Laboratories" /></div>
                            <div className={styles.subHeadingFont}>1000+</div>
                            <div className={styles.cardTextFont}>Laboratories</div>
                        </div>
                        <div className={styles.cardFour}>
                            <div><img className={styles.imageLogo} src={doctorIcon} alt="expertdocs" /></div>
                            <div className={styles.subHeadingFont}>700+</div>
                            <div className={styles.cardTextFont}>Expert Doctors</div>
                        </div>
                    </div>
                </div>
        </div>
    )
}