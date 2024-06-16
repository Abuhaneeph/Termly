'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import NavItem from './NavItem';
import MobileItem from './mobileNav';
const NavWrapper = ({ children }) => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setShowSideNav(screenWidth >= 768);
      if (screenWidth >= 768) {
        setShowMobileNav(false);
      }
    };

    if (typeof window !== 'undefined') {
      setShowSideNav(window.innerWidth >= 768);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const toggleMobileNav = () => {
    setShowMobileNav(prevState => !prevState);
  };

  return (
    <div id="wrapper">
      <div className='nav-wrapper'>
        <nav
          className="navbar navbar-default navbar-cls-top "
          role="navigation"
          style={{ marginBottom: 0 }}
        >
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".sidebar-collapse"
              onClick={toggleMobileNav}
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              DASHBOARD
            </a>
          </div>
        
        </nav>

        {showMobileNav && (
          <nav className="navbar-default navbar-side" role="navigation">
          
            <ul className="nav" id="main-menu">
          <div className="w3-bar w3-black" >
                  
      <MobileItem href="/dashboard/get_started" iconClass="fa-caret-square-o-right" text="Get Started" />
      <MobileItem href="#" iconClass="fa-check-square-o" text="Compliance" />
      <MobileItem href="#" iconClass="fa-users" text="Users" />

      <MobileItem href="#" iconClass="fa-book" text="Transactions" />
      <MobileItem href="/dashboard/admin_campaign" iconClass="fa-bullhorn" text="Campaigns" />
      <MobileItem href="/dashboard/admin_donor" iconClass="fa-users" text="Donors" />
      <MobileItem href="#" iconClass="fa-money" text="Bank Accounts" />
      <MobileItem href="#" iconClass="fa-question" text="Dispute/Query" />
      <MobileItem href="#" iconClass="fa-bar-chart" text="Marketing Tools" />
      <MobileItem href="#" iconClass="fa-cog" text="Settings" />
            <MobileItem href="#" iconClass="fa-credit-card" text="Wallet" />
          </div>
          </ul>
          </nav>
        )}
              {/* /. NAV TOP  */}
      {showSideNav && (<div className='sideNav' >

<nav className="navbar-default navbar-side" role="navigation">
  <div className="sidebar-collapse">
    <ul className="nav" id="main-menu">
      <li className="text-center">
        <img
          src="../../assets/img/find_user.png"
          className="user-image img-responsive"
        />
      </li>
      
      <NavItem href="/dashboard/get_started" iconClass="fa-caret-square-o-right" text="Get Started" />
      <NavItem href="#" iconClass="fa-check-square-o" text="Compliance" />
      <NavItem href="#" iconClass="fa-users" text="Users" />

      <NavItem href="#" iconClass="fa-book" text="Transactions" />
      <NavItem href="/dashboard/admin_campaign" iconClass="fa-bullhorn" text="Campaigns" />
      <NavItem href="/dashboard/admin_donor" iconClass="fa-users" text="Donors" />
      <NavItem href="#" iconClass="fa-money" text="Bank Accounts" />
      <NavItem href="#" iconClass="fa-question" text="Dispute/Query" />
      <NavItem href="#" iconClass="fa-bar-chart" text="Marketing Tools" />
      <NavItem href="#" iconClass="fa-cog" text="Settings" />
            <NavItem href="#" iconClass="fa-credit-card" text="Wallet" />
    </ul>
  </div>
</nav>
</div>)}
{/* /. NAV SIDE  */}

        {/* /. NAV TOP  */}
        {children}
      </div>
    </div>
  );
};

export default NavWrapper;
