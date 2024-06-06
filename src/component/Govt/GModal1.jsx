import React from 'react';
import InputForm from './InputForm';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function GModalOne({ values, onInputChange, s_email }) {
const[isSubmit, setSubmit]= useState(false)
const router= useRouter();
  const handleSubmit = async () => {
    if (!values.organisation || !values.email || !values.registrationNumber || !values.briefHistory) {
      alert("All fields are required");
      return;
    }

    try {
      setSubmit(true)
      // Fetch user ID based on the provided email using Axios
      const response = await axios.get(`https://termly-api.onrender.com/api/user/${s_email}`);
      const userData = response.data;

      if (response.status === 200) {
        const userId = userData.user_id;
        console.log('User ID:', userId);

        // Prepare the data for submission
        const requestData = {
          user_id: userId,
          organisation: values.organisation,
          email: values.email,
          reg_no: values.registrationNumber,
          history: values.briefHistory,
        };

        // Use Axios to post the data
        const registerResponse = await axios.post(
          'https://termly-api.onrender.com/api/createGovtBody',
          requestData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (registerResponse.status >= 200 && registerResponse.status < 300) {
          toast.success('GovtBody registered successfully');
          setSubmit(false)
          router.push('/dashboard/home_page');
          console.log('GovtBody registered successfully:', registerResponse.data);
          // Call the API to update account type after Govt registration
          const updateResponse = await axios.put(
            'https://termly-api.onrender.com/api/updateAccountType',
            {
              email: s_email,
              accountType: 3,
            }
          );

          console.log('Updated account type:', updateResponse.data);
        } else {
          setSubmit(false)
          toast.error('Error registering Govt Body');
          console.error('Error registering Govt Body:', registerResponse.data.message);
        }
      } else {
        toast.error('Error fetching user ID');
        console.error('Error fetching user ID:', userData.message);
        setSubmit(false)
      }
    } catch (error) {
      toast.error('Internal Server Error');
      console.error('Error:', error.message);
      setSubmit(false)
    }
  };

  return (
    <>
      <div className='w3-row'>
        <div className='w3-half w3-container'>
          <label>Name of Government Organisation</label>
          <InputForm
            label="Name of Organisation"
            placeholder="Name of Organisation"
            name="organisation"
            type="text"
            onChange={(e) => onInputChange('organisation', e.target.value)}
            value={values.organisation}
          />

          <label>Work Email</label>
          <InputForm
            label="Email"
            placeholder="E-mail"
            name="email"
            type="email"
            onChange={(e) => onInputChange('email', e.target.value)}
            value={values.email}
          />

          <label>Registration Number</label>
          <InputForm
            label="Registration Number"
            placeholder="Registration Number"
            name="registrationNumber"
            type="text"
            onChange={(e) => onInputChange('registrationNumber', e.target.value)}
            value={values.registrationNumber}
          />

          <label htmlFor="briefHistory">Brief History</label>
          <textarea
            id="briefHistory"
            name="briefHistory"
            placeholder="Brief History"
            onChange={(e) => onInputChange('briefHistory', e.target.value)}
            value={values.briefHistory}
            rows={6}
          />
        </div>

        <div className='w3-half w3-container'>
          <h1> Step 1 of 4</h1>
          <p>Enter your Organisation and Registration Number Details</p>
        </div>

        <div className='w3-panel w3-center'>
          <Button variant='primary' onClick={handleSubmit}>{!isSubmit ? 'Submit' : 'Submitting...'}</Button>
        </div>
      </div>
    </>
  );
}
