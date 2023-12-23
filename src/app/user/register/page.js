// `app/dashboard/page.js` is the UI for the `/dashboard` URL
export default function Page() {
    return (
        <>
        <div className='w3-container' style={{ display: 'block', margin: 'auto', paddingTop: '80px',marginBottom:"300px" }}>
  <div className='w3-row-padding '>
    <div className='w3-half w3-text-white w3-center' id="Reg">
      
<h1>Start Registration here</h1>
<p style={{paddingBottom:"20px"}}> <input checked type="checkbox" id="generate" name="generate" value="generate"/> Generate  funding for your business <br></br>idea through our crowd funding<br></br> platform
</p>
<p style={{paddingBottom:"20px"}}> <input checked type="checkbox" id="adashe" name="adashe" value="adashe"/> Take advantage of technology to facilitate<br></br> your contribution business popularly <br></br> known as ADASHE 
</p>
<p style={{paddingBottom:"20px"}}>
<input checked type="checkbox" id="communal" name="communal" value="communal"/> Promoting communal activities against<br></br> community of individualism creating<br></br> wealth and evenly distributing same.

</p>
         
    </div>
    <div className='w3-half w3-container'>
      <div className='w3-card-4 w3-white' style={{borderRadius:"40px 0 40px 0"}}>
    <form className="form-signin" style={{paddingTop:"60px"}}>
  
  <div className="form-label-group">
    <input
      type="text"
      id="inputState"
      className="form-control"
      placeholder="State"
      required=""
      autofocus=""
    />
    <label htmlFor="inputState">State</label>
  </div>
  <div className="form-label-group">
    <input
      type="text"
      id="inputFirstName"
      className="form-control"
      placeholder="State"
      required=""
      autofocus=""
    />
    <label htmlFor="inputFirstName">First Name</label>
  </div>
  <div className="form-label-group">
    <input
      type="text"
      id="inputMiddleName"
      className="form-control"
      placeholder="State"
      required=""
      autofocus=""
    />
    <label htmlFor="inputMiddleName">Middle Name (optional)</label>
  </div>
  <div className="form-label-group">
    <input
      type="text"
      id="inputLastName"
      className="form-control"
      placeholder="Last Name"
      required=""
      autofocus=""
    />
    <label htmlFor="inputLastName">Last Name</label>
  </div>
  <div className="form-label-group">
    <input
      type="text"
      id="inputOrganization"
      className="form-control"
      placeholder="Organization"
      required=""
      autofocus=""
    />
    <label htmlFor="inputOrganization">Organization (optional)</label>
  </div>
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
  <div className="form-label-group">
    <input
      type="password"
      id="repeatPassword"
      className="form-control"
      placeholder="Repeat Password"
      required=""
    />
    <label htmlFor="repeatPassword">Repeat Password</label>
  </div>

  <button className="btn btn-lg btn-primary btn-block" type="submit">
    Register Now
  </button>
  
  <p className='w3-panel w3-center'>
  <input  type="checkbox" id="checked" name="checked" value="checked"/>  I acknowledge that I have read and do hereby accept the terms and conditions in the Termlys Terms and Conditions and Privacy Policy. 
</p>
 
</form>
</div>
  



    </div>
  </div>
</div>
        </>
    )
  }