import Sidebar from "./component/Header/Sidebar"
import Header from "./component/Header/Header"
export default function DashboardLayout({ children }) {
    return <section>

      
<Header/>
 <Sidebar/>
      {children}
     
      </section>

  }
  