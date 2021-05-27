import { useState } from "react";
import "../generalStyles/generalStyles.css";
import "./reservationBtn.css";

function ReservationBtn({ photo, name, rooms, city, country, description }) {
  let [stateReservation, setReservation] = useState(false);
  function onState() {
    stateReservation === true ? setReservation(false) : setReservation(true);
  }
  return (
    <div className="reservation" onClick={onState}>
      {stateReservation ? (
        <div className="reservcationActive">
          <div className="reservationSelected">
            <div>
              <img src={photo} alt={name} />
            </div>
            <div>
              <h4>Reservaste:</h4>
              <h2>{name}</h2>
              <p>{description}</p>
              <p>Con: {rooms} habitaciones</p>
              <p>
                En: {city}, {country}
              </p>
            </div>
            <span>Click para continuar</span>
          </div>
        </div>
      ) : null}
      RESERVA
    </div>
  );
}

export default ReservationBtn;
