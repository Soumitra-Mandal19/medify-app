import { MedicalCenterCard } from "../../Components/MedicalCenterCard/MedicalCenterCard";
import { SearchBar } from "../../Components/SearchBar/SearchBar";
import { useState, useCallback, useEffect } from "react";
import styles from "./MedicalCenterList.module.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import advertisementImg from "../../assets/sensodyne_dweb.png.png";
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';
import { useSearchParams } from 'react-router-dom';
import { Faqs } from "../../sections/Faqs/Faqs";
import { DownloadApp } from "../../sections/DownloadApp/DownloadApp";
import { Footer } from "../../sections/Footer/Footer";

export const MedicalCenterList = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [medicalCenters, setMedicalCenters] = useState([]);
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);

    /**
     * An asynchronous function to fetch all the medical centers from the state, city and set it in the state.
     */

    const loadMedicalCenters = useCallback(async (state, city) => {
        setLoading(true);
        const response = await fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
        const data = await response.json();
        setMedicalCenters(data);
        setLoading(false);
    }, []);

    const handleOnSearchClick = useCallback((state, city) => {
        loadMedicalCenters(state, city);
        setState(state);
        setCity(city);
    }, [loadMedicalCenters]);

    useEffect(() => {
        const city = searchParams.get("city");
        const state = searchParams.get("state");
        console.log("infinite");
        if (state && city) {
            handleOnSearchClick(state, city);
            setSearchParams({});
        }
    }, [searchParams, handleOnSearchClick, setSearchParams ]);


    


    return (
        <div className={styles.root}>
            <Navbar />
            <div className={styles.blueBoxBelowNav}>
                <div className={styles.searchBar}><SearchBar onSearchClick={handleOnSearchClick} /></div>
            </div>

            <div className={styles.mainContainer}>
                <div className={`${styles.headingAndListContainer} ${medicalCenters.length > 0 ? null : styles.noData}`}>
                    {!loading && <div className={styles.searchSummary}>
                        {state.length > 0 && city.length > 0 ? <div className={styles.heading}>{`${medicalCenters.length} medical centers available in ${city}, ${state}`}</div> : null}
                        {state.length > 0 && city.length > 0 ? <div className={styles.secondHeading}><VerifiedOutlinedIcon />  Book appointments with minimum wait-time & verified doctor details</div> : null}
                    </div>}
                    <div className={styles.resultContainer}>
                        <div className={`${styles.list} ${medicalCenters.length > 0 ? null : styles.noData}`}>
                            {medicalCenters.map(center => <MedicalCenterCard
                                key={center["Provider ID"]}
                                id={center["Provider ID"]}
                                hospitalName={center["Hospital Name"]}
                                hospitalAddress={center["Address"]}
                                city={center["City"]}
                                state={center["State"]}
                                hospitalRating={center["Hospital overall rating"]}
                            ></MedicalCenterCard>)}

                        </div>
                        <div className={styles.advertisement}><img src={advertisementImg} alt="advertisement" /></div>
                    </div>
                </div>
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