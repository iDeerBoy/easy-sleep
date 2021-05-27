import "../generalStyles/generalStyles.css";
import "../generalStyles/stylesInputs.css";
import { hotelsData } from "../../data/data";

function CountryFilter({
  filterByCountry,
  statePrice,
  stateSize,
  stateDateIn,
  stateDateOut
}) {
  function filter(e) {
    let updateHotelsList = hotelsData
      .filter((value) => {
        return e.target.value === "Todos los países"
          ? value
          : value.country === e.target.value;
      })
      .filter((value) => {
        return statePrice === "Cualquier precio"
          ? value
          : value.price === statePrice;
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
    filterByCountry(updateHotelsList, e.target.value);
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
  );
}

export default CountryFilter;
