'use client'
import Link from "next/link";
export default function Header (){
    const initiatorName = sessionStorage.getItem('initiatorName');
    console.log(initiatorName)
   
  
    return(
        <>
       

        <div className="w3-bar w3-center w3-large w3-green" style={{fontSize:"50px"}}>
           Initiator Dashboard               
        </div>
       <div className="w3-bar w3-blue  w3-hide-small">
  <div href="#" className="w3-bar-item w3-left w3-button w3-mobile ">
 Thrifts and Credits

  </div>
 <Link href='/initiator/dashboard/Notification'>
 <div className="w3-bar-item w3-text-white w3-left w3-button w3-mobile">
  <i class="fa fa-bell"></i>   Notification
  </div>
 </Link> 
 

 
 
  <div className="w3-bar-item w3-right w3-button w3-mobile">
  <i class="fa fa-cog"></i>   Settings
  </div>
  <div className="w3-bar-item w3-right w3-button w3-mobile">
  <i class="fa fa-user"></i> {initiatorName}
  </div>

  <div className="w3-dropdown-hover w3-bar-item w3-right">
  <button className="w3-button">Menu</button>
  <div className="w3-dropdown-content w3-bar-block w3-card-4">
  <Link href="/initiator/dashboard/Home" className="w3-bar-item w3-button"><i className="fa fa-home"></i> Home</Link>
  <Link href="/initiator/dashboard/MyAccount" className="w3-bar-item w3-button"><i className="fa fa-caret-square-o-right"></i> My Account</Link>
      <Link href="/initiator/dashboard/create_group" className="w3-bar-item w3-button"><i className=" fa fa-users"></i> Groups </Link>

      <Link href="/initiator/dashboard/wallet" className="w3-bar-item w3-button"><i className="fa fa-credit-card"></i> Wallet </Link>
      <Link href="#" className="w3-bar-item w3-button"><i className="fa fa-bar-chart"></i>  Marketing Tools</Link>
      <Link href="#" className="w3-bar-item w3-button"><i className="fa fa-book"></i> Report</Link>
      <Link href="/initiator/dashboard/annoucement" className="w3-bar-item w3-button"><i className="fa fa-bullhorn"></i> Announcement</Link>
      <Link href="#" className="w3-bar-item w3-button"><i className="fa fa-check-square-o"></i> Terms and Condition</Link>

      <Link href="#" className="w3-bar-item w3-button"><i className="fa fa-question"></i> Disputes</Link>

  </div>
</div>
 
 


  
</div>


        </>
    )
}