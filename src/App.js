import './App.css';
import Header from './componets/header/header';
import FilterSection from './componets/filterSection/filterSection';
import Results from './componets/results/results';
import { useState } from "react";
import { hotelsData } from "./data/data";

function App() {

  let [hotelList, setHotelList] = useState(hotelsData);

  function filterCountry(newList) {
    setHotelList(newList);
  }

  function filterByPrice(newList){
    setHotelList(newList);
  }

  function filterBySize(newList){
    setHotelList(newList)
  }

  return (
    <div className="App">
      <Header />
      <FilterSection  
        filterByCountry={filterCountry}
        filterByPrice={filterByPrice}
        filterBySize={filterBySize}
      />
      <Results list={hotelList}/>
    </div>
  );
}

export default App;
