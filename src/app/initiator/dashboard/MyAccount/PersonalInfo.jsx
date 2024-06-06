// PersonalInfo.js
import React from 'react';

const PersonalInfo = ({ initiatorData }) => {
  console.log(initiatorData[0].maleChecked)
  const maleChecked = initiatorData[0].maleChecked === 1;
  const femaleChecked = initiatorData[0].femaleChecked === 1;
  const monthlyChecked = initiatorData[0].monthlyChecked === 1;
  const employmentChecked = initiatorData[0].employmentChecked === 1;
  const idChecked = initiatorData[0].idChecked === 1;
  return (
    <div className="card mb-4">
      <div className="card-header">Account Details</div>
      <div className="card-body">
        <form>
          <div className="row gx-3 mb-3">
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputFirstName">
                First name
              </label>
              <input
                className="form-control"
                id="inputFirstName"
                type="text"
                placeholder="Enter your first name"
               value={initiatorData[0].fName}
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
                value={initiatorData[0].mName}
              />
            </div>
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputLastName">
                Last name
              </label>
              <input
                className="form-control"
                id="inputLastName"
                type="text"
                placeholder="Enter your last name"
                value={initiatorData[0].lName}
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="small mb-1" htmlFor="inputAddressHome">
              Address Home
            </label>
            <input
              className="form-control"
              id="inputAddressHome"
              type="text"
              placeholder="Enter your Home Address"
              value={initiatorData[0].AddressHome}
            />
          </div>
          <div className="mb-3">
            <label className="small mb-1" htmlFor="inputAddressWork">
              Address Work
            </label>
            <input
              className="form-control"
              id="inputAddressWork"
              type="text"
              placeholder="Enter your Work Address"
              value={initiatorData[0].AddressWork}
            />
          </div>
          <div className="mb-3">
            <label className="small mb-1" htmlFor="inputEmailAddress">
              Email address
            </label>
            <input
              className="form-control"
              id="inputEmailAddress"
              type="email"
              placeholder="Enter your email address"
              value={initiatorData[0].email}
            />
          </div>
          <div className="row gx-3 mb-3">
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputBirthday">
                Birthday
              </label>
              <input
                className="form-control"
                id="inputBirthday"
                type="text"
                name="birthday"
                placeholder="Enter your birthday"
                value={initiatorData[0].birth}
              />
            </div>
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputQualification">
                Qualification
              </label>
              <input
                className="form-control"
                id="inputQualification"
                type="text"
                placeholder="Enter your Qualification"
                value={initiatorData[0].Qualification}
              />
            </div>
          </div>
          <div className='row gx-3 mb-3'>
            <div className="col-md-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  defaultChecked={initiatorData[0].maleChecked === 1} 
                />
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  defaultChecked={initiatorData[0].femaleChecked === 1}
                />
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="monthlyincome"
                  defaultChecked={initiatorData[0].monthlyChecked === 1}
                />
                <label className="form-check-label" htmlFor="monthlyincome">
                  Monthly Income
                </label>
              </div>
            </div>
            <div className="col-md-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="employmentStatus"
                  checked={employmentChecked}
                  readOnly

                />
                <label className="form-check-label" htmlFor="employmentStatus">
                  Employment Status
                </label>
              </div>
            </div>
          </div>
          <div className='row gx-3 mb-3'>
            <div className="col-md-3">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="meansID"
                  checked={idChecked}
                  readOnly
 
                />
                <label className="form-check-label" htmlFor="meansID">
                  Means of Identification
                </label>
              </div>
            </div>
            <div className='col-md-9'>
              <label className="small mb-1" htmlFor="inputAddressWork">
                ID Number
              </label>
              <input
                className="form-control"
                id="inputIDNumber"
                type="text"
                placeholder="Enter your ID Number"
                defaultChecked={initiatorData[0].idNumber === 1}
              />
            </div>
          </div>
          <button className="btn btn-primary" type="button">
            Save changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
