import PropTypes from "prop-types";
import css from "./SearchBox.module.css";

export default function SearchBox({ filter, onFilterChange }) {
  return (
    <div className={css.container}>
      <p>Find contact by name</p>
      <input
        className={css.input}
        type="text"
        placeholder="Search contacts..."
        value={filter}
        onChange={onFilterChange}
      />
    </div>
  );
}

SearchBox.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
