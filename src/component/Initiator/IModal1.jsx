// components/Modal1.js
'use client'
import React from 'react';
import InputForm from './InputForm';

export default  function IModal1 ({ values, onInputChange })  {

  return (
    <div className='w3-row'>
      {/* ... Content for Modal 1 ... */}
      <div className='w3-half w3-container'>

    

      
      <label>First Name</label>
      <InputForm
        label="First Name"
        placeholder="First Name"
        name="fName"
        type="text"
        onChange={(e) => onInputChange('fName', e.target.value)}
        value={values.fName}
      />
       <label>Middle Number</label>
      <InputForm
        label="Middle Name"
        placeholder="Middle Name"
        name="mName"
        type="text"
        onChange={(e) => onInputChange('mName', e.target.value)}
        value={values.mName}
      />
        <label>Last Name</label>
      <InputForm
        label="Last Name"
        placeholder="Last Name"
        name="lName"
        type="text"
        onChange={(e) => onInputChange('lName', e.target.value)}
        value={values.lName}
      />
   <label>E-mail</label>
      <InputForm
        label="E-mail"
        placeholder="E-mail"
        name="email"
        type="text"
        onChange={(e) => onInputChange('email', e.target.value)}
        value={values.email}
      />
<label>Gender</label>
<div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="maleChecked"
          name="maleChecked"
          required
          onChange={(e) => onInputChange('maleChecked', e.target.checked)}
          checked={values.maleChecked}
        />
        <label className="form-check-label" htmlFor="maleChecked">
     Male
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="femaleChecked"
          name="femaleChecked"
          required
          onChange={(e) => onInputChange('femaleChecked', e.target.checked)}
          checked={values.femaleChecked}
        />
        <label className="form-check-label" htmlFor="femaleChecked">
     Female
        </label>
      </div>
      <label>Date of Birth</label>
      <InputForm
        label="birthDate"
        placeholder="Date of Birth"
        name="birth"
        type="text"
        onChange={(e) => onInputChange('birth', e.target.value)}
        value={values.birth}
      />
          <label>Address Home</label>
      <InputForm
        label="addressHome"
        placeholder="Address Home"
        name="AddressHome"
        type="text"
        onChange={(e) => onInputChange('AddressHome', e.target.value)}
        value={values.AddressHome}
      />
                <label>Address Work</label>
      <InputForm
        label="addressWork"
        placeholder="Address Work"
        name="AddressWork"
        type="text"
        onChange={(e) => onInputChange('AddressWork', e.target.value)}
        value={values.AddressWork}
      />
                <label>Highest Educational Qualification</label>
      <InputForm
        label="qualification"
        placeholder="Qualification"
        name="Qualification"
        type="text"
        onChange={(e) => onInputChange('Qualification', e.target.value)}
        value={values.Qualification}
      />
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="maritalStatus"
          name="MaritalChecked"
          required
          onChange={(e) => onInputChange('MaritalChecked', e.target.checked)}
          checked={values.MaritalChecked}
        />
        <label className="form-check-label" htmlFor="MaritalChecked">
     Marital Status
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="monthlyIncome"
          name="monthlyChecked"
          required
          onChange={(e) => onInputChange('monthlyChecked', e.target.checked)}
          checked={values.monthlyChecked}
        />
        <label className="form-check-label" htmlFor="monthlyIncome">
    Monthly Income
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="employmentChecked"
          name="employmentChecked"
          required
          onChange={(e) => onInputChange('employmentChecked', e.target.checked)}
          checked={values.employmentChecked}
        />
        <label className="form-check-label" htmlFor="employmentChecked">
     Employment Status
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="idChecked"
          name="idChecked"
          required
          onChange={(e) => onInputChange('idChecked', e.target.checked)}
          checked={values.idChecked}
        />
        <label className="form-check-label" htmlFor="idChecked">
   Means of Identification
        </label>
      </div>
      <label>ID Number</label>
      <InputForm
        label="idNumber"
        placeholder="ID Number"
        name="idNumber"
        type="text"
        onChange={(e) => onInputChange('idNumber', e.target.value)}
        value={values.idNumber}
      />
       </div>

       
       
      <div className='w3-half w3-container'>
        <h1> Step 1 of 4</h1>
        <p>
        Enter your Personal Details

        </p>

      </div>
    </div>
  );
};

