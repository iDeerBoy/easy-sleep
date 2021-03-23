import '../generalStyles/generalStyles.css';
import './results.css';
import Card from '../card/card';
import {hotelsData } from '../../data/data';
import { useState } from 'react';

function Results (){

    let [filterCounrty, setFilterCountry] = useState("Todos los países");
    let [hotelsList, updateHotelsList] = useState(hotelsData)

    return (
        <div className="results">
            {
                hotelsList.map((i, index) => {
                   return <Card {...i} key={index}/>
                })
            }
        </div>
    )
}

export default Results;