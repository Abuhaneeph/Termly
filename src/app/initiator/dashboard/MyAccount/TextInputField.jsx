// TextInputField.js
import React from 'react';

const TextInputField = ({ label, id, type, placeholder, defaultValue }) => {
  return (
    <div className="col-md-6 mb-3">
      <label className="small mb-1" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-control"
        id={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default TextInputField;