import '../generalStyles/generalStyles.css';
import '../generalStyles/stylesInputs.css';
import {hotelsData} from '../../data/data';

function PriceFilter({filterByPrice, stateCountry}){

    function filter(e) {
        let updateHotelsList = hotelsData.filter((value) => {
          return e.target.value === "Cualquier precio"
            ? value
            : value.price === parseInt(e.target.value, 10);
        }).filter((value) => {
            return stateCountry === "Todos los países"
            ? value
            : value.country === stateCountry;
        })
        filterByPrice(updateHotelsList, e.target.value);
      }

    return (
        <div className="input-container">
            <h4>Precio:</h4>
            <select name="countrys" id="countrys" onChange={filter}>
                <option value="Cualquier precio">Cualquier precio</option>
                <option value="1">$</option>
                <option value="2">$$</option>
                <option value="3">$$$</option>
                <option value="4">$$$$</option>
            </select>
        </div>
    )
}

export default PriceFilter;