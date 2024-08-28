import PropTypes from "prop-types";

export default function SearchBox({ filter, onFilterChange }) {
  return (
    <div>
      <input
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
