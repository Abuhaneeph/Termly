// components/Profit/Profit.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Modal3 from './Modal3';
import Modal4 from './Modal4';

export default function Ngo({ openModal, closeModal, currentModal, totalModals, email }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: '',
    organisation: '',
    phoneNumber: '',
    registrationNumber: '',
    name: '',
    pos: '',
    address: '',
    mobileNumber: '',
    aName: '',
    bName: '',
    bNumber: '',
  });
  const [fileValues, setFileValues] = useState({
    certReg: null,
    certAddr: null,
    certDir: null,
  });

  const handleFileChange = (name, file) => {
    console.log(`File ${name} received in Ngo:`, file);
    setFileValues((prevFileValues) => ({
      ...prevFileValues,
      [name]: file,
    }));
  };

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

  const getRequiredFields = (modalNumber) => {
    switch (modalNumber) {
      case 1:
        return ['email', 'organisation', 'phoneNumber'];
      case 2:
        return ['name', 'pos', 'address', 'mobileNumber'];
      case 3:
        return ['certAddr', 'certDir', 'certReg'];
      
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
        return <Modal1 values={inputValues} onInputChange={handleInputChange} />;
      case 2:
        return <Modal2 values={inputValues} onInputChange={handleInputChange} />;
      case 3:
        return <Modal3 values={inputValues} onInputChange={handleInputChange} onFileChange={handleFileChange} />;
      case 4:
        return <Modal4 s_email={email} fileValues={fileValues} values={inputValues} onInputChange={handleInputChange} />;
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
      <Button variant="primary" onClick={handleOpenModalSequence}>
       Register Now
      </Button>

      {Array.from({ length: totalModals }, (_, index) => index + 1).map((modalNumber) =>
        renderModal(modalNumber)
      )}
    </div>
  );
}
