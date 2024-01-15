// components/Modal5.js
import React , {useState}from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import {toast} from 'react-toastify'

export default function Modal5  ({ values, onInputChange, onFileChange ,s_email })  {
  const [uploadedFiles, setUploadedFiles] = useState({
    certInc: null,
    certMem: null,
    certAddr: null,
    certID: null,
  });

  const handleFileChange = (e, fileKey) => {
    const file = e.target.files[0];
    if (file) {
      // Update the state with the file object
      setUploadedFiles((prevFiles) => ({
        ...prevFiles,
        [fileKey]: file,
      }));
      onInputChange(fileKey, file.name);
      onFileChange(fileKey, file);
    }
  };
  const handleSubmit = async () => {
    const allFilesUploaded = Object.values(uploadedFiles).every((file) => file !== null);
  
    if (allFilesUploaded) {
      try {
        // Create FormData object and append files to it
        const formData = new FormData();
        Object.entries(uploadedFiles).forEach(([key, file]) => {
          formData.append(key, file);
        });
  
        // Fetch user ID based on the provided email using Axios
        const response = await axios.get(`http://localhost:3000/api/user/${s_email}`);
        const userData = response.data;
  
        if (response.status === 200) {
          const userId = userData.user_id;
          console.log('User ID:', userId);
  
          // Append other form data fields
          formData.append('user_id', userId);
          formData.append('accountName', values.accountName);
          formData.append('bankName', values.bankName);
          formData.append('BVN', values.BVN);
          formData.append('businessEmail', values.businessEmail);
          formData.append('businessName', values.businessName);
          formData.append('certAddr', values.certAddr);
          formData.append('certID', values.certID);
          formData.append('certInc', values.certInc);
          formData.append('certMem', values.certMem);
          formData.append('city', values.city);
          formData.append('fName', values.fName);
          formData.append('gender', values.gender);
          formData.append('lName', values.lName);
          formData.append('localGovt', values.localGovt);
          formData.append('mName', values.mName || null);
          formData.append('mobileNumber', values.mobileNumber);
          formData.append('NIN', values.NIN);
          formData.append('phoneNumber', values.phoneNumber);
          formData.append('registeredNumber', values.registeredNumber);
          formData.append('street', values.street);
          formData.append('birthDate', values.birthDate);
          formData.append('llcChecked', values.llcChecked ? 1 : 0);
          formData.append('registrationChecked', values.llcChecked ? 1 : 0);
          formData.append('street2', values.street2 || null);
          formData.append('city2', values.city2 || null);
          formData.append('localGovt2', values.localGovt2 || null);
          
          // Add other fields as needed
  
          // Use Axios to post the FormData
          const registerResponse = await axios.post('http://localhost:3000/api/registerProfitOrganisation', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
  
          if (registerResponse.status >= 200 && registerResponse.status < 300) {
            toast.success("Profit Organization created succesfully")
            console.log('Profit Organization registered successfully:', registerResponse.data);
          } else {
            toast.error("Error registering Profit Organization")
            console.error('Error registering Profit Organization:', registerResponse.data.message);
          
          }
        } else {
          console.error('Error fetching user ID:', userData.message);
        }
      } catch (error) {
        console.error('Error:', error.message);
      }
    } else {
      console.error('Please upload all required files.');
    }
  };
  
    return (
        <>
       
    <div className='w3-row'>
        <div className='w3-half w3-container'>

        
      {/* ... Content for Address 1 ... */}
     
      <div className="form-group">
        <label htmlFor="fileUpload">Certificate of Incorporation</label>
        <input
          type="file"
          className="form-control-file"
          id="fileUpload"
          name="certInc"
          accept=".png, .pdf, .jpg, .jpeg, .webp"
          onChange={(e) => handleFileChange(e, 'certInc')}
          
          
        />
      </div>
       <br></br>
       <div className="form-group">
        <label htmlFor="fileUpload">Memorandum & Article of Association/Form A</label>
        <input
          type="file"
          className="form-control-file"
          id="fileUpload"
          name="certMem"
          accept=".png, .pdf, .jpg, .jpeg, .webp"
          onChange={(e) => handleFileChange(e, 'certMem')}
          
        />
      </div>
      <br></br>
      <div className="form-group">
        <label htmlFor="fileUpload">3. Proof of Address</label>
        <input
          type="file"
          className="form-control-file"
          id="fileUpload"
          name="certAddr"
          accept=".png, .pdf, .jpg, .jpeg, .webp"
          onChange={(e) => handleFileChange(e, 'certAddr')}
          
        />
      </div>

      <br></br>
      <div className="form-group">
        <label htmlFor="fileUpload">Scan all ID’s in one PDF doc before upload</label>
        <input
          type="file"
          className="form-control-file"
          id="fileUpload"
          name="certID"
          accept=".png, .pdf, .jpg, .jpeg, .webp"
          onChange={(e) => handleFileChange(e, 'certID')}
          
        />
      </div>
      
  
     
            
    </div>
    <div className='w3-half w3-container'>
        <h1> Step 5 of 5</h1>
        <p>1. The scanned copy of your document should show the edges, be clear and have readable content
</p>
<p>2. Do not scan or upload documents that are laminated.
</p>
<p>
3. The accepted file types are PDF, JPG, PNG or WebP.

</p>
<p>
4. If a document has more than 1 page, it should be scanned together as a multi-page PDF file.

</p>

      </div>
      
    </div>
    <div className='w3-center'>
            <Button variant='primary' onClick={handleSubmit}>Submit</Button>
      </div>
    </>
  );
};

