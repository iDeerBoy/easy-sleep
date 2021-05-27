import "../generalStyles/generalStyles.css";
import "./card.css";
import RoomSize from "../roomSize/roomSize";
import Price from "../price/price";
import Country from "../country/country";
import ReservationBtn from "../reservationBtn/reservaionBtn";

function Card({ photo, name, description, rooms, price, city, country }) {
  return (
    <div className="card">
      <img src={photo} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <div className="tagsInfo">
        <RoomSize rooms={rooms} />
        <Country city={city} country={country} />
        <Price price={price} />
        <ReservationBtn
          photo={photo}
          name={name}
          description={description}
          rooms={rooms}
          city={city}
          country={country}
        />
      </div>
    </div>
  );
}

export default Card;
