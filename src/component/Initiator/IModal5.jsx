// components/Modal2.js
'use client'
import React from 'react';
import InputForm from './InputForm';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
var sessionStorage = require('sessionstorage');


export default  function IModal5  ({userId, values, onInputChange , s_email})  {
  sessionStorage.setItem('userId', userId);

  return (
    <>
    
    <div className='w3-row-padding'>
        <div className='w3-half w3-container'>
  <p>Thank you for your payment, your registration gives you access to: </p>
  <p>1. You can create a limited number of 4 contribution groups depend on tenor and amount chosen </p>
  <p>2. You have access to only 4 monthly USD online sales at week intervals </p>
  <p>3. You can always access and monitor activities of your groups and post announcement to group members </p>
  <p>4. Your transaction password will be deactivated a s soon as the validity of your groups expire and all payments are recovered and disbursed</p>      
   
      
     
            
    </div>
    <div className='w3-half w3-center w3-container'>
        
        <p>
       Thanks for your Payment

       <Link href={`/initiator/dashboard/Home`}>
<Button variant='primary'>Proceed to Initiator Dashboard</Button>
</Link>
       




        </p>

      </div>
    </div>
   
    </>
  );
};

