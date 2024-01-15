// components/Modal2.js
import React from 'react';
import InputForm from './InputForm';


export default function CModal3  ({ values, onInputChange })  {

  return (
    <>
    
    <div className='w3-row-padding'>
        <div className='w3-half w3-container'>

        
      {/* ... Content for Address 1 ... */}
      <label>Bank Verification Number</label>
      <InputForm
        label="BVN"
        placeholder="Bank Verification Number"
        name="BVN"
        type="text"
        onChange={(e) => onInputChange('BVN', e.target.value)}
        value={values.BVN}
      />
       <br></br>
       <label>Bank Name</label>
      <InputForm
        label="Bank Name"
        placeholder="Bank Name  "
        name="bName"
        type="text"
        onChange={(e) => onInputChange('bName', e.target.value)}
        value={values.bName}
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
    <label>Bank Card</label>
        <InputForm
        label="Bank Card"
        placeholder="Bank Card"
        name="bCard"
        type="text"
        onChange={(e) => onInputChange('bCard', e.target.value)}
        value={values.bCard}
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

