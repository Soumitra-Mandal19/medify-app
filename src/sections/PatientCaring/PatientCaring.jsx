import styles from "./PatientCaring.module.css";
import img1 from "../../assets/ptcaring.png";
import img2 from "../../assets/ptcaring2.png";
import blueBoxTick from "../../assets/svg.h2d-208731fd.png";
import telephoneIcon from "../../assets/telephone.png";

export const PatientCaring = () => {
    return (
        <div className={styles.root}>
                <div className={styles.container}>
                    <div>
                        <div className={styles.freeConsultationBox}>
                            <div className={styles.telephoneImgAndTextContainer}><img className={styles.telephoneImg} src={telephoneIcon} alt="telephone" /><span className={styles.freeConsultationtext}> Free Consultation</span></div>
                            <div className={styles.textFont}>Consultation with the best</div>
                        </div>
                        <div className={styles.imgTop}><img  src={img2} alt="pic2" /></div>
                        <div className={styles.imgBottom}><img  src={img1} alt="pic1" /></div>
                    </div>
                    <div className={styles.headingAndTextContainer}>
                        <div className={styles.headingContainer}>
                            <div className={styles.headingOneStyle}>HELPING PATIENTS FROM AROUND THE GLOBE!!</div>
                            <div><span className={styles.patientStyle}>Patient</span><span className={styles.caringStyle}> Caring</span></div>
                        </div>
                        <p className={styles.paraStyle}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
                        <div className={styles.blueTickAndDetailContainer}>
                            <div className={styles.blueTickAndDetail}>
                                <div><img src={blueBoxTick} alt="" /></div>
                                <div>Stay Updated About Your Health</div>
                            </div>
                            <div className={styles.blueTickAndDetail}>
                                <div><img src={blueBoxTick} alt="" /></div>
                                <div>Check Your Results Online</div>
                            </div>
                            <div className={styles.blueTickAndDetail}>
                                <div><img src={blueBoxTick} alt="" /></div>
                                <div>Manage Your Appointments</div>
                            </div>

                        </div>
                    </div>
                </div>
        </div>
    )
}