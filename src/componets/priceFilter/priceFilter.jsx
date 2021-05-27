import "../generalStyles/generalStyles.css";
import "../generalStyles/stylesInputs.css";
import { hotelsData } from "../../data/data";

function PriceFilter({
  filterByPrice,
  stateCountry,
  stateSize,
  stateDateIn,
  stateDateOut
}) {
  function filter(e) {
    let updateHotelsList = hotelsData
      .filter((value) => {
        return e.target.value === "Cualquier precio"
          ? value
          : value.price === parseInt(e.target.value, 10);
      })
      .filter((value) => {
        return stateCountry === "Todos los países"
          ? value
          : value.country === stateCountry;
      })
      .filter((value) => {
        if (stateSize === "Todos los tamaños") {
          return value;
        } else {
          if (value.rooms >= 1 && value.rooms <= 10) {
            return "pequeño" === stateSize;
          } else if (value.rooms >= 11 && value.rooms <= 20) {
            return "mediano" === stateSize;
          } else {
            return "grande" === stateSize;
          }
        }
      })
      .filter((value) => {
        if (stateDateOut) {
          return (
            stateDateIn > value.availabilityFrom &&
            stateDateOut < value.availabilityTo
          );
        }
        return value;
      });
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
  );
}

export default PriceFilter;
