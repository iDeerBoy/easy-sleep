import "../generalStyles/generalStyles.css";
import "./filterSection.css";
import DateIn from "../dateIn/dateIn";
import DateOut from "../dateOut/dateOut";
import CountryFilter from "../countryFilter/countryFilter";
import PriceFilter from "../priceFilter/priceFilter";
import RoomSizeFilter from "../roomSizeFilter/roomSizeFilter";
import ClearFilters from "../clearFilters/clearFilters";

function FilterSection({
  filterByCountry,
  filterByPrice,
  filterBySize,
  filterByDateIn,
  filterByDateOut,
  filterClear,
  // estados globales
  stateCountry,
  statePrice,
  stateSize,
  stateDateIn,
  stateDateOut
}) {
  return (
    <div className="filters">
      <form>
        <DateIn
          filterByDateIn={filterByDateIn}
          stateDateOut={stateDateOut}
          stateCountry={stateCountry}
          statePrice={statePrice}
          stateSize={stateSize}
        />
        <DateOut
          filterByDateOut={filterByDateOut}
          stateDateIn={stateDateIn}
          stateCountry={stateCountry}
          statePrice={statePrice}
          stateSize={stateSize}
        />
        <CountryFilter
          filterByCountry={filterByCountry}
          statePrice={statePrice}
          stateSize={stateSize}
          stateDateIn={stateDateIn}
          stateDateOut={stateDateOut}
        />
        <PriceFilter
          filterByPrice={filterByPrice}
          stateCountry={stateCountry}
          stateSize={stateSize}
          stateDateIn={stateDateIn}
          stateDateOut={stateDateOut}
        />
        <RoomSizeFilter
          filterBySize={filterBySize}
          stateCountry={stateCountry}
          statePrice={statePrice}
          stateDateIn={stateDateIn}
          stateDateOut={stateDateOut}
        />
        <ClearFilters filterClear={filterClear} />
      </form>
    </div>
  );
}

export default FilterSection;
