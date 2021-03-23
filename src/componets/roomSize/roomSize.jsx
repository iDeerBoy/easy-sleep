import '../generalStyles/generalStyles.css';
import './roomSize.css';

function RoomSize({rooms}){
    
    return  (
        <div className="tagRoom">
            <p>{rooms} Habitaciones</p>
        </div>
    )
}

export default RoomSize;