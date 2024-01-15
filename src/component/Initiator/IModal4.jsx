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
export default function IModal4({ onUserIdChange ,values, onInputChange, onFileChange,s_email,initiatorReg,onInitiatorRegChange }) {
  const  [uploadedFiles, setUploadedFiles]  = useState({
    certPass: null,
    
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
    console.log(values);
     // Upload image to Firebase Storage
     const imageRef = ref(storage, "initiators_passports/" + uploadedFiles.certPass.name);
   
  
     const snapshot = await uploadBytesResumable(imageRef, uploadedFiles.certPass);
 
     // Get the download URL after successful upload
     const downloadURL = await getDownloadURL(snapshot.ref);
     console.log('File available at', downloadURL);
  
    try {
      // Fetch user ID based on the provided email using Axios
      const response = await axios.get(`https://termly-api.onrender.com/api/user/${s_email}`);
      const userData = response.data;
  
      if (response.status === 200) {
        const userId = userData.user_id;
        console.log('User ID:', userId);
        onUserIdChange(userId);
  
        const requestData = {
          user_id: userId,
          AddressHome: values.AddressHome,
          AddressWork: values.AddressWork,
          BVN: values.BVN,
          Qualification: values.Qualification,
          aNumber: values.aNumber,
          bCard: values.bCard,
          bName: values.bName,
          birth: values.birth,
          certPass: downloadURL, // Assuming certPass is a file
          email: values.email,
          employmentChecked: values.employmentChecked,
          fName: values.fName,
          femaleChecked: values.femaleChecked,
          idChecked: values.idChecked,
          idNumber: values.idNumber,
          kAddressHome: values.kAddressHome,
          kfName: values.kfName,
          kfemaleChecked: values.kfemaleChecked,
          klName: values.klName,
          kmName: values.kmName,
          kmaleChecked: values.kmaleChecked,
          kphoneNumber: values.kphoneNumber,
          lName: values.lName,
          mName: values.mName,
          maleChecked: values.maleChecked,
          maritalChecked: values.maritalChecked,
          monthlyChecked: values.monthlyChecked,
        };
  
        // Use Axios to post the data
        const registerResponse = await axios.post(
          'https://termly-api.onrender.com/api/createInitiator',
          requestData,
          
        );
  
        if (registerResponse.status >= 200 && registerResponse.status < 300) {
          toast.success('Initiator registered successfully');
          onInitiatorRegChange(true);
          console.log('Initiator registered successfully:', registerResponse.data);
        } else {
          toast.error('Error registering Initiator');
          console.error('Error registering Initiator:', registerResponse.data.message);
        }
      } else {
        toast.error('Error fetching user ID');
        console.error('Error fetching user ID:', userData.message);
      }
    } catch (error) {
      toast.error('Internal Server Error');
      console.log(values.certReg);
      console.error('Error:', error.message);
    }
  };
  
      

  return (
    <>
     <div className='w3-row'>
      <div className='w3-half w3-container'>
  

      

        <div className="form-group">
          <label htmlFor="fileUpload2">Upload your Passport photograph</label>
          <input
            type="file"
            className="form-control-file"
            id="fileUpload2"
            name="certPass"
            accept=".png, .pdf, .jpg, .jpeg, .webp"
            onChange={(e) => handleFileChange('certPass', e)}
          />
        </div>

        <br></br>
       
      </div>
      <div className='w3-half w3-container'>
      <h1> Step 4 of 4</h1>
        <p>
        Upload your Passport

        </p>
      </div>
    </div>
    <div className='w3-panel w3-center'>
       <Button variant="primary" onClick={handleSubmit}>Submit</Button>
    </div>
    </>
   
  );
};
