import '../generalStyles/generalStyles.css';
import '../generalStyles/stylesInputs.css';
import {hotelsData} from '../../data/data';

function RoomSizeFilter({filterBySize, stateCountry}){

    function filter(e) {
        let updatedSize = e.target.value;
    
        if (updatedSize === "pequeño") {
          let updateHotelsList = hotelsData.filter((value) => {
            return value.rooms <= 10 ? value : null;
          }).filter((value) => {
            return stateCountry === "Todos los países"
            ? value
            : value.country === stateCountry;
        })
          filterBySize(updateHotelsList, e.target.value);

        } else if (updatedSize === "mediano") {
          let updateHotelsList = hotelsData.filter((value) => {
            return value.rooms <= 20 ? value : null;
          }).filter((value) => {
            return stateCountry === "Todos los países"
            ? value
            : value.country === stateCountry;
        })
          filterBySize(updateHotelsList, e.target.value);

        } else if (updatedSize === "grande") {
          let updateHotelsList = hotelsData.filter((value) => {
            return value.rooms > 21 ? value : null;
          }).filter((value) => {
            return stateCountry === "Todos los países"
            ? value
            : value.country === stateCountry;
        })
          filterBySize(updateHotelsList, e.target.value);
          
        } else {
          let updateHotelsList = hotelsData.filter((value) => {
            return value;
          }).filter((value) => {
            return stateCountry === "Todos los países"
            ? value
            : value.country === stateCountry;
        })
          filterBySize(updateHotelsList, e.target.value);
        }
      }

    return (
        <div className="input-container">
            <h4>Tamaño:</h4>
            <select name="countrys" id="countrys"  onChange={filter}>
                <option value="Todos los tamaños">Todos los tamaños</option>
                <option value="pequeño">Hotel pequeño</option>
                <option value="mediano">Hotel mediano</option>
                <option value="grande">Hotel grande</option>
            </select>
        </div>
    )
}

export default RoomSizeFilter;