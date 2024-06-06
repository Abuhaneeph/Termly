'use client'
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
var sessionStorage = require('sessionstorage');

import DateTimeComponent from "../component/Header/DateTimeComponent"
export default function Page (){
  const router = useRouter();
  const [userId, setUserId] = useState(null);
  const [initiatorData, setInitiatorData] = useState(null);

  useEffect(() => {
    // Check if userId is in sessionStorage
    const storedUserId = sessionStorage.getItem('userId');

    if (storedUserId) {
      // If userId is present, set it in the state
      setUserId(storedUserId);
      console.log(storedUserId)

    // Make API call to get initiator data
      axios.get(`https://termly-api.onrender.com/api/getInitiatorData/${storedUserId}`)
      .then(response => {
        const { fName, initiator_id } = response.data; // Assuming the API returns fName and initiator_id
        setInitiatorData({ fName, initiator_id });
          console.log(fName)
          sessionStorage.setItem('initiatorName', fName)
          sessionStorage.setItem('initiatorID',initiator_id)
      })
      .catch(error => {
        console.error('API Error:', error);
        });
    } else {
      // If userId is absent, redirect to the home route
      router.push('/');
    }
  }, [userId]); // The empty dependency array ensures that this effect runs only once on component mount

  // Render null if userId is not present or initiator data is not yet fetched
  if (!userId || !initiatorData) {
    return null;
  }

  

  if (!userId) {
    return null;
  }


  return (
    <>
     <div style={{ marginLeft: "20%", overflowY: "auto",  height: "80vh", paddingBottom: "70px" }} id="donorContent">
        <div className="w3-container w3-center">
          <div className="w3-row-padding w3-center">
            <div className="w3-col l4 m6 s12 w3-bold   w3-margin-top w3-mobile  w3-pale-blue w3-center">
              Welcome to Dashboard
            </div>
            <div className="w3-col l4 m6 s12  w3-margin-top w3-mobile  w3-center">
              <input type="text" placeholder="Search Member/Group" name="search" />
            </div>
            <div className="w3-col l4 m6 s12  w3-margin-top w3-mobile w3-pale-blue  w3-center">
              <DateTimeComponent />
            </div>
          </div>
          <div className="w3-row-padding w3-center">
            <div className="w3-col l4 m6 s12 w3-blue w3-margin-top  w3-center">
              <h4>Total Wallet</h4>
              <h4>Balance</h4>
              <p>N 5000,000</p>
            </div>
            <div className="w3-col l4 m6 s12 w3-green w3-margin-top  w3-center">
              <h4>Total Active </h4>
              <h4>Groups</h4>
              <p>N 5000,000</p>
            </div>
            <div className="w3-col l4 m6 s12 w3-red w3-margin-top w3-center">
              <h4>Criticized Members </h4>
              <h4>List</h4>
              <p>4</p>
            </div>
            <div className="w3-col l4 m6 s12 w3-red w3-margin-top w3-center">
              <h4>Total Criticized </h4>
              <h4>Members</h4>
              <p>4</p>
            </div>
            <div className="w3-col l4 m6 s12 w3-green w3-margin-top w3-center">
              <h4>Outstanding Store  </h4>
              <h4>Payments</h4>
              <p>4</p>
            </div>
            <div className="w3-col l4 m6 s12 w3-green w3-margin-top w3-center">
              <h4>Unresolved Members </h4>
              <h4>Disputes</h4>
              <p>4</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
