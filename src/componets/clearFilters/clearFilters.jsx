import '../generalStyles/generalStyles.css';
import '../generalStyles/stylesInputs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function ClearFilters(){
    return (
        <div className="clear">
            <FontAwesomeIcon icon={faTrash} />
        </div>
    )
}

export default ClearFilters;