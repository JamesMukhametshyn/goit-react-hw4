import css from "./SearchBar.module.css";

const SearchBar = ({ filter, onChange }) => {
  return (
    <div className={css.container}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={onChange}
          className={css.field}
        />
      </label>
    </div>
  );
};

export default SearchBar;
