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
      <ColSidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
 <Sidebar/>
 
 
      {children}
     
      </section>

  }
  