import "../generalStyles/generalStyles.css";
import "./reservation.css";

function Reservation({
  stateCountry,
  statePrice,
  stateSize,
  stateDateIn,
  stateDateOut
}) {
  function showDateIn() {
    let date = new Date(stateDateIn).getDate();
    let month = new Date(stateDateIn).getMonth();
    let year = new Date(stateDateIn).getFullYear();
    let months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre"
    ];
    if (stateDateIn === "") {
      return " ";
    } else {
      return `Del ${date} de ${months[month]} de ${year} `;
    }
  }

  function showDateOut() {
    let date = new Date(stateDateOut).getDate();
    let month = new Date(stateDateOut).getMonth();
    let year = new Date(stateDateOut).getFullYear();
    let months = [
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre"
    ];
    if (stateDateOut === "") {
      return " ";
    } else {
      return `hasta el ${date} de ${months[month]} de ${year}`;
    }
  }

  function showCountry() {
    if (stateCountry === "Todos los países") {
      return " ";
    } else {
      return "En " + stateCountry + " ";
    }
  }

  function showPrice() {
    if (statePrice === "Cualquier precio") {
      return " ";
    } else if (statePrice === 1) {
      return "de precio economico";
    } else if (statePrice === 2) {
      return "de precio medio";
    } else if (statePrice === 3) {
      return "de precio alto";
    } else {
      return "de precio costoso";
    }
  }

  function showSize() {
    if (stateSize === "Todos los tamaños") {
      return " ";
    } else {
      return "y tamaño " + stateSize;
    }
  }

  return (
    <>
      <p>
        <span id="span-yellow">Tu reserva: </span>
        {showDateIn()}
        {showDateOut()}
        <br></br>
        {showCountry()} {showPrice()} {showSize()}
        <span id="span-yellow-animated">.</span>
      </p>
    </>
  );
}

export default Reservation;
