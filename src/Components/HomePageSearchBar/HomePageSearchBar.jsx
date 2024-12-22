import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./HomePageSearchBar.module.css";
import ambulanceIcon from "../../assets/Ambulance.png";
import capsuleIcon from "../../assets/Capsule.png";
import doctorIcon from "../../assets/Doctor.png";
import drugStoreIcon from "../../assets/Drugstore.png";
import hospitalIcon from "../../assets/Hospital.png";
import { useNavigate } from 'react-router-dom';


const Services = [{ img: doctorIcon, title: "Doctor" },
{ img: drugStoreIcon, title: "Labs" },
{ img: hospitalIcon, title: "Hospitals", selected: true },
{ img: capsuleIcon, title: "Medical Store" },
{ img: ambulanceIcon, title: "Ambulance" }];

export const HomePageSearchBar = () => {
    const navigate = useNavigate();

    const onSearchClick = (state, city) => {
        if (state && city) {
            navigate(`/medicalcenters?state=${state}&city=${city}`);
        }
    }

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <SearchBar onSearchClick={onSearchClick} />
                <div className={styles.textAndServicesCardContainer}>
                    <div className={styles.text}>You may be looking for</div>
                    <div className={styles.servicesCardContainer}>{Services.map((service) => {
                        return (<div key={service.title} className={`${styles.serviceCardBox} ${service.selected ? styles.serviceSelected : null}`} >
                            <div><img className={styles.logoImage} src={service.img} alt={service.title} /></div>
                            <div>{service.title}</div>
                        </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    )
}

