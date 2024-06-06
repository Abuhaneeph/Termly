'use client'
import { useRouter } from 'next/navigation'
import { useState,useEffect } from 'react'
import PersonalInfo from './PersonalInfo'
import NextOfKin from './NextOfKin'
import BankDetails from './BankDetails'
import axios from 'axios'
import './page.css'
import Profile from './Profile'
import { Button } from 'react-bootstrap'

export default function Page(){
  const router = useRouter();
  const [userId, setUserId] = useState(null);

  const [initiatorData, setInitiatorData] = useState(null);

  useEffect(() => {
    // Check if userId is in sessionStorage
    const storedUserId = sessionStorage.getItem('userId');

    if (storedUserId) {
      // If userId is present, set it in the state
      setUserId(storedUserId);

      // Fetch initiator data using Axios
      axios.get(`https://termly-api.onrender.com/api/initiators/${storedUserId}`)
        .then(response => {
          setInitiatorData(response.data);
        })
        .catch(error => {
          console.error('Error fetching initiator data:', error.message);
        });
    } else {
      // If userId is absent, redirect to the home route
      router.push('/');
    }
  }, [router]); // Include router in the dependency array

  // Render null if userId or initiatorData is not present
  if (!userId || !initiatorData) {
    return null;
  }

  const downloadInitiatorPDF = async () => {
    try {
      const response = await fetch(`https://termly-api.onrender.com/api/downloadInitiatorData/${userId}`, {
        method: 'GET',
      });

      if (response.ok) {
        // Convert the response to a blob
        const blob = await response.blob();

        // Create a link element to trigger the download
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `initiator_${userId}.pdf`;

        // Append the link to the body and trigger the download
        document.body.appendChild(a);
        a.click();

        // Remove the link element
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      } else {
        // Handle error
        console.error('Error downloading initiator PDF');
      }
    } catch (error) {
      console.error('Fetch Error:', error);
    }
  };


    return(
        <>
         <div style={{ marginLeft: "20%", overflowY: "auto",  height: "80vh", paddingBottom: "40px" }} id="donorContent">
         <div className="container-xl px-4 mt-4">
  {/* Account page navigation*/}
  <nav className="nav nav-borders">
    <a
      className="nav-link active ms-0"
      href="#"
      target="__blank"
    >
      Profile
    </a>
   <Button variant='primary' onClick={downloadInitiatorPDF}>
    Download Data

   </Button>
  
   
  </nav>
  <hr className="mt-0 mb-4" />
  <div className="row">
    <Profile initiatorData={initiatorData}/>
    <div className="col-xl-8">
      {/* Account details card*/}
     <PersonalInfo initiatorData={initiatorData}/>
       <NextOfKin initiatorData={initiatorData}/>
       <BankDetails initiatorData={initiatorData}/>
      
    </div>
    
  </div>
</div>
  
         </div>
    </>
    )
}