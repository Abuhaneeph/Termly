export default function Page() {
    return (

        <>
          <div className="w3-display-middle" style={{marginBottom:"100px"}}>
          <div className='w3-card-4 w3-white' style={{borderRadius:"40px 0 40px 0"}}>
        
    <form className="form-signin">
  
    <h2 className="w3-center  w3-padding-bottom" >Verify your Email Address</h2>
    <p className='w3-panel w3-center'>
    We&apos;ve sent an email to ---------.com with a link and a code. You can enter the code below or click the link in the email to verify your email address.
</p>

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


  <button className="btn btn-lg btn-primary btn-block" type="submit">
    Submit Now
  </button>
  <div className="w3-panel w3-center">
  <a href="#" className="w3-padding-top w3-center">Resend Verification Email</a>
  
  </div>
 

 
</form>
</div>
          </div>
        </>
    )
}