// components/Modal5.js
import React , {useState}from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import {toast} from 'react-toastify'
import { storage } from '@/hooks/firebase';
import {
  ref,
  uploadBytesResumable,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
export default function ProfitModalFive  ({ values, onInputChange, onFileChange ,s_email })  {
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
    try {
      // Check if all files are uploaded
      const allFilesUploaded = Object.values(uploadedFiles).every((file) => file !== null);
  
      if (allFilesUploaded) {
        // Upload each file to Firebase Storage and get download URLs
        const downloadURLs = await Promise.all(
          Object.entries(uploadedFiles).map(async ([fileKey, file]) => {
            const imageRef = ref(storage, `profit_credentials/${file.name}`);
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
            accountName: values.accountName,
            bankName: values.bankName,
            BVN: values.BVN,
            businessEmail: values.businessEmail,
            businessName: values.businessName,
            certAddr: downloadURLs[2], // Use download URL for certAddr
            certID: downloadURLs[3], // Use download URL for certID
            certInc: downloadURLs[0], // Use download URL for certInc
            certMem: downloadURLs[1], // Use download URL for certMem
            city: values.city,
            fName: values.fName,
            gender: values.gender,
            lName: values.lName,
            localGovt: values.localGovt,
            mName: values.mName || null,
            mobileNumber: values.mobileNumber,
            NIN: values.NIN,
            phoneNumber: values.phoneNumber,
            registeredNumber: values.registeredNumber,
            street: values.street,
            birthDate: values.birthDate,
            llcChecked: values.llcChecked ? 1 : 0,
            registrationChecked: values.llcChecked ? 1 : 0,
            street2: values.street2 || null,
            city2: values.city2 || null,
            localGovt2: values.localGovt2 || null,
            // Add other fields as needed
          };
  
          // Add download URLs to formData
          downloadURLs.forEach((url, index) => {
            formData[Object.keys(uploadedFiles)[index]] = url;
          });
  
          // Use Axios to post the JSON payload
          const registerResponse = await axios.post('https://termly-api.onrender.com/api/registerProfitOrganisation', formData);
  
          if (registerResponse.status >= 200 && registerResponse.status < 300) {
            toast.success('Profit Organization created successfully');
            console.log('Profit Organization registered successfully:', registerResponse.data);
          } else {
            toast.error('Error registering Profit Organization');
            console.error('Error registering Profit Organization:', registerResponse.data.message);
          }
        } else {
          console.error('Error fetching user ID:', userData.message);
        }
      } else {
        console.error('Please upload all required files.');
      }
    } catch (error) {
      console.error('Error:', error.message);
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

