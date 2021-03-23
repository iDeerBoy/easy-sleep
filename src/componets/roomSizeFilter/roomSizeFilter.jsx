import '../generalStyles/generalStyles.css';
import '../generalStyles/stylesInputs.css';

function RoomSizeFilter(){
    return (
        <div className="input-container">
            <h4>Tamaño:</h4>
            <select name="countrys" id="countrys">
                <option value="Todos los países">Todos los tamaños</option>
                <option value="pequeño">Hotel pequeño</option>
                <option value="mediano">Hotel mediano</option>
                <option value="grande">Hotel grande</option>
            </select>
        </div>
    )
}

export default RoomSizeFilter;