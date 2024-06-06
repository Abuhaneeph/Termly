// components/Modal1.js
import React from 'react';
import InputForm from './InputForm';

export default function Modal1 ({ values, onInputChange })  {
  return (
    <div className='w3-row'>
      {/* ... Content for Modal 1 ... */}
      <div className='w3-half w3-container'>

    

      
      <label>Name of Organisation</label>
      <InputForm
        label="Name of Organisation"
        placeholder="Name of Organisation"
        name="organisation"
        type="text"
        onChange={(e) => onInputChange('organisation', e.target.value)}
        value={values.organisation}
      />
       <label>Registration Number</label>
      <InputForm
        label="Registration Number"
        placeholder="Registration Number"
        name="registrationNumber"
        type="text"
        onChange={(e) => onInputChange('registrationNumber', e.target.value)}
        value={values.registrationNumber}
      />
        <label>Email</label>
      <InputForm
        label="Email"
        placeholder="E-mail"
        name="email"
        type="email"
        onChange={(e) => onInputChange('email', e.target.value)}
        value={values.email}
      />

<label>Phone No</label>
      <InputForm
        label="Phone"
        placeholder="Phone Number"
        name="phoneNumber"
        type="number"
        onChange={(e) => onInputChange('phoneNumber', e.target.value)}
        value={values.phoneNumber}
      />
       </div>
       
       
      <div className='w3-half w3-container'>
        <h1> Step 1 of 4</h1>
        <p>
        Enter your Organisation and Registration Number Details

        </p>

      </div>
    </div>
  );
};

