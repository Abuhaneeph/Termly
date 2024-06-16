'use client'

import { useState } from 'react'
import {  toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function Page() {

  const router = useRouter()
  const [email, setEmail] = useState('');
   const[isSending, setSending]= useState(false)
   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSending(true);
      const response = await axios.post('https://termly-api.onrender.com/api/request-password-reset', { email: email });
      if (response.status === 200 && response.data.success) {
        setSending(false);
        toast.success(response.data.message);
        router.push("/user/verify-password")
      } else {
        setSending(false);
        toast.error(response.data.message);
      }
    } catch (error) {
      setSending(false);
  console.error('Error requesting password reset:', error);
  if (error.response && error.response.data) {
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
  
    <h2 className="w3-center  w3-padding-bottom" >Reset Password</h2>
 

  <div className="form-label-group">
  <input
                type="email"
                id="inputEmail"
                className="form-control"
              placeholder="Email Address"
                
                autoFocus=""
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
    <label htmlFor="inputEmail">Email Address</label>
  </div>


  <button className="btn btn-lg btn-primary btn-block" type="submit">
    {!isSending ? 'Submit Now' : 'Sending Reset Token...'}
  </button>
 
 

 
</form>
</div>
          
        </>
    )
}