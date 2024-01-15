// components/Modal3.js
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import axios from 'axios';
import {
  ref,
  uploadBytesResumable,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from '@/hooks/firebase';
export default function RModalFour({ values, onInputChange, onFileChange,s_email }) {
  const  [uploadedFiles, setUploadedFiles]  = useState({
    certReg: null,
    certAddr: null,
    certDir: null,
  });
  const handleFileChange = (fileKey, e) => {
    const file = e.target.files[0];

    if (file) {
      // Update the state with the file object
      setUploadedFiles((prevFiles) => ({
        ...prevFiles,
        [fileKey]: file,
      }));
      
      // Notify parent component about the file change
      onInputChange(fileKey, file.name);
      onFileChange(fileKey, file);
    }
  };

  const handleSubmit = async () => {
    try {
      // Check if all files are uploaded
      const allFilesUploaded = Object.values(uploadedFiles).every((file) => file !== null);
  
      if (allFilesUploaded) {
        // Upload each file to Firebase Storage and get download URLs
        const downloadURLs = await Promise.all(
          Object.entries(uploadedFiles).map(async ([fileKey, file]) => {
            const imageRef = ref(storage, `religion_credentials/${file.name}`);
            const snapshot = await uploadBytesResumable(imageRef, file);
            return getDownloadURL(snapshot.ref);
          })
        );
  
        // Fetch user ID based on the provided email using Axios
        const response = await axios.get(`https://termly-api.onrender.com/api/user/${s_email}`);
        const userData = response.data;
  
        if (response.status === 200) {
          const userId = userData.user_id;
          console.log('User ID:', userId);
  
          // Create an object with form data fields including download URLs
          const formData = {
            user_id: userId,
            email: values.email,
            phoneNumber: values.phoneNumber,
            registrationNumber: values.registrationName,
            name: values.name,
            pos: values.pos,
            address: values.address,
            mobileNumber: values.mobileNumber,
            aName: values.aName,
            bName: values.bName,
            bNumber: values.aNumber,
            certReg: downloadURLs[0],
            certAddr: downloadURLs[1],
            certDir: downloadURLs[2],
            // Add other fields as needed
          };
  
          // Add download URLs to formData
          downloadURLs.forEach((url, index) => {
            formData[Object.keys(uploadedFiles)[index]] = url;
          });
  
          // Use Axios to post the JSON payload
          const registerResponse = await axios.post(
            'https://termly-api.onrender.com/api/registerReligionBody',
            formData
          );
  
          if (registerResponse.status >= 200 && registerResponse.status < 300) {
            toast.success('Religion Body registered successfully');
            console.log('Religion Body registered successfully:', registerResponse.data);
          } else {
            toast.error('Error registering Religion Body');
            console.error('Error registering Religion Body:', registerResponse.data.message);
          }
        } else {
          toast.error('Error fetching user ID');
          console.error('Error fetching user ID:', userData.message);
        }
      } else {
        console.error('Please upload all required files.');
      }
    } catch (error) {
      toast.error('Internal Server Error');
      console.error('Error:', error.message);
    }
  };
  

      

  return (
    <>
     <div className='w3-row'>
      <div className='w3-half w3-container'>
      <input
  type="file"
  className="form-control-file"
  id="fileUpload1"
  name="certReg"
  accept=".png, .pdf, .jpg, .jpeg, .webp"
  onChange={(e) => handleFileChange('certReg', e)}
/>

        <br></br>

        <div className="form-group">
          <label htmlFor="fileUpload2">Proof of Address (NEPA, NIMC, water or others)</label>
          <input
            type="file"
            className="form-control-file"
            id="fileUpload2"
            name="certAddr"
            accept=".png, .pdf, .jpg, .jpeg, .webp"
            onChange={(e) => handleFileChange('certAddr', e)}
          />
        </div>

        <br></br>
        <div className="form-group">
          <label htmlFor="fileUpload3">ID Card of Directors</label>
          <input
            type="file"
            className="form-control-file"
            id="fileUpload3"
            name="certDir"
            accept=".png, .pdf, .jpg, .jpeg, .webp"
            onChange={(e) => handleFileChange('certDir', e)}
          />
        </div>
      </div>
      <div className='w3-half w3-container'>
      <h1> Step 4 of 4</h1>
        <p>
        Submit your credentials for verification

        </p>
      </div>
    </div>
    <div className='w3-panel w3-center'>
       <Button variant="primary" onClick={handleSubmit}>Submit</Button>
    </div>
    </>
   
  );
};
