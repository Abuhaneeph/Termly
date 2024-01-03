// components/InputForm.js
'use client'
import React from 'react';

export default function InputForm  ({ label, placeholder, name, type, onChange, value })  {
  return (
    <div>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        value={value}
        required
      />
      
    </div>
  );
};

