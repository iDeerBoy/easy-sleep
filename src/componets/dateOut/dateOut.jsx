import '../generalStyles/generalStyles.css';
import '../generalStyles/stylesInputs.css';
import { hotelsData } from "../../data/data";

function DateOut({filterByDateOut}){

    function filter(e) {
        let inputDate =
          new Date(e.target.value.replaceAll("-", "/")).getTime() + 86300000;
    
        let updateHotelsList = hotelsData.filter((value) => {
            if (inputDate < value.availabilityTo) {
            return value;
          } else {
            return null;
          }
        });
        filterByDateOut(updateHotelsList);
      }

    return (
        <div className="input-container">
            <h4>Fecha de salida:</h4>
            <input type="date" onChange={filter}/>
        </div>
    )
}

export default DateOut;