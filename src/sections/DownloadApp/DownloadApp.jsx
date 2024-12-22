import styles from "./DownloadApp.module.css";
import arrowSign from "../../assets/Vector (3).png";
import googlePlay from "../../assets/google_play.png.png";
import appleStore from "../../assets/apple_store.png.png";
import mobileImg from "../../assets/mobile.jpg";

export const DownloadApp = () => {
    return (
        <div className={styles.root}>
            <div className={styles.mainContainer}>
                <div className={styles.imageContainer}>
                    <div><img className={styles.mobilePic} src={mobileImg} alt="" /></div>
                </div>
                <div style={{ display: "flex" }}>
                    <div className={styles.arrow}>
                        <div><img src={arrowSign} alt="arrow_sign" /></div>
                    </div>
                    <div className={styles.detailContainer}>
                        <div className={styles.headingBox}>
                            Download the <span className={styles.medifyTextColor}>Medify</span> App
                        </div>
                        <div>
                            <span className={styles.getLinkText}>Get the link to download the app</span>
                            <div className={styles.inputAndButtonContainer}>
                                <div className={styles.inputBarContainer}>
                                    <div className={styles.countryCode}>+91</div><div><input type="tel" className={styles.inputBarStyle} placeholder="Enter phone number" name="phone" id="phone" /></div>
                                </div>
                                <div>
                                    <button className={styles.button}>Send SMS</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.googleAndAppleImage}>
                            <div><img src={googlePlay} alt="google_play" /></div>
                            <div><img src={appleStore} alt="apple_store" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}