import Header from "./component/Header/Header"
import Sidebar from "./component/Header/Sidebar"
export default function InitiatorLayout({ children }) {
    return <section>
  <Header/>
  <Sidebar/>
    
      {children}</section>
  }
  