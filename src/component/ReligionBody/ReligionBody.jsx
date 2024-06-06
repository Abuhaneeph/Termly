// components/Profit/Profit.js
import React, { useState ,useEffect} from 'react';
import { Modal, Button } from 'react-bootstrap';
import RModalOne from './RModal1';
import RModalTwo from './RModal2';
import RModalThree from './RModal3';
import RModalFour from './RModal4';


export default function Ngo({ openModal, closeModal, currentModal, totalModals, email }) {
  const [buttonClicked, setButtonClicked] = useState(false);
  const [inputValues, setInputValues] = useState({
    email: '',

    phoneNumber: '',
    registrationName: '',
    name: '',
    pos: '',
    address: '',
    mobileNumber: '',
    aName: '',
    bName: '',
    aNumber: '',
    certReg: null,
    certAddr: null,
    certDir: null,
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
 

  const handleOpenModalSequenceR = () => {
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
        return ['email', 'registrationNumber', 'phoneNumber'];
      case 2:
        return ['name', 'pos', 'address', 'mobileNumber'];
      case 3:
        return [];
       
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
        return <RModalOne values={inputValues} onInputChange={handleInputChange} />;
      case 2:
        return <RModalTwo values={inputValues} onInputChange={handleInputChange} />;
      case 3:
        return <RModalThree values={inputValues} onInputChange={handleInputChange} />;
      case 4:
        return <RModalFour s_email={email}  values={inputValues} onInputChange={handleInputChange} onFileChange={handleFileChange} />;
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
      <Button variant="primary" onClick={handleOpenModalSequenceR}>
       Register Now
      </Button>

      {Array.from({ length: totalModals }, (_, index) => index + 1).map((modalNumber) =>
        renderModal(modalNumber)
      )}
    </div>
  );
}
