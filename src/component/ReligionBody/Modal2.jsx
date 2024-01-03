// components/Modal2.js
import React from 'react';
import InputForm from './InputForm';

export default function Modal2  ({ values, onInputChange })  {
  return (
    <div className='w3-row'>
        <div className='w3-half w3-container'>

        
      {/* ... Content for Modal 2 ... */}
      <label>Registered business name </label>
      <InputForm
        label="Business Name"
        placeholder="Business Name"
        name="businessName"
        type="text"
        onChange={(e) => onInputChange('businessName', e.target.value)}
        value={values.businessName}
      />
       <label>Registered Number </label>
      <InputForm
        label="Registered Number"
        placeholder="Registered Number"
        name="registeredNumber"
        type="number"
        onChange={(e) => onInputChange('registeredNumber', e.target.value)}
        value={values.registeredNumber}
      />
      <br></br>
        <InputForm
        label="Business e-mail"
        placeholder="Business E-mail"
        name="businessEmail"
        type="email"
        onChange={(e) => onInputChange('businessEmail', e.target.value)}
        value={values.businessEmail}
      />
      <br></br>
              <InputForm
        label="Phone Number"
        placeholder="Phone Number"
        name="Phone Number"
        type="number"
        onChange={(e) => onInputChange('phoneNumber', e.target.value)}
        value={values.phoneNumber}
      />
    </div>
    <div className='w3-half w3-container'>
        <h1> Step 2 of 5</h1>
        <p>
        Enter your bank account details where your funds will be deposited


        </p>

      </div>
    </div>
  );
};

