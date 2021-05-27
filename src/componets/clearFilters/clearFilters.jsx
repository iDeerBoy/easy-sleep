import "../generalStyles/generalStyles.css";
import "../generalStyles/stylesInputs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function ClearFilters({ filterClear }) {
  function clear() {
    filterClear(
      "Todos los países",
      "Cualquier precio",
      "Todos los tamaños",
      "",
      ""
    );
  }
  return (
    <div className="clear" onClick={clear}>
      <FontAwesomeIcon icon={faTrash} />
      <input type="reset" />
    </div>
  );
}

export default ClearFilters;
