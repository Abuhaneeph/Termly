// components/Profit/Profit.js
import React, { useState,useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import CModal1 from './CModal1';
import CModal2 from './CModal2';
import CModal3 from './CModal3';
import CModal4 from './CModal4';
import CModal5 from './CModal5';

export default function Contributor({ openModal, closeModal, currentModal, totalModals, email }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [contributorReg, setContributorReg] = useState(false);
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
    certPass:'',
    referre:'',





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
        if (contributorReg) {
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
        return <CModal1 values={inputValues} onInputChange={handleInputChange} />;
      case 2:
        return <CModal2 values={inputValues} onInputChange={handleInputChange} />;
      case 3:
        return <CModal3 values={inputValues} onInputChange={handleInputChange} />;
      case 4:
        return <CModal4 s_email={email}  values={inputValues} onInputChange={handleInputChange} onFileChange={handleFileChange}  contributorReg={contributorReg}
            onContributorRegChange={setContributorReg} />;
        case 5:
          return <CModal5 values={inputValues} onInputChange={handleInputChange} />;   
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
      Proceed with Contributor Registration
      </Button>

      {Array.from({ length: totalModals }, (_, index) => index + 1).map((modalNumber) =>
        renderModal(modalNumber)
      )}
    </div>
  );
}
