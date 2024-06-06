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
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
  
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/boxicons/2.1.0/css/boxicons.min.css" integrity="sha512-pVCM5+SN2+qwj36KonHToF2p1oIvoU3bsqxphdOIWMYmgr4ZqD3t5DjKvvetKhXGc/ZG5REYTT6ltKfExEei/Q==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossorigin="anonymous" />
<script src="//code.tidio.co/1nxkbax650zxuiiy5qfaquqwrynbwd1j.js" async></script>  
<div style={{width:"100%",margin:0}}> 

      {children}

      </div>    </section>
  }
  