import '../generalStyles/generalStyles.css';
import '../generalStyles/stylesInputs.css';

function PriceFilter(){
    return (
        <div className="input-container">
            <h4>Precio:</h4>
            <select name="countrys" id="countrys">
                <option value="Todos los países">Cualquier precio</option>
                <option value="$">$</option>
                <option value="$$">$$</option>
                <option value="$$$">$$$</option>
                <option value="$$$$">$$$$</option>
            </select>
        </div>
    )
}

export default PriceFilter;