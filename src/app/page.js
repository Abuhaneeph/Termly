"use client"
import { useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';
var sessionStorage = require("sessionstorage")
export default function Home() {
  const router= useRouter()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setLogin]= useState(false)
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLogin(true)
   try {
    const response = await axios.post('https://termly-api.onrender.com/api/loginUser', {
      email,
      password
    });

    const { message, account_type, error } = response.data;

    if (error) {
      toast.error(error);
      setLogin(false)
    } else {
      if (account_type === 'Initiator') {
        toast.success(`${message}. You are logged in as an Initiator.`);
        const response = await axios.get(`https://termly-api.onrender.com/api/user/${email}`);
        const userData = response.data;
          const userId = userData.user_id;
          sessionStorage.setItem('userId', userId);
          router.push('/initiator/dashboard/Home');
          setLogin(false)
      } else if (account_type === 'Contributor') {
        toast.success(`${message}. You are logged in as an Contributor.`);
        setLogin(false)
      } else if (account_type === 'Organization') {
        router.push('/dashboard/home_page');
        setLogin(false)
        toast.success(`${message}. You are logged in as an Organization.`);
      } else {
        toast.success(`${message}. Account type not chosen.`);
        router.push(`/user/accounts?email=${email}`)
        setLogin(false)
      }
      setLogin(false)
    }
  } catch (error) {
    if (error.response && error.response.status === 404) {
      setLogin(false)
      toast.error('User not found');
    } else if (error.response && error.response.status === 400) {
      setLogin(false)
      toast.error('Email not verified');
      router.push(`/user/verify-email?email=${email}`);
    } else if (error.response && error.response.status === 401) {
      setLogin(false)
      toast.error('Invalid password');
    } else {
      setLogin(false)
      toast.error('Internal Server Error');
    }
  }
  

  };

  return (
    <>
      <div className='w3-container' id="About" style={{ paddingTop: '80px' }}>
        <div className='w3-row-padding '>
          <div className='w3-half w3-text-white w3-center'>
            <p style={{ fontWeight: "bolder", fontSize: "20px" }} className='w3-bold'>At termly <br />all institutional and<br /> Individual financial<br /> goals are achieved <br />within the targeted<br /> time.</p>
            <p style={{ fontWeight: "bolder", fontSize: "20px" }}>Join Us.</p>
          </div>
          <div className='w3-half w3-container'>
            <div className='w3-card-4 w3-white' style={{ borderRadius: "40px 0 40px 0" }}>
              <form className="form-signin" style={{ paddingTop: "60px"}}>
                <div className="form-label-group">
                  <input
                    type="email"
                    id="inputEmail"
                    className="form-control"
                    placeholder="Email address"
                    required=""
                    autoFocus=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label htmlFor="inputEmail">Email address</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="password"
                    id="inputPassword"
                    className="form-control"
                    placeholder="Password"
                    required=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label htmlFor="inputPassword">Password</label>
                </div>

                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handleSubmit}>
                  {!isLogin ? 'Login in' : 'Login the User .....'}
                </button>
            {/* <a href="#" className='w3-right'>Forgot Password</a> */}    
                <p className='mt-5 mb-3 w3-center'>Don&apos;t have an account</p>
                <Link href="/user/register">
                  <button className="btn btn-lg btn-primary btn-block" type="submit">
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