import '../generalStyles/generalStyles.css';
import '../generalStyles/stylesInputs.css';
import { hotelsData } from "../../data/data";

function DateIn({ filterByDateIn }){
    
    function filter(e) {
        let inputDate =
          new Date(e.target.value.replaceAll("-", "/")).getTime() + 86300000;
    
        let updateHotelsList = hotelsData.filter((value) => {
          if (inputDate > value.availabilityFrom) {
            return value;
          } else {
            return null;
          }
        });
        filterByDateIn(updateHotelsList);
      }

    return (
        <div className="input-container">
            <h4>Fecha de entrada:</h4>
            <input type="date" onChange={filter}/>
        </div>
    )
}

export default DateIn;