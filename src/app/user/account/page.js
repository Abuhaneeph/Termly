'use client'
import React, { useState } from 'react';

import { Modal, Button } from 'react-bootstrap';
import { usePaystackPayment } from 'react-paystack';
import { useSearchParams } from 'next/navigation';
import {toast} from 'react-toastify'
import axios from 'axios';
import Profit from '@/component/Profit/Profit';
import Ngo from '@/component/Ngo/Ngo';
import Political from '@/component/PoliticalBody/PoliticalBody';
import Religion from '@/component/ReligionBody/ReligionBody';
import Govt from '@/component/Govt/Govt';
import Initiator from '@/component/Initiator/Initiator';
export default function Page() {
  const searchParams = useSearchParams()
  const [currentModal, setCurrentModal] = useState(1);
  const [selectedOrganizationType, setSelectedOrganizationType] = useState(null);


  const handleOrganizationTypeChange = (organizationType) => {
    setSelectedOrganizationType(organizationType);
  };

  const renderOrganizationModals = () => {
    switch (selectedOrganizationType) {
      case 'ngo':
        return <Ngo openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={4} email={EmailAddress} />;
      case 'political':
        return <Political openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={4} email={EmailAddress} />;
        case 'religion':
          return <Religion openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={5} email={EmailAddress} />;
          case 'govt':
            return <Govt openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={1} email={EmailAddress} />;
      default:
        return null;
    }
  };
  const handleOrganizationSubmit = () => {
    // Perform any additional actions before rendering the modals
    // ...

    // Render modals dynamically based on the selected organization type
    if (selectedOrganizationType === 'ngo' || selectedOrganizationType === 'political') {
      renderOrganizationModals();
    }
  };

  const organizationTypes = [
    { id: 'ngo', label: 'NGO' },
   // { id: 'political', label: 'Political Body' },
    {id: 'religion', label: 'Religion Body'},
    {id: 'govt', label: 'Govt'},
  ];




  const openModal = (modalNumber) => {
    setCurrentModal(modalNumber);
  };

  const closeModal = () => {
    setCurrentModal(0);
  };
 
  const EmailAddress = searchParams.get('email')

  const config = {
    reference: (new Date()).getTime().toString(),
    email: EmailAddress,
    amount: 20000, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_667df618507a40ab04e6359db22c35e11c29c688',
};
const initializePayment = usePaystackPayment(config);




 
  const onInitiatorSuccess = async () => {
    try {
      // Call the API to update the amount raised
      await axios.put(`http://localhost:3000/api/updateAccountType`, { email: EmailAddress,accountType: 1 });
  
     
    } catch (error) {
      console.error("Error updating amount raised:", error);
    }
  
  };
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    onInitiatorSuccess()
    toast.success("Initiator Created Successfully"); 
   };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
  }
  const handleInitiator=()=>{
    initializePayment(onSuccess, onClose)

  }
    return (

<>
<div>
<div className="w3-center w3-row-padding" id="account" style={{marginTop:"50px"}}>
 
 <div className="w3-third  w3-padding">
 <div className='w3-card-4 w3-white w3-padding w3-center w3-border-blue' style={{borderRadius:"40px 0 40px 0"}}>
<h2>Individual User
</h2>
<li><b>Initiator</b></li>
<p>For individuals creating groups
</p>
<h6>Requirements</h6>
<p>1. Government ID</p>
<p>2. BVN Number</p>
<p>3. Proof of Address</p>
<Button variant="primary" onClick={handleInitiator}>
        Submit Now
      </Button>
 </div>
 </div>
 
 <div className="w3-third w3-padding">
 <div className='w3-card-4 w3-white w3-padding w3-center' style={{borderRadius:"40px 0 40px 0"}}>
<h2>Registered Profit Organization


</h2>
<p>For companies seeking to raise capital via crowd funding 


</p>
<h6>Requirements</h6>
<p>1. Registration Cert
</p>
<p>2. BVN & ID Directors</p>
<p>3. Memat & Articles</p>
<p>4. Proof of Address</p>
<p>5. Memo of guidance</p>
<Profit openModal={openModal} closeModal={closeModal} currentModal={currentModal} totalModals={5} email={EmailAddress} />
 </div>
 </div>

 <div className="w3-third w3-padding">
 <div className='w3-card-4 w3-white w3-padding w3-center' style={{borderRadius:"40px 0 40px 0"}}>
<h2>Non-Profit Organization


</h2>
<p>For charity organizations, religious bodies & action groups



</p>
<h6>Choose the type of Organisation and Submit </h6>
{organizationTypes.map((type) => (
            <div className="form-check" key={type.id}>
              <input
                className="form-check-input"
                type="radio"
                id={type.id}
                name="organizationType"
                onChange={() => handleOrganizationTypeChange(type.id)}
                checked={selectedOrganizationType === type.id}
                required
              />
              <label className="form-check-label" htmlFor={type.id}>
                {type.label}
              </label>
            </div>
          ))}
          

          {/* Render modals dynamically based on the selected organization type */}
          {renderOrganizationModals()}
     

 </div>
 </div>
</div>
      

    </div>
<div >

</div>

</>
    )
}