// components/Modal2.js
import React from 'react';
import InputForm from './InputForm';

export default function Modal3  ({ values, onInputChange })  {
  return (
    <div className='w3-row'>
        <div className='w3-half w3-container'>

        
      {/* ... Content for Address 1 ... */}
      <label>Address 1</label>
      <InputForm
        label="Local Government"
        placeholder="Local Government"
        name="localGovt"
        type="text"
        onChange={(e) => onInputChange('localGovt', e.target.value)}
        value={values.localGovt}
      />
       <br></br>
      <InputForm
        label="City"
        placeholder="City"
        name="city"
        type="text"
        onChange={(e) => onInputChange('city', e.target.value)}
        value={values.city}
      />
      <br></br>
        <InputForm
        label="Street"
        placeholder="No and Street"
        name="street"
        type="text"
        onChange={(e) => onInputChange('street', e.target.value)}
        value={values.street}
      />
      <br></br>
       {/* ... Content for Modal 2 ... */}
       <label>Address 2 (optional)</label>
      <InputForm
        label="Local Government"
        placeholder="Local Government"
        name="localGovt2"
        type="text"
        onChange={(e) => onInputChange('localGovt2', e.target.value)}
        value={values.localGovt2}
      />
       <br></br>
      <InputForm
        label="City"
        placeholder="City"
        name="city2"
        type="text"
        onChange={(e) => onInputChange('city2', e.target.value)}
        value={values.city2}
      />
      <br></br>
        <InputForm
        label="Street"
        placeholder="No and Street"
        name="street2"
        type="text"
        onChange={(e) => onInputChange('street2', e.target.value)}
        value={values.street2}
      />
            
    </div>
    <div className='w3-half w3-container'>
        <h1> Step 3 of 7</h1>
        <p>
        Enter your detailed office address and sub addresses



        </p>

      </div>
    </div>
  );
};

