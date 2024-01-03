"use client";

import Link from 'next/link';
import { useState } from 'react';
import {toast} from 'react-toastify'
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function Home() {
    const router= useRouter()
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email);
    if (!isValidEmail) {
      // Display an error toast for invalid email format
      toast.error('Invalid email format');
      return;
    }
  
   
    try {
        // Make the API call to login
        const response = await axios.post('http://localhost:3000/api/loginOrganisation', formValues);
      
        if (response.status === 200) {
          if (response.data.success) {
            // Login successful
            toast.success(response.data.message);
            router.push(`/dashboard/admin_donor`);
            
            // Optionally, you can redirect the user or perform other actions on successful login
          } else {
            // Unauthorized - Incorrect email or password
            console.log(response.data);
            toast.error(response.data.message || 'Invalid email or password');
          }
        } else {
          // Other error scenarios
          console.log(response.data);
          toast.error(response.data.message || 'Login failed');
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Error during login:', error);
      
        if (error.response) {
          // The request was made and the server responded with a non-2xx status code
          console.log('Response data:', error.response.data);
          toast.error(error.response.data.message || 'Login failed');
        } else if (error.request) {
          // The request was made but no response was received
          console.log('No response received');
          toast.error('No response received during login');
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up the request:', error.message);
          toast.error('An error occurred during login');
        }
      }
      
      
       
}
        

    
  

  return (
    <>
      <div className='w3-container' id="About" style={{ paddingTop: '80px' }}>
        <div className='w3-row-padding '>
          <div className='w3-half w3-text-white w3-center'>
            <p style={{ fontWeight: "bolder", fontSize: "20px" }} className='w3-bold'>
              At termly <br></br>all institutional and<br></br> Individual financial<br></br> goals are achieved <br></br>within the targeted<br></br> time.
            </p>
            <p style={{ fontWeight: "bolder", fontSize: "20px" }}>Join Us.</p>
          </div>
          <div className='w3-half w3-container'>
            <div className='w3-card-4 w3-white' style={{ borderRadius: "40px 0 40px 0" }}>
              <form className="form-signin" style={{ paddingTop: "60px" }} onSubmit={handleSubmit}>
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required
                    autoFocus=""
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>

                <button className="btn btn-lg btn-primary btn-block" type="submit">
                  Login in
                </button>
                <a href="#" className='w3-right'>Forgot Password</a>
                <p className='mt-5 mb-3 w3-center'>Don&apos;t have an account</p>
                <Link href="/user/donation/register">
                  <button className="btn btn-lg btn-primary btn-block" type="button">
                    Sign up
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
