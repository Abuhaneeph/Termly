// components/Modal2.js
import React from 'react';
import InputForm from './InputForm';


export default function Modal3  ({ values, onInputChange })  {

  return (
    <>
    
    <div className='w3-row-padding'>
        <div className='w3-half w3-container'>

        
      {/* ... Content for Address 1 ... */}
      <label>Bank Name</label>
      <InputForm
        label="Bank Name"
        placeholder="Bank Name"
        name="bName"
        type="text"
        onChange={(e) => onInputChange('bName', e.target.value)}
        value={values.bName}
      />
       <br></br>
       <label>Account Name</label>
      <InputForm
        label="Account Name"
        placeholder="Account Name  "
        name="aName"
        type="text"
        onChange={(e) => onInputChange('aName', e.target.value)}
        value={values.aName}
      />
      <br></br>
      <label>Account Number</label>
        <InputForm
        label="Account Number"
        placeholder="Account Number"
        name="aNumber"
        type="text"
        onChange={(e) => onInputChange('aNumber', e.target.value)}
        value={values.aNumber}
      />
   
      
     
            
    </div>
    <div className='w3-half w3-container'>
        <h1> Step 3 of 4</h1>
        <p>
        Enter your Bank Details




        </p>

      </div>
    </div>
   
    </>
  );
};

