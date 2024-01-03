'use client'
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function Page() {
  const [currentModal, setCurrentModal] = useState(0);
  const totalModals = 5; // Adjust the total number of modals as needed

  const openModal = (modalNumber) => {
    setCurrentModal(modalNumber);
  };

  const closeModal = () => {
    setCurrentModal(0); // Close all modals
  };

  const renderModal = (modalNumber) => {
    return (
      <Modal show={currentModal === modalNumber} onHide={closeModal} key={modalNumber}>
        <Modal.Header closeButton>
          <Modal.Title>Modal {modalNumber}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Sample Modal Content */}
          {modalNumber === 1 && (
            <div>
              <p>Welcome to Modal 1!</p>
              <p>This modal contains information about our product.</p>
            </div>
          )}
          {modalNumber === 2 && (
            <div>
              <p>Modal 2 is all about features!</p>
              <ul>
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </div>
          )}
          {modalNumber === 3 && (
            <div>
              <p>Here's what you need to know in Modal 3:</p>
              <p>Important information and guidelines.</p>
            </div>
          )}
          {modalNumber === 4 && (
            <div>
              <p>Modal 4 - Our Mission</p>
              <p>Learn about our company's mission and values.</p>
            </div>
          )}
          {modalNumber === 5 && (
            <div>
              <p>Modal 5 - Contact Us</p>
              <p>Have questions? Reach out to our support team.</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          {modalNumber > 1 && (
            <Button variant="primary" onClick={() => openModal(modalNumber - 1)}>
              Back
            </Button>
          )}
          {modalNumber < totalModals && (
            <Button variant="primary" onClick={() => openModal(modalNumber + 1)}>
              Next
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div>
      {/* Trigger button to open the first modal */}
      <Button variant="primary" onClick={() => openModal(1)}>
        Open Modal Sequence
      </Button>

      {/* Render modals dynamically */}
      {currentModal !== 0 && Array.from({ length: totalModals }, (_, index) => index + 1).map((modalNumber) =>
        renderModal(modalNumber)
      )}
    </div>
  );
}
