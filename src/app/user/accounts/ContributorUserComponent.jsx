import React from 'react';
import { Button } from 'react-bootstrap';

const ContributorUserComponent = ({ handleContributor }) => (
  <div>
    <div className='w3-card-4 w3-white  w3-center w3-border-blue'  style={{ width:'300px',borderRadius: "40px 0 40px 0", margin:'auto',marginBottom:"100px" }}>
      <h2>Individual User</h2>
      <li><b>Contributor</b></li>
      <p>For individuals contributing in groups</p>
      <h6>Requirements</h6>
      <p>1. Government ID</p>
      <p>2. BVN Number</p>
      <p>3. Proof of Address</p>
      <Button className='w3-margin' variant="primary" onClick={handleContributor}>
        Submit Now
      </Button>
    </div>
  </div>
);

export default ContributorUserComponent;
