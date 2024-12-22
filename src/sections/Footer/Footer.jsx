import styles from "./Footer.module.css"
import medifyLogo from "../../assets/Logo.svg";
import fbIcon from "../../assets/fb.png";
import twitterIcon from "../../assets/twitter.png";
import youtubeIcon from "../../assets/youtube.png";
import pintrestIcon from "../../assets/pintrest.png";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const arrayLists = [["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"],
["Orthology", "Neurology", "Dental Care", "Opthalmology", "Cardiology"],
["About Us", "Our Pricing", "Our Gallery", "Appointment", "Privacy Policy"]];

export const Footer = () => {

    return (
        <div className={styles.root}>
            <div className={styles.mainContainer}>
                <div className={styles.topPortion}>
                    <div className={styles.logoContainer}>
                        <div className={styles.logoMedify}><img src={medifyLogo} alt="medify_logo" /></div>
                        <div className={styles.socialMediaLogo}>
                            <div className={styles.iconBackground}><img src={fbIcon} alt="fb" /></div>
                            <div className={styles.iconBackground}><img src={twitterIcon} alt="twitter" /></div>
                            <div className={styles.iconBackground}><img src={youtubeIcon} alt="youtube" /></div>
                            <div className={styles.iconBackground}><img src={pintrestIcon} alt="pintrest" /></div>
                        </div>
                    </div>

                    {/* <div className={styles.listContainer}> */}
                    {arrayLists.map((list, index) => (
                        <div key={`_${index}`} className={styles.listContainer}>
                            <ul className={styles.ulStyle}>
                                {list.map((item, index) => (
                                    <li key={`${index}_`} className={styles.liStyle}><ChevronRightIcon />{item}</li>

                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className={styles.bottomPortion}>
                    Copyright ©2023 Surya Nursing Home.com. All Rights Reserved
                </div>
            </div>
        </div>

    )
}