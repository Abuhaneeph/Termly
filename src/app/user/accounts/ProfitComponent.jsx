import React from 'react';
import Profit from '@/component/Profit/Profit';

const RegisteredProfitOrganizationComponent = ({ openModal, closeModal, currentModal, email }) => (
  <div>
    <div className='w3-card-4 w3-white w3-padding w3-center' style={{ width:"400px",borderRadius: "40px 0 40px 0",margin:"auto",marginBottom:"100px" }}>
      <h2>Registered Profit Organization</h2>
      <p>For companies seeking to raise capital via crowdfunding</p>
      <h6>Requirements</h6>
      <p>1. Registration Cert</p>
      <p>2. BVN & ID Directors</p>
      <p>3. Memat & Articles</p>
      <p>4. Proof of Address</p>
      <p>5. Memo of guidance</p>
      <Profit openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={5} email={email} />
    </div>
  </div>
);

export default RegisteredProfitOrganizationComponent;
