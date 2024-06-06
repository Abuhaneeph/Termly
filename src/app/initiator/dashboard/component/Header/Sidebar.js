'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

export default function Sidebar({isOpen,closeSidebar}){

  


  return (
    <>
    <div className="w3-sidebar w3-blue w3-bar-block" style={{ display: isOpen ? 'block' : 'none' }}>
      <button onClick={closeSidebar} className="w3-bar-item w3-button w3-large">Close &times;</button>

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



        </>
    )
}