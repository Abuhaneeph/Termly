// components/Profit/Profit.js
'use client'
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Modal4 from './Modal4'
import Modal5 from './Modal5'

export default function Religion({ openModal, closeModal, currentModal, totalModals,email }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [inputValues, setInputValues] = useState({
    accountName: '',
    bankName: '',
    birthDate: '',
    BVN: '',
    businessEmail: '',
    businessName: '',
    certAddr: null,
    certID: null,
    certInc: null,
    certMem: null,
    city: '',
    city2: '',
    fName: '',
    gender: '',
    llcChecked: false,
    lName: '',
    localGovt: '',
    localGovt2: '',
    mName: '',
    mobileNumber: '',
    NIN: '',
    phoneNumber: '',
    registeredNumber: '',
    registrationChecked: false,
    street: '',
    street2: '',
  
  });
  

  const handleOpenModalSequence = () => {
    openModal(1);
    setButtonClicked(true);
  };

  const handleInputChange = (name, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleFileChange = (file) => {
    console.log('File5 received in Profit:', file);
    // Handle the file value in the parent component (Profit)
    // You can perform additional actions here, e.g., displaying a preview or uploading the file
  };

  const getRequiredFields = (modalNumber) => {
    switch (modalNumber) {
      case 1:
        return ['bankName', 'accountName'];
      case 2:
        return ['businessName', 'registeredNumber',  'phoneNumber'];
       case 3:
        return ['localGovt','city','street'];
        case 4:
          return ['fName','lName','birthDate','gender','NIN','BVN'];
      default:
        return [];
    }
  };
  const handleNext = () => {
    // Get the required fields for the current modal
    const requiredFields = getRequiredFields(currentModal);
  
    // Check if all required fields have values
    const allFieldsHaveValues = requiredFields.every(field => inputValues[field] !== '');
  
    if (allFieldsHaveValues && currentModal < totalModals) {
      openModal(currentModal + 1);
    }
  };

  const renderModalContent = (modalNumber) => {
    switch (modalNumber) {
      case 1:
        return <Modal1 values={inputValues} onInputChange={handleInputChange} />;
      case 2:
        return <Modal2 values={inputValues} onInputChange={handleInputChange} />;
        case 3:
          return  <Modal3 values={inputValues} onInputChange={handleInputChange} />;
          case 4:
            return <Modal4 values={inputValues} onInputChange={handleInputChange} />;
            case 5:
              return <Modal5 s_email={email} values={inputValues} onInputChange={handleInputChange} onFileChange={handleFileChange} />;
      // Add cases for other modals as needed
      default:
        return null;
    }
  };

  const handleBack = () => {
    if (currentModal > 1) {
      openModal(currentModal - 1);
    }
  };

  
 

  const renderModal = (modalNumber) => {
    // Render modals dynamically only if the button is clicked
    if (buttonClicked) {
      return (
        <Modal show={currentModal === modalNumber} onHide={closeModal} key={modalNumber}>
          <Modal.Header closeButton>
            <Modal.Title>Step {modalNumber}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {renderModalContent(modalNumber)}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleBack} disabled={modalNumber === 1}>
              Back
            </Button>
            <Button variant="primary" onClick={handleNext} disabled={modalNumber === totalModals}>
              Next
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
    return null;
  };

  
  return (
    <div>
      {/* Trigger button to open the first modal */}
      <Button variant="primary" onClick={handleOpenModalSequence}>
       Submit
      </Button>

      {/* Render modals dynamically */}
      {Array.from({ length: totalModals }, (_, index) => index + 1).map((modalNumber) =>
        renderModal(modalNumber)
      )}
    </div>
  );
}
