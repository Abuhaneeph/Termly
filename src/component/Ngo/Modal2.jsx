// components/Modal2.js
import React from 'react';
import InputForm from './InputForm';

export default function Modal2  ({ values, onInputChange })  {
  return (
    <div className='w3-row'>
        <div className='w3-half w3-container'>

        
      {/* ... Content for Modal 2 ... */}
      <label> Name </label>
      <InputForm
        label="Name"
        placeholder="Name"
        name="name"
        type="text"
        onChange={(e) => onInputChange('name', e.target.value)}
        value={values.name}
      />
      <br></br>
       <label>P.O.S</label>
      <InputForm
        label="p.o.s"
        placeholder="P.O.S"
        name="pos"
        type="text"
        onChange={(e) => onInputChange('pos', e.target.value)}
        value={values.pos}
      />
      <br></br>
      <label>Address</label>
        <InputForm
        label="address"
        placeholder="address"
        name="address"
        type="text"
        onChange={(e) => onInputChange('address', e.target.value)}
        value={values.address}
      />
      <br></br>
      <label>Phone No.</label>
              <InputForm
        label="Mobile Number"
        placeholder="Mobile Number"
        name="mobileNumber"
        type="number"
        onChange={(e) => onInputChange('mobileNumber', e.target.value)}
        value={values.mobileNumber}
      />
    </div>
    <div className='w3-half w3-container'>
        <h1> Step 2 of 4</h1>
        <p>
        Enter your contact details

        </p>

      </div>
    </div>
  );
};

