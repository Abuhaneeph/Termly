// components/Modal2.js
import React from 'react';
import InputForm from './InputForm';

export default function Modal4  ({ values, onInputChange })  {
  return (
    <div className='w3-row'>
        <div className='w3-half w3-container'>

        
      {/* ... Content for Address 1 ... */}
      <label>Director 1</label>
      <InputForm
        label="First Name"
        placeholder="First Name"
        name="fName"
        type="text"
        onChange={(e) => onInputChange('fName', e.target.value)}
        value={values.fName}
      />
       <br></br>
      <InputForm
        label="Middle Name"
        placeholder="Middle Name (optional) "
        name="mName"
        type="text"
        onChange={(e) => onInputChange('mName', e.target.value)}
        value={values.mName}
      />
      <br></br>
        <InputForm
        label="Last Name"
        placeholder="Last Name"
        name="lName"
        type="text"
        onChange={(e) => onInputChange('lName', e.target.value)}
        value={values.lName}
      />
      <br></br>
      <InputForm
        label="Birth Date"
        placeholder="Birth Date(YYY-MM-DD)"
        name="birthDate"
        type="text"  // You can change the type to 'date' for a date picker if supported by your browser
        onChange={(e) => onInputChange('birthDate', e.target.value)}
        value={values.birthDate}
      />
       {/* ... Content for Modal 2 ... */}
       <br></br>
       <InputForm
        label="Gender"
        placeholder="Gender"
        name="gender"
        type="text"  // You can change the type to 'date' for a date picker if supported by your browser
        onChange={(e) => onInputChange('gender', e.target.value)}
        value={values.gender}
      />
      <br></br>
      <InputForm
        label="mobileNumber"
        placeholder="Mobile Number"
        name="mobileNumber"
        type="number"
        onChange={(e) => onInputChange('mobileNumber', e.target.value)}
        value={values.mobileNumber}
      />
      <br></br>
      <InputForm
        label="BVN"
        placeholder="Bank Verification Number"
        name="BVN"
        type="number"
        onChange={(e) => onInputChange('BVN', e.target.value)}
        value={values.BVN}
      />

       <br></br>
    
            <InputForm
        label="NIN"
        placeholder="national Identification"
        name="NIN"
        type="number"
        onChange={(e) => onInputChange('NIN', e.target.value)}
        value={values.NIN}
      />
      <br></br>
     
            
    </div>
    <div className='w3-half w3-container'>
        <h1> Step 4 of 5</h1>
        <p>
        Enter the bio date of directors, board member and principal officers as contained in the article of memorandum and association




        </p>

      </div>
    </div>
  );
};

