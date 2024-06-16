'use client'
import { useSearchParams } from 'next/navigation'
import { shortenEmail } from '@/hooks/constant'
import { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import {  toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function Page() {
 
  const router= useRouter()
  const [verificationCode, setVerificationCode] = useState('');
  const [Password, setPassword]=useState('')
  const [repeatPassword, setRepeatPassword]=useState('')
   const [isSending, setSending]= useState(false)
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!verificationCode) {
      toast.error('Insert Password Reset Token');
      return;
    }


  const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(Password);
  if(!isPasswordValid){
    toast.error('Password must contain at least 8 characters, an upper case letter, a lower case letter, and a number');
    return;
  }

  // Check if password and repeatPassword match
  if (Password !== repeatPassword) {
    // Passwords don't match, display an error toast
    toast.error('Passwords do not match');
    return;
  }
  
  try {
    setSending(true);
    const response = await axios.post('https://termly-api.onrender.com/api/reset-password', { token: verificationCode, newPassword: Password });
    if (response.data.success) {
      setSending(false);
      toast.success(response.data.message);
       router.push("/")
      // navigate to login page or show success message
    } else {
      setSending(false);
      toast.error(response.data.message);
    }
  } catch (error) {
    setSending(false);
    console.error('Error resetting password:', error);
    if (error.response) {
      toast.error(error.response.data.message);
    } else {
      toast.error('Internal Server Error');
    }
  }
  
  };
 
    return (

        <>
        
        <div className='w3-card-4 w3-white' style={{borderRadius:"40px 0 40px 0", margin: "70px"}}>
        
    <form className="form-signin" onSubmit={handleSubmit}>
  
    <h2 className="w3-center  w3-padding-bottom" >Verify Password</h2>


  <div className="form-label-group">
  <input
                type="text"
                id="inputVerificationCode"
                className="form-control"
                placeholder="Verification Code"
                
                autoFocus=""
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                required
              />
    <label htmlFor="inputVerificationCode">Verification Code</label>
  </div>
  <div className="form-label-group">
  <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="New Password"
                
                autoFocus=""
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
    <label htmlFor="inputPassword">New Password</label>
  </div>
  <div className="form-label-group">
  <input
                type="password"
                id="inputRepeatPassword"
                className="form-control"
                placeholder="Repeat Password"
                
                autoFocus=""
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
                required
              />
    <label htmlFor="inputRepeatPassword">Repeat Password</label>
  </div>

  <button className="btn btn-lg btn-primary btn-block" type="submit">
    {!isSending ? 'Set New Password' : 'Creating New Password...'}
  </button>

 
</form>


      
</div>
       
        </>
    )
}