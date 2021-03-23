import '../generalStyles/generalStyles.css';
import './country.css';

function Country({city, country}){
    return (
        <div className="tagCountry">
            <p>{city}, {country}</p>
        </div>
    )
}

export default Country;