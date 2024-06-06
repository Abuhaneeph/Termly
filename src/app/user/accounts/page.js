// Page.jsx
'use client'
import React, { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { usePaystackPayment } from 'react-paystack';
import { toast } from 'react-toastify';
import axios from 'axios';
import IndividualUserComponent from './IndividualUserComponent';
import RegisteredNonProfitOrganizationComponent from './NonProfitComponent';
import RegisteredProfitOrganizationComponent from './ProfitComponent';
import Ngo from '@/component/Ngo/Ngo';
import Political from '@/component/PoliticalBody/PoliticalBody';
import Religion from '@/component/ReligionBody/ReligionBody';
import Govt from '@/component/Govt/Govt';
import ContributorUserComponent from './ContributorUserComponent';
import { Button } from 'react-bootstrap';
import Initiator from '@/component/Initiator/Initiator';
import Contributor from '@/component/Contributor/Contributor';
import { useSession } from 'next-auth/react';
export default function Page() {
  
  const searchParams = useSearchParams();
  const [currentModal, setCurrentModal] = useState(1);
  const [selectedUserType, setSelectedUserType] = useState(null);
  const [selectedOrganizationType, setSelectedOrganizationType] = useState(null);
  const [selectedContributorType, setSelectedContributorType] = useState(null);
  const [shouldRenderInitiator, setShouldRenderInitiator] = useState(false);
  const [shouldRenderContributor, setShouldRenderContributor] = useState(false);


  const handleUserTypeChange = (userType) => {
    setSelectedUserType(userType);
    setSelectedOrganizationType(null); // Reset organization type when user type changes
    setShouldRenderContributor(false);
    setShouldRenderInitiator(false);
  };

  const handleOrganizationTypeChange = (organizationType) => {
    setSelectedOrganizationType(organizationType);
    setShouldRenderContributor(false);
    setShouldRenderInitiator(false);
  };

  const handleContributorTypeChange = (contributorType) => {
    setSelectedContributorType(contributorType);
  };

  const organizationTypes = [
    { id: 'ngo', label: 'NGO' },
    { id: 'political', label: 'Political Body' },
    { id: 'religion', label: 'Religion Body' },
    { id: 'govt', label: 'Govt' },
  ];

  const openModal = (modalNumber) => {
    setCurrentModal(modalNumber);
  };

  const closeModal = () => {
    setCurrentModal(0);
  };

  const EmailAddress = searchParams.get('email');

  const config = {
    reference: (new Date()).getTime().toString(),
    email: EmailAddress,
    amount: 20000,
    publicKey: 'pk_test_667df618507a40ab04e6359db22c35e11c29c688',
  };

  const initializePayment = usePaystackPayment(config);

  const onInitiatorSuccess = async () => {
    try {
      await axios.put(`http://localhost:3000/api/updateAccountType`, { email: EmailAddress, accountType: 1 });
      setShouldRenderInitiator(true);
    } 
    catch (error) {
      console.error("Error updating amount raised:", error);
    }
  };

  const onContributorSuccess = async () => {
    // Add logic for Contributor success if needed
    toast.success("Contributor Created Successfully");
  };

  const onSuccess = (reference) => {
    console.log(reference);
    if (selectedUserType === 'user') {
      if (selectedContributorType === 'contributor') {
        onContributorSuccess();
      } else {
        onInitiatorSuccess();
        toast.success("Initiator Created Successfully");
        setShouldRenderInitiator(true);
       
      }
    }
    // Add other logic if needed
  };
  

  const onClose = () => {
    console.log('closed');
  };

  const handleInitiator = () => {
    initializePayment(onSuccess, onClose);
  
  };

  const handleContributor = () => {
    // Add logic for handling Contributor click if needed
    setSelectedContributorType('contributor');
    setShouldRenderContributor(true)
  };

  const renderUserButtons = () => {
    return (
      <div>
        <Button className='w3-margin' variant='primary' onClick={() => handleUserTypeChange('user')}>Individual</Button>
        <Button variant='primary' onClick={() => handleUserTypeChange('institution')}>Institution</Button>
      </div>
    );
  };

  const renderUserComponent = () => {
    if (selectedUserType === 'user') {
      if (selectedContributorType === 'contributor') {
        return <ContributorUserComponent handleContributor={handleContributor} />;
      } else {
        return <IndividualUserComponent handleInitiator={handleInitiator} />;
      }
    }
    return null;
  };

  const renderOrganizationButtons = () => {
    return (
      <div>
        <Button className='w3-margin' variant='primary' onClick={() => handleOrganizationTypeChange('profit')}>Profit</Button>
        <Button variant='primary' onClick={() => handleOrganizationTypeChange('non-profit')}>Non-Profit</Button>
      </div>
    );
  };

  const renderOrganizationModals = () => {
    switch (selectedOrganizationType) {
      case 'ngo':
        return <Ngo openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={4} email={EmailAddress} />;
      case 'political':
        return <Political openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={3} email={EmailAddress} />;
      case 'religion':
        return <Religion openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={5} email={EmailAddress} />;
      case 'govt':
        return <Govt openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={1} email={EmailAddress} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div>
        <div className="w3-center w3-row-padding" id="account" style={{ marginTop: "50px" }}>
          <div>
            {renderUserButtons()}
          </div>
          {shouldRenderInitiator && (
                    <div className='w3-margin-bottom'>
          <Initiator openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={5} email={EmailAddress} />
        </div>
        )}
           {shouldRenderContributor && (
                    <div className='w3-margin-bottom'>
          <Contributor openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={5} email={EmailAddress} />
        </div>
        )}
        

          {selectedUserType === 'user' && (
            <div>
              <Button className='w3-margin' variant='primary' onClick={() => setSelectedContributorType(null)}>Initiator</Button>
              <Button variant='primary' onClick={() => setSelectedContributorType('contributor')}>Contributor</Button>
              {renderUserComponent()}
            </div>
          )}

          {selectedUserType === 'institution' && (
            <div>
              {renderOrganizationButtons()}
            </div>
          )}
         

          {selectedOrganizationType === 'profit' && (
            <RegisteredProfitOrganizationComponent openModal={openModal} closeModal={closeModal} currentModal={currentModal} email={EmailAddress} />
          )}

          {selectedOrganizationType === 'non-profit' && (
            <RegisteredNonProfitOrganizationComponent
              openModal={openModal}
              closeModal={closeModal}
              currentModal={currentModal}
              email={EmailAddress}
              organizationTypes={organizationTypes}
              handleOrganizationTypeChange={handleOrganizationTypeChange}
              selectedOrganizationType={selectedOrganizationType}
            />
          )}


          {renderOrganizationModals()}
        </div>
      </div>
      <div></div>
    </>
  );
}
