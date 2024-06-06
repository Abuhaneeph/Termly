export default function Page() {
    return (

        <>
          <div className="w3-display-middle" style={{marginBottom:"100px"}}>
          <div className='w3-card-4 w3-white' style={{borderRadius:"40px 0 40px 0"}}>
        
    <form className="form-signin">
  
    <h2 className="w3-center  w3-padding" >Category of Business</h2>
    <p className=''> <input  type="checkbox" />  Limited Liability Company
</p>
<p className=' '>  <input  type="checkbox" />  Registration Business of Name
</p>
<label>Bank Name</label>
  <div className="form-label-group">
    <input
      type="text"
      id="inputBank"
      className="form-control"
      placeholder="Bank Name"
      required=""
      autofocus=""
    />
    <label htmlFor="inputBank">Bank Name Plc</label>
  </div>

  <div className="form-label-group">
    <input
      type="number"
      id="inputNo"
      className="form-control"
      placeholder="Bank Name"
      required=""
      autofocus=""
    />
    <label htmlFor="inputNo">Account Number</label>
  </div>
  <button className="btn btn-lg btn-primary btn-block" type="submit">
    Continue
  </button>

 

 
</form>
</div>
          </div>
        </>
    )
}