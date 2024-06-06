// components/Modal2.js
import React from 'react';
import InputForm from './InputForm';

export default function CModal2  ({ values, onInputChange })  {
  return (
    <div className='w3-row'>
    <div className='w3-half w3-container'>

   
<h1>Next of Kin</h1>
     
<label>First Name</label>
<InputForm
 label="First Name"
 placeholder="First Name"
 name="kfName"
 type="text"
 onChange={(e) => onInputChange('kfName', e.target.value)}
 value={values.kfName}
/>
<label>Middle Number</label>
<InputForm
 label="Middle Name"
 placeholder="Middle Name"
 name="kmName"
 type="text"
 onChange={(e) => onInputChange('kmName', e.target.value)}
 value={values.kmName}
/>
 <label>Last Name</label>
<InputForm
 label="Last Name"
 placeholder="Last Name"
 name="klName"
 type="text"
 onChange={(e) => onInputChange('klName', e.target.value)}
 value={values.klame}
/>
<label>Gender</label>
<div className="form-check">
 <input
   className="form-check-input"
   type="checkbox"
   id="maleChecked"
   name="kmaleChecked"
   required
   onChange={(e) => onInputChange('kmaleChecked', e.target.checked)}
   checked={values.kmaleChecked}
 />
 <label className="form-check-label" htmlFor="MaleChecked">
Male
 </label>
</div>
<div className="form-check">
 <input
   className="form-check-input"
   type="checkbox"
   id="femaleChecked"
   name="kfemaleChecked"
   required
   onChange={(e) => onInputChange('kfemaleChecked', e.target.checked)}
   checked={values.kfemaleChecked}
 />
 <label className="form-check-label" htmlFor="femaleChecked">
Female
 </label>
</div>
<label>Phone Number</label>
<InputForm
 label="phoneNumber"
 placeholder="phoneNumber"
 name="kphoneNumber"
 type="number"
 onChange={(e) => onInputChange('kphoneNumber', e.target.value)}
 value={values.kphoneNumber}
/>
   <label>Address Home</label>
<InputForm
 label="addressHome"
 placeholder="Address Home"
 name="kAddressHome"
 type="text"
 onChange={(e) => onInputChange('kAddressHome', e.target.value)}
 value={values.kAddressHome}
/>



</div>
   <div className='w3-half w3-container'>
       <h1> Step 2 of 4</h1>
       <p>
       Enter your Next of Kin Details

       </p>

     </div>
   </div>

  );
};

