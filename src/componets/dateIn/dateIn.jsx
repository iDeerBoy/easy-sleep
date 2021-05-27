import "../generalStyles/generalStyles.css";
import "../generalStyles/stylesInputs.css";
import { hotelsData } from "../../data/data";

function DateIn({
  filterByDateIn,
  stateDateOut,
  stateCountry,
  statePrice,
  stateSize
}) {
  function toDay() {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    function thisMont() {
      if (month < 10) {
        return "0" + month;
      } else {
        return month.toString();
      }
    }

    function thisDay() {
      if (date < 10) {
        return "0" + date;
      } else {
        return date.toString();
      }
    }
    return year + "-" + thisMont() + "-" + thisDay();
  }
  function dayMax() {
    if (stateDateOut === "") {
      return "";
    } else {
      let date = new Date(stateDateOut).getDate();
      let month = new Date(stateDateOut).getMonth() + 1;
      let year = new Date(stateDateOut).getFullYear();

      function thisMont() {
        if (month < 10) {
          return "0" + month;
        } else {
          return month.toString();
        }
      }

      function thisDay() {
        if (date < 10) {
          return "0" + date;
        } else {
          return date.toString();
        }
      }
      return year + "-" + thisMont() + "-" + thisDay();
    }
  }
  function filter(e) {
    let inputDate =
      new Date(e.target.value.replaceAll("-", "/")).getTime() + 86300000;

    let updateHotelsList = hotelsData
      .filter((value) => {
        if (stateDateOut) {
          return (
            inputDate > value.availabilityFrom &&
            stateDateOut < value.availabilityTo
          );
        }
        return value;
      })
      .filter((value) => {
        return stateCountry === "Todos los países"
          ? value
          : value.country === stateCountry;
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
      });
    filterByDateIn(updateHotelsList, inputDate);
  }

  return (
    <div className="input-container">
      <h4>Fecha de entrada:</h4>
      <input type="date" onChange={filter} min={toDay()} max={dayMax()} />
    </div>
  );
}

export default DateIn;
