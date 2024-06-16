'use client'
import { useState } from "react";
import Header from "./component/Header/Header"
import Sidebar from "./component/Header/Sidebar"

export default function InitiatorLayout({ children }) {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
    return <section>
    <Header openSidebar={() => setIsSidebarOpen(true)} />
    
  

   


   
  <link href="../../assets/css/custom.css" rel="stylesheet" />

 <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
<div> 

      {children}

      </div>    </section>
  }
  