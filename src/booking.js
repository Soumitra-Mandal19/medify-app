
const BOOKING_KEY = "booking";


export const getBookingsFromLocalStorage = () => {


    const bookingList = localStorage.getItem(BOOKING_KEY);
    // Checked bookingList is null as on first page load no bookingList will be retireved in such case we 
    // Return an empty array 
    if (bookingList === null) {
        return [];
    }
    return JSON.parse(bookingList);
}

export const setBookingsToLocalStorage = (bookings = []) => {
    localStorage.setItem(BOOKING_KEY, JSON.stringify(bookings));
}

export const getBookingsById = (id) => {
    const bookings = getBookingsFromLocalStorage();
    return bookings.filter(booking => booking.id === id);
}

export const addBooking = (id, hospitalName, city, state, hospitalAddress, hospitalRating, date, time) => {

    const bookings = getBookingsFromLocalStorage();

    const newBooking = {
        id,
        hospitalName,
        city,
        state,
        hospitalAddress,
        hospitalRating,
        date,
        time
    }

    bookings.push(newBooking);

    localStorage.setItem(BOOKING_KEY, JSON.stringify(bookings));
    

}

export const getConsecutiveDates = (date, numberOfDates ) => {
    const consecutiveDates = [];

    for(let i = 0; i < numberOfDates; i++) {
        const currentDate = new Date(date);
        currentDate.setDate(currentDate.getDate() + i);
        consecutiveDates.push(currentDate);
    }
    return consecutiveDates;
}

export const isToday = (date) => {
    // dateToCheck is recieving date and returns new Date object
    const dateToCheck = new Date(date);
    // Assigning new Date which is current date to today variable
    const today = new Date();
    // compare date, month and year of recieved date and today 
    return dateToCheck.getDate() === today.getDate() &&
    dateToCheck.getMonth() === today.getMonth() &&
    dateToCheck.getFullYear() === today.getFullYear() 
}

export const isTomorrow = (date) => {
    const dateToCheck = new Date(date);
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    return dateToCheck.getDate() === tomorrow.getDate() &&
    dateToCheck.getMonth() === tomorrow.getMonth() &&
    dateToCheck.getFullYear() === tomorrow.getFullYear() 
}

export const formatDate =(date) => {
    const dateToFormat = new Date(date);
    const dateFormat =  {
        weekday: 'short',
        day:'numeric',
        month: 'short',
    };

    return dateToFormat.toLocaleDateString('en-US', dateFormat);
}

export const formattedDate = (date) => {
        const recievedDate = new Date(date);

        if(isToday(recievedDate)) return "Today";
        if(isTomorrow(recievedDate)) return "Tomorrow";
        return formatDate(recievedDate);

}

