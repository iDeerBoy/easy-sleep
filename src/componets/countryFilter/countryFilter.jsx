import '../generalStyles/generalStyles.css';
import '../generalStyles/stylesInputs.css';
import {hotelsData} from '../../data/data';

function CountryFilter({filterByCountry}){

    function filter(e){
        let updateHotelsList = hotelsData.filter((value) =>{
            return e.target.value === "Todos los países"
            ? value 
            : value.country === e.target.value
        });
        filterByCountry(updateHotelsList)
    }

    return (
        <div className="input-container">
            <h4>País:</h4>
            <select name="countrys" id="countrys" onChange={filter}>
                <option value="Todos los países">Todos los países</option>
                <option value="Argentina">Argentina</option>
                <option value="Brasil">Brasil</option>
                <option value="Chile">Chile</option>
                <option value="Uruguay">Uruguay</option>
            </select>
        </div>
    )
}

export default CountryFilter;