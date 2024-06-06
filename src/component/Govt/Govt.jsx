// components/Profit/Profit.js
import React, { useState,useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import GModalOne from './GModal1'; 

export default function Govt({ openModal, closeModal, currentModal, totalModals, email }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: '',
    organisation: '',
   
    registrationNumber: '',
    briefHistory:''
  });
  useEffect(() => {
    if (currentModal === 0) {
      setButtonClicked(false);
    }
  }, [currentModal]);

  const handleFileChange = (file) => {
    console.log('File5 received in Profit:', file);
    // Handle the file value in the parent component (Profit)
    // You can perform additional actions here, e.g., displaying a preview or uploading the file
  };
 

  const handleOpenModalSequenceNGO = () => {
    openModal(1);
    setButtonClicked(true);
  };

  const handleInputChange = (name, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const getRequiredFields = (modalNumber) => {
    switch (modalNumber) {
    
       
      default:
        return [];
    }
  };

  const handleNext = () => {
    const requiredFields = getRequiredFields(currentModal);

    // Check if all required fields have values
    const allFieldsHaveValues = requiredFields.every((field) => {
      if (field.startsWith('cert')) {
        return fileValues[field] !== null;
      }
      return inputValues[field] !== '';
    });

    if (allFieldsHaveValues && currentModal < totalModals) {
      openModal(currentModal + 1);
    }
  };

  const renderModalContent = (modalNumber) => {
    switch (modalNumber) {
      case 1:
        return <GModalOne values={inputValues} onInputChange={handleInputChange} s_email={email} />;
     
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
    if (buttonClicked) {
      return (
        <Modal show={currentModal === modalNumber} onHide={closeModal} key={modalNumber}>
          <Modal.Header closeButton>
            <Modal.Title>Step {modalNumber}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{renderModalContent(modalNumber)}</Modal.Body>
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
      <Button variant="primary" onClick={handleOpenModalSequenceNGO}>
       Register Now
      </Button>

      {Array.from({ length: totalModals }, (_, index) => index + 1).map((modalNumber) =>
        renderModal(modalNumber)
      )}
    </div>
  );
}
