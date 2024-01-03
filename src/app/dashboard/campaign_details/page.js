'use client'

import { useState,useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { usePaystackPayment } from 'react-paystack';
export default function Page(){
  
    const searchParams = useSearchParams()
 
    const id =  searchParams.get('id');
    const [donationGoal, setDonationGoal] = useState(null);
    const [campaignData, setCampaignData] = useState({
        category: "",
        title: "",
        raisedAmount: 0,
        totalAmount: 0,
        location: "",
        about: ""
      });


    const handleDonationChange = (event) => {
      setDonationGoal(event.target.value);
    };
  
    
    const config = {
        reference: (new Date()).getTime().toString(),
        email: 'user@gmail.com',
        
        amount: Number(donationGoal) * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: 'pk_test_667df618507a40ab04e6359db22c35e11c29c688',
    };
    const initializePayment = usePaystackPayment(config);
    const onSuccessEvent = async () => {
      try {
        // Call the API to update the amount raised
        await axios.put(`http://localhost:3000/api/updateAmountRaised/${id}`, { newAmountRaised: donationGoal });
    
        // Reload the page or update state as needed
        // For simplicity, this example reloads the entire page
        window.location.reload();
      } catch (error) {
        console.error("Error updating amount raised:", error);
      }
    
    };
    
    // you can call this function anything
    const onSuccess = (reference) => {
      // Implementation for whatever you want to do with reference and after success call.
      console.log(reference);
      onSuccessEvent()
    };
  
    // you can call this function anything
    const onClose = () => {
      // implementation for  whatever you want to do when the Paystack dialog closed.
      console.log('closed')
    }
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://localhost:3000/api/getDonationById/${id}`);
            setCampaignData(response.data.donation); // Assuming the API response contains relevant data
            
        } catch (error) {
            console.error("Error fetching campaign data:", error);
          }
        };
    
        fetchData();
        console.log(campaignData)
      }, []);

      const handleSubmit = (event) => {
        event.preventDefault();
        
        // Add your donation submission logic here
        console.log(`Donating ${donationGoal} for campaign ID ${id}`);
        initializePayment(onSuccess, onClose)
      
  
      };
    return (
        <>
            <div style={{ marginLeft: "30%", overflowY: "auto", height: "80vh", paddingBottom: "20px" }} id="donorContent">
        <div className="w3-container">
          <h1>Campaign Details</h1>
          <img src={`../../../../donation_posters/${campaignData.donation_poster}`}a width={"100%"} height={"300px"}/>
          <h3>{campaignData.category}</h3>
          <hr></hr>
          <h4>{campaignData.donation_title}</h4>
          <p>N{campaignData.donation_amount}</p> 
          <p>raised N{campaignData.amount_raised}</p>  
          <p>
  {campaignData.donation_amount > 0
    ? `${((campaignData.amount_raised / campaignData.donation_amount) * 100).toFixed(2)}%`
    : '0%'}
</p>
          <p>{campaignData.location}</p>
          <br></br>
          <h3>About the Donation</h3>
          <p>{campaignData.about}</p>
             
    <form
    enctype="multipart/form-data"
                className="form-signin"
    onSubmit={handleSubmit}
             
              >
               
             
               
                
                <label>Enter the amount to date and click <b>Donate Now</b></label>
                <div className="form-label-group">
                  <input
                    type="number"
                    id="inputDonation"
                 
                    className="form-control"
                    placeholder="Donation Goal"
                    name="donationGoal"
                    value={donationGoal}
                    onChange={handleDonationChange}
                   required
                   
                  />
                  <label htmlFor="inputDonation">
                  e.g 5000
                  </label>
                </div>
           
            
                
                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                >
                 Donate Now
                </button>
             
               
              </form> 

                   
        </div>

        </div>
        
        </>
    )
}