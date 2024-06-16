import React from 'react';
import TextInputField from "./TextInputField";
import RadioInputField from "./RadioInputField";

const BankDetails = ({    initiatorData}) => (
    <div className="card mb-4">
    <div className="card-header">Bank Information</div>
    <div className="card-body">
      <form>
      
        {/* Form Row*/}
        <div className="row gx-3 mb-3">
          {/* Form Group (first name)*/}
          <div className="col-md-6">
            <label className="small mb-1" htmlFor="inputBVN">
             Bank Verification Number
            </label>
            <input
              className="form-control"
              id="inputBVN"
              type="text"
              placeholder="Enter your BVN"
              value={initiatorData[0].BVN}
            />
          </div>
          <div className="col-md-6">
            <label className="small mb-1" htmlFor="inputBankName">
              Bank Name
            </label>
            <input
              className="form-control"
              id="inputBankName"
              type="text"
              placeholder="Enter your Bank Name"
              value={initiatorData[0].bName}
            />
          </div>
          {/* Form Group (last name)*/}
          <div className="col-md-6">
            <label className="small mb-1" htmlFor="inputAccName">
              Account Number
            </label>
            <input
              className="form-control"
              id="inputAccName"
              type="text"
              placeholder="Enter your Account Number"
              value={initiatorData[0].aNumber}
            />


          </div>
          <div className="col-md-6">
            <label className="small mb-1" htmlFor="inputBankCard">
              Bank Card
            </label>
            <input
              className="form-control"
              id="inputBankCard"
              type="number"
              placeholder="Enter your Bank Card"
              value={initiatorData[0].bCard}
            />


          </div>
          
        </div>
       
      
        
       
       
        
        {/* Save changes button*/}
        <button className="btn btn-primary" type="button" style={{marginBottom:"15px"}}>
          Save changes
        </button>
      </form>
    </div>
  </div>
);

export default BankDetails;
