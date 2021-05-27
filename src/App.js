import "./App.css";
import Header from "./componets/header/header";
import FilterSection from "./componets/filterSection/filterSection";
import Results from "./componets/results/results";
import { useState } from "react";
import { hotelsData } from "./data/data";

function App() {
  let [hotelList, setHotelList] = useState(hotelsData);
  let [stateCountry, setStateCountry] = useState("Todos los países");
  let [statePrice, setStatePrice] = useState("Cualquier precio");
  let [stateSize, setStateSize] = useState("Todos los tamaños");
  let [stateDateIn, setStateDateIn] = useState("");
  let [stateDateOut, setStateDateOut] = useState("");

  function filterCountry(newList, value) {
    setHotelList(newList);
    setStateCountry(value);
  }

  function filterByPrice(newList, value) {
    setHotelList(newList);
    value === "Cualquier precio"
      ? setStatePrice(value)
      : setStatePrice(parseInt(value, 10));
  }

  function filterBySize(newList, value) {
    setHotelList(newList);
    setStateSize(value);
  }

  function filterByDateIn(newList, value) {
    setHotelList(newList);
    setStateDateIn(value);
  }

  function filterByDateOut(newList, value) {
    setHotelList(newList);
    setStateDateOut(value);
  }

  function filterClear(country, price, size, dateIn, dateOut) {
    setStateCountry(country);
    setStatePrice(price);
    setStateSize(size);
    setStateDateIn(dateIn);
    setStateDateOut(dateOut);
    setHotelList(hotelsData);
  }

  return (
    <div className="App">
      <Header
        stateCountry={stateCountry}
        statePrice={statePrice}
        stateSize={stateSize}
        stateDateIn={stateDateIn}
        stateDateOut={stateDateOut}
      />
      <FilterSection
        filterByCountry={filterCountry}
        filterByPrice={filterByPrice}
        filterBySize={filterBySize}
        filterByDateIn={filterByDateIn}
        filterByDateOut={filterByDateOut}
        filterClear={filterClear}
        //Estados Gobales
        stateCountry={stateCountry}
        statePrice={statePrice}
        stateSize={stateSize}
        stateDateIn={stateDateIn}
        stateDateOut={stateDateOut}
      />
      <Results list={hotelList} />
    </div>
  );
}

export default App;
