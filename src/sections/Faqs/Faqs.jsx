import styles from "./Faqs.module.css";
import faqImage from "../../assets/happy_people.png";
import plusSymbol from "../../assets/plus_img.png";
import smileyIcon from "../../assets/Frame.png";
import handHeartIcon from "../../assets/Clip path group.png";

export const Faqs = () => {
    return (
        <div className={styles.root}>
            <div className={styles.headingContainer}>
                <div className={styles.smallHeading}>Get Your Answer</div>
                <div className={styles.bigHeading}>Frequently Asked Questions</div>
            </div>
            <div className={styles.imageAndFaqContainer}>
                <div className={styles.imageContainer}>
                    <div className={styles.popUpBox}>
                    <div><img className={styles.smiley} src={smileyIcon} alt="" /></div>
                    <div>
                        <div className={styles.fontBoldTextPopUpBox}>84k+</div>
                        <div className={styles.fontNormalTextPopUpBox}>Happy Patients</div>
                    </div>
                    </div>
                    <div className={styles.handHeartBg}><img src={handHeartIcon} alt="" /></div>
                    <div ><img className={styles.image} src={faqImage} alt="happy_people_img" /></div>
                </div>
                <div className={styles.faqConatiner}>
                    <div className={styles.faqFontBox}>Why choose our medical for your family? <div className={styles.symbol}><img src={plusSymbol} alt="plusSymbol" /></div></div>
                    <div className={styles.faqFontBox}>Why we are different from others? <div className={styles.symbol}><img src={plusSymbol} alt="plusSymbol" /></div></div>
                    <div className={styles.faqFontBox}>Trusted & experience senior care & love <div className={styles.symbol}><img src={plusSymbol} alt="plusSymbol" /></div></div>
                    <div className={styles.faqFontBox}>How to get appointment for emergency cases? <div className={styles.symbol}><img src={plusSymbol} alt="plusSymbol" /></div></div>
                </div>

            </div>
        </div>
    )
}