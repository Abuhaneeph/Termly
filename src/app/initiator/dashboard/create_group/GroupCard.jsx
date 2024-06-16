import React from 'react';
import { Button } from 'react-bootstrap';

const GroupCard = ({ groupNumber, groupName, completedContributors, maxContributors }) => {
  return (
    <div className="col">
      <div className="card radius-10 border-start border-0 border-3 border-info">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <div>
              <p className="mb-0 text-secondary">Group {groupNumber}</p>
              <h4 className="my-1 text-info">{groupName}</h4>
              <p className="mb-0 font-13">4 Completed Contributors</p>
              <p className="mb-0 font-13">{maxContributors} Maximum Contributors</p>
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
  );
};

export default GroupCard;
