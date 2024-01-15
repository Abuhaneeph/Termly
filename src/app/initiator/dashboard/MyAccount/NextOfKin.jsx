import React from 'react';
import TextInputField from "./TextInputField";
import RadioInputField from "./RadioInputField";

const NextOfKin = ( {initiatorData}) => (
    <div className="card mb-4">
    <div className="card-header">Next of Kin</div>
    <div className="card-body">
      <form>
      
        {/* Form Row*/}
        <div className="row gx-3 mb-3">
          {/* Form Group (first name)*/}
          <div className="col-md-6">
            <label className="small mb-1" htmlFor="inputFirstName">
              First name
            </label>
            <input
              className="form-control"
              id="inputFirstName"
              type="text"
              placeholder="Enter your first name"
              value={initiatorData[0].kfName}
            />
          </div>
          <div className="col-md-6">
            <label className="small mb-1" htmlFor="inputMiddleName">
              Middle Name
            </label>
            <input
              className="form-control"
              id="inputMiddleName"
              type="text"
              placeholder="Enter your Middle name"
              value={initiatorData[0].kmName}
            />
          </div>
          {/* Form Group (last name)*/}
          <div className="col-md-6">
            <label className="small mb-1" htmlFor="inputLastName">
              Last name
            </label>
            <input
              className="form-control"
              id="inputLastName"
              type="text"
              placeholder="Enter your last name"
              value={initiatorData[0].kmName}
            />


          </div>
          <div className="col-md-6">
            <label className="small mb-1" htmlFor="inputPhoneNumber">
              Phone Number
            </label>
            <input
              className="form-control"
              id="inputPhoneNumber"
              type="tel"
              placeholder="Enter your Phone Number"
              value={initiatorData[0].kphoneNumber}
            />


          </div>
        </div>
       
      
        
       
        <div className='mb-3'>
            
  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="gender"
      id="male"
      
    />
    <label className="form-check-label" htmlFor="male">
      Male
    </label>
  </div>

  <div className="form-check form-check-inline">
    <input
      className="form-check-input"
      type="radio"
      name="gender"
      id="female"
    />
    <label className="form-check-label" htmlFor="female">
      Female
    </label>
  </div>

        </div>
        
        {/* Save changes button*/}
        <button className="btn btn-primary" type="button">
          Save changes
        </button>
      </form>
    </div>
  </div>
);

export default NextOfKin;
