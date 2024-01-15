// components/Modal2.js
import React from 'react';
import InputForm from './InputForm';

export default function PModalTwo  ({ values, onInputChange })  {
  return (
    <div className='w3-row'>
        <div className='w3-half w3-container'>

        
        
      {/* ... Content for Modal 2 ... */}
      <label>Office Address </label>
      <InputForm
        label="Office Address"
        placeholder="Office Address"
        name="officeAddress"
        type="text"
        onChange={(e) => onInputChange('officeAddress', e.target.value)}
        value={values.officeAddress}
      />
       <label>Residential Address </label>
      <InputForm
        label="Residential Address"
        placeholder="Residential Address"
        name="residentialAddress"
        type="text"
        onChange={(e) => onInputChange('residentialAddress', e.target.value)}
        value={values.residentialAddress}
      />
      <br></br>
      <label>Additional No </label>
        <InputForm
        label="Additional No"
        placeholder="Additional No"
        name="additionalNo"
        type="email"
        onChange={(e) => onInputChange('additionalNo', e.target.value)}
        value={values.additionalNo}
      />
      <br></br>
       
    </div>
    <div className='w3-half w3-container'>
        <h1> Step 2 of 7</h1>
        <p>
        Enter your Personal Details


        </p>

      </div>
    </div>
  );
};

