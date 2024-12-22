import HeroDocImg from "../../assets/hero_image.png"
import styles from "./Hero.module.css"



export const Hero = () => {
    return (
        <div >
            <div className={styles.container}>
                <div className={styles.advertisementContainer}>
                    <div>
                        <div className={styles.contentBox}>
                            <div >
                                <span className={styles.firstLineContent}>Skip the travel! Find Online</span>
                            </div>
                            <div className={styles.medicalCenter}>
                                <span>Medical</span>
                                <span className={styles.centerColor}> Centers</span>
                            </div>
                        </div>
                        <div className={styles.lastLineContent}>
                            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
                        </div>
                    </div>
                    <div>
                        <button className={styles.button}>
                            Find Centers
                        </button>
                    </div>
                </div>
                <div>
                    <img className={styles.image} src={HeroDocImg} alt="hero-doctor-img" />
                </div>
                
            </div>
            
        </div>
    )
}