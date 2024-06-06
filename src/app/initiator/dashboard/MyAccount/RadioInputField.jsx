const RadioInputField = ({ id, label, defaultChecked }) => {
    return (
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="gender"
          id={id}
          defaultChecked={defaultChecked}
        />
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      </div>
    );
  };
  export default RadioInputField
  