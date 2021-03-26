import './App.css';
import Header from './componets/header/header';
import FilterSection from './componets/filterSection/filterSection';
import Results from './componets/results/results';
import { useState } from "react";
import { hotelsData } from "./data/data";

function App() {

  let [hotelList, setHotelList] = useState(hotelsData);
  let [stateCountry, setStateCountry] = useState("Todos los países");
  let [statePrice, setStatePrice] = useState("Cualquier precio");
  let [stateSize, setStateSize] = useState("Todos los tamaños")

  function filterCountry(newList, value) {
    setHotelList(newList);
    setStateCountry(value)
    console.log(stateCountry)
  }

  function filterByPrice(newList, value){
    setHotelList(newList);
    setStatePrice(value)
    console.log(statePrice)
  }

  function filterBySize(newList, value){
    setHotelList(newList)
    setStateSize(value)
  }

  function filterByDateIn(newList){
    setHotelList(newList)
  }

  function filterByDateOut(newList){
    setHotelList(newList)
  }

  return (
    <div className="App">
      <Header />
      <FilterSection  
        filterByCountry={filterCountry}
        filterByPrice={filterByPrice}
        filterBySize={filterBySize}
        filterByDateIn={filterByDateIn}
        filterByDateOut={filterByDateOut}

        //Estados Gobales
        stateCountry={stateCountry}
        statePrice={statePrice}
      />
      <Results list={hotelList}/>
    </div>
  );
}

export default App;
