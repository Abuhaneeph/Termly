"use client"
import { useEffect,useRef ,useState} from 'react'

export default function Home() {
  
 

 
  return (

<>

<div className='w3-container' id="About" style={{  paddingTop: '80px' }}>
  <div className='w3-row-padding '>
    <div className='w3-half w3-text-white w3-center'  >
      
      <p style={{fontWeight:"bolder",fontSize:"20px"}} className='w3-bold'>At termly <br></br>all institutional and<br></br> Individual financial<br></br> goals are achieved <br></br>within the targeted<br></br> time.
</p>
      <p style={{fontWeight:"bolder",fontSize:"20px"}}>Join Us.</p>
         
    </div>
    <div className='w3-half w3-container'>
      <div className='w3-card-4 w3-white' style={{borderRadius:"40px 0 40px 0"}}>
    <form className="form-signin" style={{paddingTop:"60px"}}>
  
  <div className="form-label-group">
    <input
      type="email"
      id="inputEmail"
      className="form-control"
      placeholder="Email address"
      required=""
      autofocus=""
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
    />
    <label htmlFor="inputPassword">Password</label>
  </div>

  <button className="btn btn-lg btn-primary btn-block" type="submit">
    Login in
  </button>
  <a href="#" className='w3-right'>Forgot Password</a>
  <p className='mt-5 mb-3 w3-center'>Don&apos;t have an account</p>
  <button className="btn btn-lg btn-primary btn-block" type="submit">
    Sign up
  </button>
</form>
</div>
  



    </div>
  </div>
</div>

</>
  )
}
