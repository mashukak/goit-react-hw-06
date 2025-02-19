import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "/src/redux/filtersSlice.js";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <input
      type="text"
      value={filter}
      onChange={(e) => dispatch(changeFilter(e.target.value))}
      placeholder="Search contacts..."
    />
  );
};

export default SearchBox;
