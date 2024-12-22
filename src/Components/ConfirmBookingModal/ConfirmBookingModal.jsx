import styles from "./ConfirmBookingModal.module.css";
import {
    Dialog,
    DialogSurface,
    DialogBody,
    DialogContent,
} from "@fluentui/react-components";

export const ConfirmBookingModal = ({ time, date, onConfirmClick, onCancelClick }) => {

    const handleConfirmClick = () => {
        onConfirmClick();
    }

    const handleCancelClick = () => {
        onCancelClick();
    }



    return (
        <Dialog open>
            <DialogSurface>
                <DialogBody>
                    <DialogContent>
                        <div>
                            <div className={styles.container}>
                                <div className={styles.heading}>Confirm Booking</div>
                                <div className={styles.confirmationMsg}>Please confirm booking for {time} on {date} </div>
                                <div className={styles.buttonContainer}>
                                    <button onClick={handleConfirmClick} className={styles.confirmButton}>Confirm</button>
                                    <button onClick={handleCancelClick} className={styles.cancelButton}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                </DialogBody>
            </DialogSurface>
        </Dialog>



    )
}