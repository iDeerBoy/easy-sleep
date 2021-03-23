import '../generalStyles/generalStyles.css';
import './price.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

function Price ({price}){

    function showPrice (){
        if (price === 1){
            return (
                <>
                <FontAwesomeIcon icon={faDollarSign} />
                </>
            )
        } else if(price === 2){
            return (
                <>
                <FontAwesomeIcon icon={faDollarSign} className="dollarIcon"/>
                <FontAwesomeIcon icon={faDollarSign} className="dollarIcon"/>
                </>
            )
        } else if(price === 3){
            return (
                <>
                <FontAwesomeIcon icon={faDollarSign} className="dollarIcon"/>
                <FontAwesomeIcon icon={faDollarSign} className="dollarIcon"/>
                <FontAwesomeIcon icon={faDollarSign} className="dollarIcon"/>
                </>
            )
        } else{
            return (
                <>
                <FontAwesomeIcon icon={faDollarSign} className="dollarIcon"/>
                <FontAwesomeIcon icon={faDollarSign} className="dollarIcon"/>
                <FontAwesomeIcon icon={faDollarSign} className="dollarIcon"/>
                <FontAwesomeIcon icon={faDollarSign} className="dollarIcon"/>
                </>
            )
        }
    }

    return (
        <div className="tagPrice">
            {showPrice()}
        </div>
    ) 
}

export default Price;