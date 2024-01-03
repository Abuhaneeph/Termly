// components/Modal1.js
import React from 'react';
import InputForm from './InputForm';

export default function Modal1 ({ values, onInputChange })  {
  return (
    <div className='w3-row'>
      {/* ... Content for Modal 1 ... */}
      <div className='w3-half w3-container'>

     
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="llcChecked"
          name="llcChecked"
          required
          onChange={(e) => onInputChange('llcChecked', e.target.checked)}
          checked={values.llcChecked}
        />
        <label className="form-check-label" htmlFor="llcChecked">
          Limited Liability Company
        </label>
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="registrationChecked"
          name="registrationChecked"
          required
          onChange={(e) => onInputChange('registrationChecked', e.target.checked)}
          checked={values.registrationChecked}
        />
        <label className="form-check-label" htmlFor="registrationChecked">
          Register Business of Name
        </label>
      </div>
      <label>Bank Name</label>
      <InputForm
        label="Bank Name"
        placeholder="Bank name"
        name="bankName"
        type="text"
        onChange={(e) => onInputChange('bankName', e.target.value)}
        value={values.bankName}
      />
       <label>Account Number</label>
      <InputForm
        label="Account Number"
        placeholder="Account Number"
        name="accountName"
        type="number"
        onChange={(e) => onInputChange('accountName', e.target.value)}
        value={values.accountName}
      />
       </div>
      <div className='w3-half w3-container'>
        <h1> Step 1 of 5</h1>
        <p>
        Enter your bank account details where your funds will be deposited

        </p>

      </div>
    </div>
  );
};

