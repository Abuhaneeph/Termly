// components/Modal3.js
import React, { useState } from 'react';

export default function Modal3({ values, onInputChange, onFileChange }) {
  const [fileValues, setFileValues] = useState({
    certReg: null,
    certAddr: null,
    certDir: null,
  });

  const handleFileInputChange = (name, event) => {
    const file = event.target.files[0];
    // Store just the file name
    const fileName = file ? file.name : null;
    
    setFileValues((prevFileValues) => ({
      ...prevFileValues,
      [name]: fileName,
    }));

    onFileChange(name, fileName);
  };


  return (
    <div className='w3-row'>
      <div className='w3-half w3-container'>
        <div className="form-group">
          <label htmlFor="fileUpload1">Upload Cert of Registration</label>
          <input
            type="file"
            className="form-control-file"
            id="fileUpload1"
            name="certReg"
            accept=".png, .pdf, .jpg, .jpeg, .webp"
            onChange={(e) => handleFileInputChange('certReg', e)}
          />
        </div>
        <br></br>

        <div className="form-group">
          <label htmlFor="fileUpload2">Proof of Address (NEPA, NIMC, water or others)</label>
          <input
            type="file"
            className="form-control-file"
            id="fileUpload2"
            name="certAddr"
            accept=".png, .pdf, .jpg, .jpeg, .webp"
            onChange={(e) => handleFileInputChange('certAddr', e)}
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
            onChange={(e) => handleFileInputChange('certDir', e)}
          />
        </div>
      </div>
      <div className='w3-half w3-container'>
      <h1> Step 3 of 4</h1>
        <p>
        Submit your credentials for verification

        </p>
      </div>
    </div>
  );
};
