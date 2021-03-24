import '../generalStyles/generalStyles.css';
import '../generalStyles/stylesInputs.css';
import {hotelsData} from '../../data/data';

function RoomSizeFilter({filterBySize}){

    function filter(e){
        let updateHotelsList = hotelsData.filter((value)=>{
            return e.target.value === "Todos los países"
            ? value
            : value.rooms == e.target.value
        })
        filterBySize(updateHotelsList)
    }

    return (
        <div className="input-container">
            <h4>Tamaño:</h4>
            <select name="countrys" id="countrys"  onChange={filter}>
                <option value="Todos los países">Todos los tamaños</option>
                <option value="pequeño">Hotel pequeño</option>
                <option value="mediano">Hotel mediano</option>
                <option value="grande">Hotel grande</option>
            </select>
        </div>
    )
}

export default RoomSizeFilter;