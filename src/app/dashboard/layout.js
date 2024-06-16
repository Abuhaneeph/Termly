'use client'
import { useState } from "react";
import Sidebar from "./component/Header/Sidebar"
import Header from "./component/Header/Header"
import ColSidebar from "./component/Header/colSidebar"
export default function DashboardLayout({ children }) {
    
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
    return <section>
 
  <Header openCamSidebar={() => setIsSidebarOpen(true)} />

      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <link href="../assets/css/bootstrap.css" rel="stylesheet" />
   

   
    <link href="../assets/css/font-awesome.css" rel="stylesheet" />
  
    <link href="../assets/js/morris/morris-0.4.3.min.css" rel="stylesheet" />
     
    <link href="../assets/css/custom.css" rel="stylesheet" />
  
   <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />

  
    
    

 
      {children}
     
      </section>

  }
  