'use client'
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import NavWrapper from '../component/Header/NavWrapper';

const PieChart = dynamic(() => import('./PieChart'), { ssr: false });
const BarChart = dynamic(() => import('./BarChart'), { ssr: false });

export default function Page() {
  const [campaigns, setCampaigns] = useState(0);
  const [donors, setDonors] = useState(0);
  const [donations, setDonations] = useState(0);

  useEffect(() => {
    // Fetch data from the API for campaigns
    axios.get('https://termly-api.onrender.com/api/getDonationCount')
      .then(response => {
        // Update the state with the data from the API response
        setCampaigns(response.data.totalDonations);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });

    // Fetch data from the API for donors and donations
    axios.get('https://termly-api.onrender.com/api/getStat')
      .then(response => {
        // Update the state with the data from the API response
        setDonors(response.data.total_donors);
        setDonations(response.data.total_donation);
      })
      .catch(error => {
        console.error('Error fetching data from API:', error);
      });
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <>

<div id="wrapper">
<NavWrapper/>

      <div id="page-wrapper">
        <div id="page-inner">
      <div className='w3-container'>
        <div className="w3-row-padding ">
          <div className="w3-third w3-center w3-padding  w3-container">
            <PieChart />
          </div>

          <div className="w3-twothird  w3-center w3-container">
            <BarChart />
          </div>
        </div>

        <div className="w3-row-padding w3-margin-top ">
          <div className="w3-half w3-center w3-green w3-padding  w3-container">
            <h1>{campaigns}</h1>
            <h1>CAMPAIGNS</h1>
          </div>

          <div className="w3-half w3-center w3-padding w3-blue w3-container">
            <h1>{donors}</h1>
            <h1>DONORS</h1>
          </div>
        </div>

        <div className="w3-row-padding w3-margin-top ">
          <div className="w3-half w3-center w3-green w3-padding  w3-container">
            <h1>{donations}</h1>
            <h1>DONATIONS</h1>
          </div>

          <div className="w3-half w3-center w3-padding w3-blue w3-container">
            <h1>N 3,545,768</h1>
            <h1>REMITTED</h1>
          </div>
        </div>
      </div>
      </div>
      </div>
      </div>
    </>
  );
}
