import '../generalStyles/generalStyles.css';
import './filterSection.css';
import DateIn from '../dateIn/dateIn';
import DateOut from '../dateOut/dateOut';
import CountryFilter from '../countryFilter/countryFilter';
import PriceFilter from '../priceFilter/priceFilter';
import RoomSizeFilter from '../roomSizeFilter/roomSizeFilter';
import ClearFilters from '../clearFilters/clearFilters'

function FilterSection({ filterByCountry, filterByPrice, filterBySize, filterByDateIn, filterByDateOut, stateCountry, statePrice }){

    return (
        <div className="filters">
                <DateIn 
                    filterByDateIn={filterByDateIn}
                />
                <DateOut 
                    filterByDateOut={filterByDateOut}
                />
                <CountryFilter 
                    filterByCountry={filterByCountry}
                    statePrice={statePrice}
                />
                <PriceFilter 
                    filterByPrice={filterByPrice}
                    stateCountry={stateCountry}
                />
                <RoomSizeFilter 
                    filterBySize={filterBySize}
                    stateCountry={stateCountry}
                    statePrice={statePrice}
                />
                <ClearFilters />
        </div>
    )
}

export default FilterSection;