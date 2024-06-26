'use client'
import { useSearchParams } from 'next/navigation'
import { shortenEmail } from '@/hooks/constant'
import { useState } from 'react'
import {  toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
export default function Page() {
  const router= useRouter()
  const searchParams = useSearchParams()
 
  const EmailAddress = searchParams.get('email')
  
  const [verificationCode, setVerificationCode] = useState('');
   
  const [isVerify, setVerify]= useState(false)

   const handleSubmit = async(e) => {
    e.preventDefault();
    if (verificationCode.length !== 6) {
      toast.error('Verification code must be six digits');
      return;
    }

    try {
      setVerify(true)
      // Call the /verifyEmail API with Axios
      const response = await axios.post('https://termly-api.onrender.com/api/verifyEmail', {
        email: EmailAddress,
        verificationCode: verificationCode,
      });
  
     // Check the response success property
if (response.data.success) {
  // Email verification successful
  setVerify(false)
  toast.success(response.data.message);
  router.push(`/user/accounts?email=${EmailAddress}`);
} else {
  // Email verification failed
  setVerify(false)
  toast.error(response.data.message);
 

} 
    } catch (error) {
      // Handle API error
      setVerify(false)
      console.error('Error verifying email:', error);
      toast.error('Error verifying email');
    }
  
  

  
  };
    return (

        <>
        
         
        <div className='w3-card-4 w3-white' style={{borderRadius:"40px 0 40px 0", margin: "70px"}}>
        
    <form className="form-signin" onSubmit={handleSubmit}>
  
    <h2 className="w3-center  w3-padding-bottom" >Verify your Email Address</h2>
    <p className='w3-panel w3-center'>
    We&apos;ve sent an email to {shortenEmail(EmailAddress)} with a link and a code. You can enter the code below or click the link in the email to verify your email address.
</p>

  <div className="form-label-group">
  <input
                type="number"
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


  <button className="btn btn-lg btn-primary btn-block" type="submit">
    {!isVerify ? 'Verify E-mail' : 'Verifying E-mail...'}
  </button>
 
 

 
</form>
</div>
       
        </>
    )
}