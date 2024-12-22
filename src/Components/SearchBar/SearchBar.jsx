import { useState, useEffect, useCallback } from "react";
import { fetchStates } from "../../api";
import styles from "./SearchBar.module.css";
import SearchIcon from '@mui/icons-material/Search';



export const SearchBar = ({ onSearchClick }) => {

    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('')

    /**
     * An asynchronous function to fetch all the states and set it in the state.
     */
    const loadStatesAsync = useCallback(async () => {
        //Creating a variable that has an array of all states   
        const data = await fetchStates();
        //Using setter method of useState we assigned the array of states to countries of useState   
        setStates(data);
    }, []);

    /**
     * An asynchronous function to fetch all the cities from the selecteState and set it in the state.
     */

    const loadCitiesAsync = useCallback(async (state) => {
        const response = await fetch(`https://meddata-backend.onrender.com/cities/${state}`);
        const data = await response.json();
        setCities(data);
    }, []);

    useEffect(() => {
        loadStatesAsync();
    }, [loadStatesAsync])

    useEffect(() => {
        setSelectedCity('');
        setCities([]);

        if (selectedState !== '') {
            loadCitiesAsync(selectedState);
        }
    }, [selectedState, loadCitiesAsync])


    

    const handleStateChange = (event) => {
        setSelectedState(event.target.value);
    }

    const handleCityChange = (event) => {
        setSelectedCity(event.target.value);
    }

    const handleOnClick = () => {
        if (selectedState !== '' && selectedCity !== '') {
            
            onSearchClick(selectedState, selectedCity);
        }
    }


    return (
        <div className={styles.searchBoxContainer}>
            
            <select name="" id="state-dropdown" onChange={handleStateChange} value={selectedState} className={styles.stateSelectBar} >
                <option value="">⚲  State</option>
                {states.map((state, index) => {
                    return (
                        <option key={index} value={state}>{state}</option>
                    )
                })}
            </select>
            

            <select name="" id="city-dropdown" onChange={handleCityChange} value={selectedCity} className={styles.citySelectBar}>
                <option value="">⚲ City</option>
                {cities.map((city, index) => {
                    return (
                        <option key={index} value={city}>{city}</option>
                    )
                })}
            </select>
            <button onClick={handleOnClick} className={styles.searchButton}><SearchIcon className={styles.searchIcon} />Search</button>
        </div>
    )
}