import styles from "./Specialisation.module.css";
import dentistIcon from "../../assets/dentist.png";
import primaryCareIcon from "../../assets/primary.png";
import cardiologyIcon from "../../assets/cardio.png";
import mriIcon from "../../assets/mri.png";
import bloodTestIcon from "../../assets/bloodtest.png";
import piscologistIcon from "../../assets/pisco.png";
import laboratoryIcon from "../../assets/dentist.png";
import xRayIcon from "../../assets/xray.png";

const specialisations = [
    {img: dentistIcon, title: "Dentistry"},
    {img: primaryCareIcon, title: "Primary Care"},
    {img: cardiologyIcon, title: "Cardiology"},
    {img: mriIcon, title: "MRI Resonance"},
    {img: bloodTestIcon, title: "Blood Test"},
    {img: piscologistIcon, title: "Piscologist"},
    {img: laboratoryIcon, title: "Laboratory"},
    {img: xRayIcon, title: "X-Ray"}
 ]


export const Specialisation = () => {

   
    return(
        <div className={styles.root}>
            <div className={styles.heading}>Find by specialisation</div>
            <div className={styles.cardContainer}>
                {specialisations.map((specialisation) => {
                    return (
                        <div key={specialisation.title} className={styles.specialisationCard}>
                            <div><img className={styles.logoImg} src={specialisation.img} alt={specialisation.title}/></div>
                            <div className={styles.specialisationTitle}>{specialisation.title}</div>
                        </div>
                    )
                })}
            </div>
            <div className={styles.buttonContainer}><button className={styles.viewAllButton}>View All</button></div>
        </div>
    )
}