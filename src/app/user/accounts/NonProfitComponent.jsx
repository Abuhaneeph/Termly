// RegisteredNonProfitOrganizationComponent.js
import React from 'react';
import Ngo from '@/component/Ngo/Ngo';
import Political from '@/component/PoliticalBody/PoliticalBody';
import Religion from '@/component/ReligionBody/ReligionBody';
import Govt from '@/component/Govt/Govt';

const RegisteredNonProfitOrganizationComponent = ({ openModal, closeModal, currentModal, email, organizationTypes, handleOrganizationTypeChange, selectedOrganizationType }) => {
  const renderOrganizationModals = () => {
    switch (selectedOrganizationType) {
      case 'ngo':
        return <Ngo openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={4} email={email} />;
      case 'political':
        return <Political openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={1} email={email} />;
      case 'religion':
        return <Religion openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={5} email={email} />;
      case 'govt':
        return <Govt openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={1} email={email} />;
      default:
        return null;
    }
  };

  return (
    <div className='w3-card-4 w3-white w3-padding w3-center' style={{ width:"400px",borderRadius: "40px 0 40px 0",margin:"auto",marginBottom:"100px" }}>
      {/* Your component JSX goes here */}
      <h2>Non-Profit Organization</h2>
      <p>For charity organizations, religious bodies & action groups</p>
      <h6>Choose the type of Organisation and Submit</h6>
      {organizationTypes.map((type) => (
        <div className="form-check" key={type.id}>
          <input
            className="form-check-input"
            type="radio"
            id={type.id}
            name="organizationType"
            onChange={() => handleOrganizationTypeChange(type.id)}
            checked={selectedOrganizationType === type.id}
            required
          />
          <label className="form-check-label" htmlFor={type.id}>
            {type.label}
          </label>
        </div>
      ))}
      {/* Render modals dynamically based on the selected organization type */}
      {renderOrganizationModals()}
    </div>
  );
};

export default RegisteredNonProfitOrganizationComponent;
