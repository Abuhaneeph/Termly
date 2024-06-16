'use client'
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import ConventionalGroup from './ConventionalGroup';
import MLMGroup from './MLMGroup';
import ConventionalGroupModal from './CoventionalGroupModal';
import MLMGroupModal from './MLMGroupModal';
import './page.css'
import NavWrapper from '../component/NavWrapper';
import GroupCard from './GroupCard';
import { Modal,  Form } from 'react-bootstrap';
var sessionStorage = require('sessionstorage');
export default function Page() {
  const [showComponents, setShowComponents] = useState(false);
  const [showConventionalModal, setShowConventionalModal] = useState(false);
  const [showMLMModal, setShowMLMModal] = useState(false);
  const initiatorId= sessionStorage.getItem('initiatorID')

  const groups = [
    { groupNumber: 1, groupName: 'Adashi Group', completedContributors: 4, maxContributors: 10 },
    { groupNumber: 2, groupName: 'MLM Group', completedContributors: 4, maxContributors: 10 },
    { groupNumber: 3, groupName: 'MLM Group', completedContributors: 4, maxContributors: 10 },
    
  ];

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
    <div id="wrapper">
      <NavWrapper />
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="w3-container w3-margin-top">
            <h1>Create Group</h1>
            <Button className="w3-margin-bottom" variant="primary" onClick={handleCreateGroupClick}>
              Create Group
            </Button>

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

            <ConventionalGroupModal showModal={showConventionalModal} handleClose={handleModalClose} />
            <MLMGroupModal showModal={showMLMModal} handleClose={handleModalClose} />

            <div className="row row-cols-1 row-cols-md-1 row-cols-xl-2">
           
                {groups.map((group, index) => (
                  <GroupCard
                    key={index}
                    className={`w3-margin-bottom-64 ${index === 2 ? 'custom-class' : ''}`}
                    
                    groupNumber={group.groupNumber}
                    groupName={group.groupName}
                    completedContributors={group.completedContributors}
                    maxContributors={group.maxContributors}
                  />
                ))}

            </div>

          </div>
        </div>
      </div>
    </div>
  </>
  );
}
