import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar(){
    return(
        <>
        
        <div
  id="sidebar"
  className="w3-sidebar w3-bar-block w3-blue w3-card"
  style={{ paddingTop:"0px !important",width: "30%", height: "80vh", overflowY: "auto", maxHeight: "100%" }}
>
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

<div className="w3-dropdown-hover">
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

        </>
    )
}