// components/Modal1.js
import React from 'react';
import InputForm from './InputForm';

export default function RModalOne ({ values, onInputChange })  {
  return (
    <div className='w3-row'>
      {/* ... Content for Modal 1 ... */}
      <div className='w3-half w3-container'>

    

      
    
       <label>Registration Name</label>
      <InputForm
        label="Registration Name"
        placeholder="Registration Name"
        name="registrationName"
        type="text"
        onChange={(e) => onInputChange('registrationName', e.target.value)}
        value={values.registrationName}
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

      
<label>Email</label>
      <InputForm
        label="email"
        placeholder="Email"
        name="email"
        type="email"
        onChange={(e) => onInputChange('email', e.target.value)}
        value={values.email}
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

