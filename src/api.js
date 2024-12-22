

export const fetchStates = async () => {
    try {
        const response = await fetch(`https://meddata-backend.onrender.com/states`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error.message)
        return [];
    }
}

















