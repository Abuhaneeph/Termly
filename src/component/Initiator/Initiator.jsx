// components/Profit/Profit.js
import React, { useState,useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import IModal1 from './IModal1';
import IModal2 from './IModal2';
import IModal3 from './IModal3';
import IModal4 from './IModal4';
import IModal5 from './IModal5';

export default function Initiator({ openModal, closeModal, currentModal, totalModals, email }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [inputValues, setInputValues] = useState({
    fName:'',
    mName:'',
    lName:'',
  
    email:'',
    maleChecked:false,
    femaleChecked:false,
    birth:'',
    AddressHome:'',
    AddressWork:'',
    Qualification:'',
    maritalChecked: false,
    monthlyChecked:false,
    employmentChecked: false,
    idChecked: false,
    idNumber:'',
    kfName:'',
    kmName:'',
    klName:'',
    kmaleChecked:'',
    kfemaleChecked:'',
    kphoneNumber:'',
    kAddressHome:'',
    BVN:'',
    aNumber:'',
    bName:'',
    bCard:'',
    certPass:''





  });
  const [initiatorReg, setInitiatorReg] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleUserIdChange = (newUserId) => {
    setUserId(newUserId);
  };

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
 

  const handleOpenModalSequenceInitiator = () => {
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
        return [];
      case 2:
        return [];
      case 3:
        return [];
        case 4:
          return [];
       
      default:
        return [];
    }
  };

  const handleNext = () => {
    const requiredFields = getRequiredFields(currentModal);
  
    // Check if all required fields have values
    const allFieldsHaveValues = requiredFields.every((field) => {
      if (field.startsWith('cert')) {
        return uploadedFiles[field] !== null;
      }
      return inputValues[field] !== '';
    });
  
    if (allFieldsHaveValues && currentModal < totalModals) {
      if (currentModal === 4) {
        // Check if contributorReg is true before moving to the next step
        if (initiatorReg) {
          openModal(currentModal + 1);
        }
      } else {
        openModal(currentModal + 1);
      }
    }
  };

  const renderModalContent = (modalNumber) => {
    switch (modalNumber) {
      case 1:
        return <IModal1 values={inputValues} onInputChange={handleInputChange} />;
      case 2:
        return <IModal2 values={inputValues} onInputChange={handleInputChange} />;
      case 3:
        return <IModal3 values={inputValues} onInputChange={handleInputChange} />;
      case 4:
        return <IModal4 s_email={email}  values={inputValues} onInputChange={handleInputChange} onFileChange={handleFileChange}   
         initiatorReg={initiatorReg}
        onInitiatorRegChange={setInitiatorReg} onUserIdChange={handleUserIdChange}/>;
        case 5:
          return <IModal5 userId={userId} s_email={email} values={inputValues} onInputChange={handleInputChange} />;   
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
      <Button variant="primary" onClick={handleOpenModalSequenceInitiator}>
      Proceed with Initiator Registration
      </Button>

      {Array.from({ length: totalModals }, (_, index) => index + 1).map((modalNumber) =>
        renderModal(modalNumber)
      )}
    </div>
  );
}
