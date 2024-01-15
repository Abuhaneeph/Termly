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
  <Link href="#" className="w3-bar-item w3-button"><i className="fa fa-home"></i> Home</Link>
  <Link href="/dashboard/get_started" className="w3-bar-item w3-button"><i className="fa fa-caret-square-o-right"></i> Get Started</Link>
      <Link href="#" className="w3-bar-item w3-button"><i className="fa fa-check-square-o"></i> Compliance </Link>
      <Link href="#" className="w3-bar-item w3-button"><i className="fa fa-user"></i> Users</Link>
      <Link href="#" className="w3-bar-item w3-button"><i className="fa fa-credit-card"></i> Wallet </Link>
      <Link href="" className="w3-bar-item w3-button"><i className="fa fa-book"></i> Transactions</Link>
      <Link href="/dashboard/admin_campaign" className="w3-bar-item w3-button"><i className="fa fa-bullhorn"></i> Campaigns</Link>
      <Link href="/dashboard/admin_donor" className="w3-bar-item w3-button"><i className="fa fa-users"></i> Donors</Link>
      <Link href="#" className="w3-bar-item w3-button"><i className="fa fa-institution"></i> Bank Accounts</Link>
      <Link href="#" className="w3-bar-item w3-button"><i className="fa fa-question"></i> Dispute/Query</Link>
      <Link href="#" className="w3-bar-item w3-button"><i className="fa fa-bar-chart"></i>  Marketing Tools</Link>
      <Link href="#" className="w3-bar-item w3-button"><i className="fa fa-cog"></i> Settings</Link>
</div>
        </>
    )
}