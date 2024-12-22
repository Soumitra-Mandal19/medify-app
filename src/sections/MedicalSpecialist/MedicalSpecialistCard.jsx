import styles from "./MedicalSpecialistCard.module.css"


export const MedicalSpecialistCard = ({img, title, designation}) => {
    return(
        <div className={styles.root}>
            <div>
                <img className={styles.imgBackground} src={img} alt={title} />
            </div>
            <div className={styles.titleAndDesignationContainer}>
                <div className={styles.titleName}>{title}</div>
                <div className={styles.designation}>{designation}</div>
            </div>
        </div>
    )
}

