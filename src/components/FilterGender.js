import "../styles/layouts/FilterHouse.scss";
const FilterGender = ({ handleGenderFilter, genderFilter }) => {
  const handleInput = (ev) => {
    const value = ev.target.value;
    handleGenderFilter(value);
  };
  return (
    <fieldset>
      <legend className="form__filters-legend">Search by gender:</legend>
      <input
        type="radio"
        id="all"
        name="gender"
        value="all"
        checked={genderFilter === "all"}
        onChange={handleInput}
      />
      <label className="label">All genders</label>
      <input
        className="f"
        type="radio"
        id="male"
        name="gender"
        value="male"
        checked={genderFilter === "male"}
        onChange={handleInput}
      />
      <label>Males</label>
      <input
        className=""
        type="radio"
        id="female"
        name="gender"
        value="female"
        checked={genderFilter === "female"}
        onChange={handleInput}
      />
      <label>Females</label>
      <input
        className=""
        type="radio"
        id="other"
        name="gender"
        value="other"
        checked={genderFilter === "other"}
        onChange={handleInput}
      />
      <label>Other gender</label>
    </fieldset>
  );
};

export default FilterGender;
