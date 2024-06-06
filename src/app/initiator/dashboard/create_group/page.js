'use client'
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ConventionalGroup from './ConventionalGroup';
import MLMGroup from './MLMGroup';
import ConventionalGroupModal from './CoventionalGroupModal';
import MLMGroupModal from './MLMGroupModal';
import './page.css'
var sessionStorage = require('sessionstorage');
export default function Page() {
  const [showComponents, setShowComponents] = useState(false);
  const [showConventionalModal, setShowConventionalModal] = useState(false);
  const [showMLMModal, setShowMLMModal] = useState(false);
  const initiatorId= sessionStorage.getItem('initiatorID')
console.log(initiatorId)
  const handleCreateGroupClick = () => {
    // Toggle the state when the "Create Group" button is clicked
    setShowComponents(!showComponents);
  };

  const handleConventionalModalOpen = () => {
    setShowConventionalModal(true);
  };

  const handleMLMModalOpen = () => {
    setShowMLMModal(true);
  };

  const handleModalClose = () => {
    setShowConventionalModal(false);
    setShowMLMModal(false);
  };

  return (
    <>
      <div style={{ marginLeft: '20%', overflowY: 'auto', height: '80vh', paddingBottom: '50px' }} id="donorContent">
        <div className="w3-container">
          <h1>Create Group</h1>
          <Button variant='primary' onClick={handleCreateGroupClick}>
            Create Group
          </Button>

          {/* Render both components when the button is clicked */}
          {showComponents && (
            <>
              <ConventionalGroup
                checked={showComponents}
                onChange={() => {
                  setShowComponents(!showComponents);
                  handleConventionalModalOpen();
                }}
              />
              <MLMGroup
                checked={showComponents}
                onChange={() => {
                  setShowComponents(!showComponents);
                  handleMLMModalOpen();
                }}
              />
            </>
          )}

          {/* Render Modals for Conventional and MLM Groups */}
          <ConventionalGroupModal showModal={showConventionalModal} handleClose={handleModalClose} />
          <MLMGroupModal showModal={showMLMModal} handleClose={handleModalClose} />
          <div className="container w3-margin-top">
  <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3">
    <div className="col">
      <div className="card radius-10 border-start border-0 border-3 border-info">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <p className="mb-0 text-secondary">Group 1</p>
              <h4 className="my-1 text-info">Adashi Group</h4>
              <p className="mb-0 font-13">4 Completed  Contributors</p>
              <br></br>
              <p className="mb-0 font-13">10 Maximum Contributors</p>
             <div className='w3-center w3-margin-top'>
             <Button variant='primary'>Check Group Members</Button>
             </div>
              
            </div>
            <div className="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
              <i className="fa fa-users" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card radius-10 border-start border-0 border-3 border-info">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <p className="mb-0 text-secondary">Group 2</p>
              <h4 className="my-1 text-info">MLM Group</h4>
              <p className="mb-0 font-13">4 Completed  Contributors</p>
              <br></br>
              <p className="mb-0 font-13">10 Maximum Contributors</p>
             <div className='w3-center w3-margin-top'>
             <Button variant='primary'>Check Group Members</Button>
             </div>
              
            </div>
            <div className="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
              <i className="fa fa-users" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card radius-10 border-start border-0 border-3 border-info">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <p className="mb-0 text-secondary">Group 3</p>
              <h4 className="my-1 text-info">MLM Group</h4>
              <p className="mb-0 font-13">4 Completed  Contributors</p>
              <br></br>
              <p className="mb-0 font-13">10 Maximum Contributors</p>
             <div className='w3-center w3-margin-top'>
             <Button variant='primary'>Check Group Members</Button>
             </div>
              
            </div>
            <div className="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
              <i className="fa fa-users" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card radius-10 border-start border-0 border-3 border-info">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <p className="mb-0 text-secondary">Group 4</p>
              <h4 className="my-1 text-info">Adashe Group</h4>
              <p className="mb-0 font-13">4 Completed  Contributors</p>
              <br></br>
              <p className="mb-0 font-13">10 Maximum Contributors</p>
             <div className='w3-center w3-margin-top'>
             <Button variant='primary'>Check Group Members</Button>
             </div>
              
            </div>
            <div className="widgets-icons-2 rounded-circle bg-gradient-scooter text-white ms-auto">
              <i className="fa fa-users" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



        </div>
      </div>
    </>
  );
}
