'use client'
import Link from "next/link";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Header ({ openSidebar }){
  const router = useRouter()
    const[initiator, setInitiator] = useState()
    useEffect(() => {
        const initiatorName = sessionStorage.getItem('initiatorName');
    setInitiator(initiatorName)
      },[initiator]);
   
   const logout=()=>{
            sessionStorage.removeItem("userId");
            router.push("/")

   }
  
    return(
        <>
       

        <div className="w3-bar w3-center w3-large w3-green" style={{fontSize:"50px"}}>
           Initiator Dashboard
           <div className="w3-bar-item w3-button w3-right w3-mobile" onClick={logout}>
 Log out
 
</div>  
            
        </div>
       <div className="w3-bar w3-blue  w3-hide-small">
  <div href="#" className="w3-bar-item w3-left w3-button w3-mobile ">
 Thrifts and Credits

  </div>
 <Link href='/initiator/dashboard/Notification'>
 <div className="w3-bar-item w3-text-white w3-left w3-button w3-mobile">
  <i class="fa fa-bell"></i>   Notification
  </div>
 </Link> 
 

 
 
  <div className="w3-bar-item w3-right w3-button w3-mobile">
  <i class="fa fa-cog"></i>   Settings
  </div>
  <div className="w3-bar-item w3-right w3-button w3-mobile">
  <i class="fa fa-user"></i> {initiator}
  </div>

 
 
 


  
</div>


        </>
    )
}