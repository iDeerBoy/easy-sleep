import '../generalStyles/generalStyles.css';
import './filterSection.css';
import DateIn from '../dateIn/dateIn';
import DateOut from '../dateOut/dateOut';
import CountryFilter from '../countryFilter/countryFilter';
import PriceFilter from '../priceFilter/priceFilter';
import RoomSizeFilter from '../roomSizeFilter/roomSizeFilter';
import ClearFilters from '../clearFilters/clearFilters'

function FilterSection(){

    function filterCountry(){
        console.log("desde country")
    }

    return (
        <div className="filters">
                <DateIn />
                <DateOut />
                <CountryFilter filterByCountry={filterCountry}/>
                <PriceFilter />
                <RoomSizeFilter />
                <ClearFilters />
        </div>
    )
}

export default FilterSection;