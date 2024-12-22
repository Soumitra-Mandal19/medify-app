import styles from "./Navbar.module.css"
import Logo from "../../assets/Logo.svg"
 import { Link } from 'react-router-dom';


export const Navbar = ({hasBackground = false}) => {

    
    return(
        
        <div>
            <div className={`${styles.root} ${hasBackground ? styles.hasBackground : styles.whiteBackground}`} >
                    <div className={styles.topMessage}> The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.</div>
                    
                    <div className={styles.navContainer} >
                        <Link to="/">
                        <div><img src={Logo} alt="medify-logo" width={92} height={27} /></div>
                        </Link>
                        <div className={styles.buttonContainer}>
                            <button className={styles.navButton}>Find Doctors</button>
                            <button className={styles.navButton}>Hospitals</button>
                            <button className={styles.navButton}>Medicines</button>
                            <button className={styles.navButton}>Surgeries</button>
                            <button className={styles.navButton}>Software for Provider</button>
                            <button className={styles.navButton}>Facilities</button>
                            <Link to="/bookings">
                            <button className={styles.bookingButton}>My Bookings</button>
                            </Link>
                        </div>
                    </div>
            </div>
        </div>
        
    )
}

 
