// `app/dashboard/page.js` is the UI for the `/dashboard` URL
'use client';
import { useState } from 'react';
import {  toast } from 'react-toastify';
import axios from 'axios';
import { hashPassword } from '@/hooks/hashPassword';
 import { useRouter } from 'next/navigation'

// ...




export default function Page() {

   const router = useRouter()

  const[isRegistering,setRegistering] = useState(false)
  const [formValues, setFormValues] = useState({
    state: '',
    firstName: '',
    middleName: '',
    lastName: '',
    organization: '',
    email: '',
    password: '',
    repeatPassword: '',
    termsChecked: false,
  });
  function generateRandomDigits() {
    const min = 100000; // Minimum value for a 6-digit number
    const max = 999999; // Maximum value for a 6-digit number
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    // Validate email format
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email);
    if (!isValidEmail) {
      // Display an error toast for invalid email format
      toast.error('Invalid email format');
      return;
    }
  
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(formValues.password);
    if(!isPasswordValid){
      toast.error('Password must contain at least 8 characters, an upper case letter, a lower case letter, and a number');
      return;
    }
 
    // Check if password and repeatPassword match
    if (formValues.password !== formValues.repeatPassword) {
      // Passwords don't match, display an error toast
      toast.error('Passwords do not match');
      return;
    }
    const randomDigits = generateRandomDigits();

  const hashedPassword = await hashPassword(formValues.password)
 
    const credentials = {
      s_email: formValues.email,
      s_password: hashedPassword,
      code: randomDigits,
      s_state: formValues.state,
      f_name: formValues.firstName,
      l_name: formValues.lastName,
      m_name: formValues.middleName,
      s_organization: formValues.organization,
    };
   
    try {
      setRegistering(true);
    
      // Make the POST request to registerOrganisation endpoint
      const response = await axios.post('http://localhost:3000/api/createUser', credentials);
    
      if (response.status === 200) {
        if (response.data.success) {
          // Registration successful
          toast.success(response.data.message);
    
          // Send verification email
          const sendEmailResponse = await axios.post('http://localhost:3000/api/sendEmail', {
            to: formValues.email,
            verification_code: randomDigits,
          });
    
          if (sendEmailResponse.status === 200) {
            // Email sent successfully
            toast.info(sendEmailResponse.data.message || 'Verification email sent successfully');
            router.push(`/user/verify-email?email=${formValues.email}`);
          } else {
            // Email sending failed
            toast.error(sendEmailResponse.data.message || 'Failed to send verification email');
          }
    
          // Optionally, you can redirect the user to another page or handle it as needed
          // For example, redirect to the dashboard page
     
        } else {
          // Registration failed
          toast.error(response.data.message || 'Registration failed');
        }
      } else {
        // Handle other status codes if needed
        toast.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      toast.error('User alredy registered with this email');
    } finally {
      setRegistering(false);
    }
    
  
  

  };
  

  return (
    <>
    
      <div
        className="w3-container"
        style={{
          display: 'block',
          margin: 'auto',
          paddingTop: '80px',
          marginBottom: '300px',
        }}
      >
        <div className="w3-row-padding ">
          <div className="w3-half w3-text-white w3-center" id="Reg">
            <h1>Start Registration here</h1>
            <p style={{ paddingBottom: '20px' }}>
              <input
                checked
                type="checkbox"
                id="generate"
                name="generate"
                value="generate"
              />{' '}
              Generate funding for your business
              <br></br>idea through our crowd funding
              <br></br> platform
            </p>
            <p style={{ paddingBottom: '20px' }}>
              <input
                checked
                type="checkbox"
                id="adashe"
                name="adashe"
                value="adashe"
              />{' '}
              Take advantage of technology to facilitate
              <br></br> your contribution business popularly
              <br></br> known as ADASHE
            </p>
            <p style={{ paddingBottom: '20px' }}>
              <input
                checked
                type="checkbox"
                id="communal"
                name="communal"
                value="communal"
              />{' '}
              Promoting communal activities against
              <br></br> community of individualism creating
              <br></br> wealth and evenly distributing same.
            </p>
          </div>
          <div className="w3-half w3-container">
            <div
              className="w3-card-4 w3-white"
              style={{ borderRadius: '40px 0 40px 0' }}
            >
              <form
                className="form-signin"
                style={{ paddingTop: '60px' }}
                onSubmit={handleSubmit}
              >
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputState"
                    className="form-control"
                    onChange={handleInputChange}
                    placeholder="State"
                    name="state"
                    required
                  />
                  <label htmlFor="inputState">State</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputFirstName"
                    className="form-control"
                    onChange={handleInputChange}
                    placeholder="First Name"
                    name="firstName"
                    required
                  />
                  <label htmlFor="inputFirstName">First Name</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputMiddleName"
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Middle Name"
                    name="middleName"
                  />
                  <label htmlFor="inputMiddleName">
                    Middle Name (optional)
                  </label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputLastName"
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    required
                  />
                  <label htmlFor="inputLastName">Last Name</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputOrganization"
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Organization"
                    name="organization"
                  />
                  <label htmlFor="inputOrganization">
                    Organization (optional)
                  </label>
                </div>
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    onChange={handleInputChange}
                    placeholder="Email address"
                    name="email"
                    required=""
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    required
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    id="repeatPassword"
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Repeat Password"
                    name="repeatPassword"
                    required
                  />
                  <label htmlFor="repeatPassword">Repeat Password</label>
                </div>

                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                >
                  {isRegistering ? 'Registering User...' : 'Register Now'}
                </button>

                <p className="w3-panel w3-center">
                  <input
                    type="checkbox"
                    id="checked"
                    name="termsChecked"
                    onChange={handleInputChange}
                    value={formValues.termsChecked}
                    required
                  />{' '}
                  I acknowledge that I have read and do hereby accept the terms
                  and conditions in the Termlys Terms and Conditions and
                  Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
