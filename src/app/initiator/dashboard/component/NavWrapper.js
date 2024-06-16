'use client';
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
    setShowMobileNav((prevState) => !prevState);
  };

  return (
    <div id="wrapper">
      <div className='nav-wrapper'>
        <nav
          className="navbar navbar-default navbar-cls-top "
          role="navigation"
          style={{ marginBottom: 0 }}
        >
          <div className="navbar-header" onClick={toggleMobileNav}>
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".sidebar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              MENU
            </a>
          </div>
        </nav>

        {showMobileNav && (
          <nav className="navbar-default navbar-side" role="navigation">
            <ul className="nav" id="main-menu">
              <div className="w3-bar w3-black">
                <MobileItem href="/initiator/dashboard/Home" iconClass="fa-home" text="Home" />
                <MobileItem href="/initiator/dashboard/MyAccount" iconClass="fa-caret-square-o-right" text="My Account" />
                <MobileItem href="/initiator/dashboard/create_group" iconClass="fa-users" text="Groups" />
                <MobileItem href="/initiator/dashboard/wallet" iconClass="fa-credit-card" text="Wallet" />
                <MobileItem href="#" iconClass="fa-bar-chart" text="Marketing Tools" />
                <MobileItem href="#" iconClass="fa-book" text="Report" />
                <MobileItem href="/initiator/dashboard/annoucement" iconClass="fa-bullhorn" text="Announcement" />
                <MobileItem href="#" iconClass="fa-check-square-o" text="Terms and Condition" />
                <MobileItem href="#" iconClass="fa-question" text="Disputes" />
              </div>
            </ul>
          </nav>
        )}

        {showSideNav && (
          <div className='sideNav'>
            <nav className="navbar-default navbar-side" role="navigation">
              <div className="sidebar-collapse">
                <ul className="nav w3-bar-block" id="main-menu">
                  <li className="text-center">
                    <img
                      src="../../assets/img/find_user.png"
                      className="user-image img-responsive"
                      alt="User"
                    />
                  </li>
                  <NavItem href="/initiator/dashboard/Home" iconClass="fa-home" text="Home Page" className="w3-bar-item" />
                  <NavItem href="/initiator/dashboard/MyAccount" iconClass="fa-caret-square-o-right" text="My Account" className="w3-bar-item" />
                  <br />
                  <NavItem href="/initiator/dashboard/create_group" iconClass="fa-users" text="Groups" className="w3-bar-item" />
                  <NavItem href="/initiator/dashboard/wallet" iconClass="fa-credit-card" text="Wallet Info" className="w3-bar-item" />
                  <NavItem href="#" iconClass="fa-bar-chart" text="Marketing Tools" className="w3-bar-item" />
                  <NavItem href="#" iconClass="fa-book" text="Report" className="w3-bar-item" />
                  <NavItem href="/initiator/dashboard/annoucement" iconClass="fa-bullhorn" text="Announcement" className="w3-bar-item" />
                  <NavItem href="#" iconClass="fa-check-square-o" text="Terms and Condition" className="w3-bar-item" />
                  <NavItem href="#" iconClass="fa-question" text="Disputes" className="w3-bar-item" />
                </ul>
              </div>
            </nav>
          </div>
        )}

        {children}
      </div>
    </div>
  );
};

export default NavWrapper;
