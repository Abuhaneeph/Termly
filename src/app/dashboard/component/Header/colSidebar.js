'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

export default function ColSidebar({isOpen,closeSidebar}){

  


  return (
    <>
    <div className="w3-sidebar w3-bar-block w3-blue" style={{ display: isOpen ? 'block' : 'none' }}>
      <button onClick={closeSidebar} className="w3-bar-item w3-button w3-large">Close &times;</button>

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