// components/Modal1.js
import React from 'react';
import InputForm from './InputForm';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
export default function PModalOne ({ values, onInputChange,s_email })  {

  const router= useRouter()
  const[isSubmit,setSubmit]=useState(false)
  const handleSubmit = async () => {
    if (!values.Name || !values.regName || !values.email ) {
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
          organisation_name: values.Name,
          reg_name: values.regName,
          email: values.email,
        
          
        };

        // Use Axios to post the data
        const registerResponse = await axios.post(
          'https://termly-api.onrender.com/api/createPoliticalBody',
          requestData,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (registerResponse.status >= 200 && registerResponse.status < 300) {
          toast.success('Political Body registered successfully');
          console.log('Political Body registered successfully:', registerResponse.data);
          const updateResponse = await axios.put(
            'https://termly-api.onrender.com/api/updateAccountType',
            {
              email: s_email,
              accountType: 3,
            }
          );

          console.log('Updated account type:', updateResponse.data);
          setSubmit(false)
          router.push('/dashboard/home_page');
        } else {
          toast.error('Error registering Govt Body');
          setSubmit(false)
          console.error('Error registering Govt Body:', registerResponse.data.message);
        }
      } else {
        toast.error('Error fetching user ID');
        setSubmit(false)
        console.error('Error fetching user ID:', userData.message);
      }
    } catch (error) {
      toast.error('Internal Server Error');
      setSubmit(false)
      console.error('Error:', error.message);
    }
  };
  return (
    <>
   
    <div className='w3-row'>
      {/* ... Content for Modal 1 ... */}
      <div className='w3-half w3-container'>

     
      

     
      <label>Name of Organisation</label>
      <InputForm
        label="Name"
        placeholder="Name"
        name="Name"
        type="text"
        onChange={(e) => onInputChange('Name', e.target.value)}
        value={values.Name}
      />
       <label>Registration Number</label>
      <InputForm
        label="Registration Number"
        placeholder="Registration Number"
        name="regName"
        type="text"
        onChange={(e) => onInputChange('regName', e.target.value)}
        value={values.regName}
      />
         <label>E-mail</label>
      <InputForm
        label="email"
        placeholder="E-mail"
        name="email"
        type="email"
        onChange={(e) => onInputChange('email', e.target.value)}
        value={values.email}
      />
       </div>
      <div className='w3-half w3-container'>
        <h1> Step 1 of 1</h1>
        <p>
        Enter your Organisation Details

        </p>

      </div>
    </div>
    <div className='w3-panel we3-center'>
  <Button variant="primary" onClick={handleSubmit}>{!isSubmit ? 'Submit' : 'Submitting...'}</Button>
    </div>
    </>
  );
};

