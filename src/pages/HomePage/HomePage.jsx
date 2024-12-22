import styles from "./HomePage.module.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Hero } from "../../Components/Hero/Hero";
import { HomePageSearchBar } from "../../Components/HomePageSearchBar/HomePageSearchBar";
import { Discount } from "../../sections/Discount/Discount";
import { Specialisation } from "../../sections/Specialisation/Specialisation";
import { MedicalSpecialist } from "../../sections/MedicalSpecialist/MedicalSpecialist";
import { PatientCaring } from "../../sections/PatientCaring/PatientCaring";
import { BlogsAndNews } from "../../sections/BlogsAndNews/BlogsAndNews";
import { Families } from "../../sections/Families/Families";
import { Faqs } from "../../sections/Faqs/Faqs";
import { DownloadApp } from "../../sections/DownloadApp/DownloadApp";
import { Footer } from "../../sections/Footer/Footer";




export const HomePage = () => {
    return (
        <div>

            <Navbar hasBackground={true} />
            <Hero />
            <div className={styles.heroSearchBarPosition}>
                <HomePageSearchBar />
            </div>
            <div className={styles.discountPosition}>
                <Discount />
            </div>
            <div className={styles.adjustPosition}>
                <Specialisation />
            </div>
            <div className={styles.adjustPosition}>
                <MedicalSpecialist />
            </div>
            <div className={styles.adjustPosition}>
                <PatientCaring />
            </div>
            <div className={styles.adjustPosition}>
                <BlogsAndNews />
            </div>
            <div className={styles.adjustPosition}>
                <Families />
            </div>
            <div className={styles.adjustPosition}>
                <Faqs />
            </div>
            <div className={styles.adjustPosition}>
                <DownloadApp />
            </div>
            <div className={styles.adjustPosition}>
                <Footer />
            </div>
        </div>
    )
}