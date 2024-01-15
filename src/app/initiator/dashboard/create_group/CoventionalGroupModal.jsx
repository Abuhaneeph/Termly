import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import {toast} from 'react-toastify'

const ConventionalGroupModal = ({ showModal, handleClose }) => {
  const [groupName, setGroupName] = useState('');
  const [groupTenor, setGroupTenor] = useState('');
  const [groupAmount, setGroupAmount] = useState('');
  const [groupParticipants, setGroupParticipants] = useState('');
  const initiatorId= sessionStorage.getItem('initiatorID')
  const handleSave = async () => {
    try {
      // Validate form data
      if (!groupName || !groupTenor || !groupAmount || !groupParticipants) {
        alert("All fields are required");
        return;
      }

      // Create a group object with the form data
      const groupData = {
        initiator_id: initiatorId, // Replace with the actual initiator_id
        groupName,
        groupTenor: parseInt(groupTenor),
        groupAmount: parseInt(groupAmount),
        groupParticipants: parseInt(groupParticipants),
        groupType: 1, 
      };

      // Send an API request to create the group using axios
      const response = await axios.post('https://termly-api.onrender.com/api/createGroup', groupData);
      if (response.data.success) {
        // Group created successfully, you can handle the success scenario here
        toast.success(response.data.message);
        // Close the modal or perform any other necessary actions
      } else {
        // Handle the case where group creation failed
        if (response.data.message.includes("Reached the limit")) {
          // Handle the specific case where the group limit is reached
          toast.warning(response.data.message);
        } else {
          // Log the response data to the console for debugging
          console.error('Response data:', response.data);
          // Show a generic error message
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error('Error creating group:', error);

      // Log the response data to the console for debugging
      if (error.response) {
        console.error('Response data:', error.response.data);
      }

      // Show a generic error message
      toast.error('Internal Server Error');
    }
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Conventional Group Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="groupName">
            <Form.Label>Group Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter group name"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="groupTenor">
            <Form.Label>Group Tenor(in days)</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter group tenor"
              value={groupTenor}
              onChange={(e) => setGroupTenor(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="groupAmount">
            <Form.Label>Group Amount</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter group amount"
              value={groupAmount}
              onChange={(e) => setGroupAmount(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="groupParticipants">
            <Form.Label>Group Participants</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter group participants"
              value={groupParticipants}
              onChange={(e) => setGroupParticipants(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConventionalGroupModal;
