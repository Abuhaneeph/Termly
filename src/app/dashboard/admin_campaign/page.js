'use client'
import  { useState, useEffect } from 'react';
import Link from 'next/link';


export default function Page() {
  const [donations, setDonations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalDonations, setTotalDonations] = useState(0);

  useEffect(() => {
    // Function to fetch donations and total donation count from the API
    const fetchDonationsAndCount = async () => {
      try {
        // Fetch donations
        const responseDonations = await fetch(`https://termly-api.onrender.com/api/getDonation?page=${currentPage}`);
        const dataDonations = await responseDonations.json();

        // Modify amount_raised to return 0 if null or undefined
        const modifiedDonations = dataDonations.donations.map((donation) => ({
          ...donation,
          amount_raised: donation.amount_raised || 0,
        }));

        setDonations(modifiedDonations);

        // Fetch total donation count
        const responseCount = await fetch('https://termly-api.onrender.com/api/getDonationCount');
        const dataCount = await responseCount.json();
        const totalDonationsCount = dataCount.totalDonations || 0;
        setTotalDonations(totalDonationsCount);

        // Calculate the total number of pages based on the fixed items per page (3 in this case)
        const calculatedTotalPages = Math.ceil(totalDonationsCount / 3);
        setTotalPages(calculatedTotalPages);
      } catch (error) {
        console.error('Error fetching donations or count:', error);
      }
    };

    fetchDonationsAndCount();
  }, [currentPage]);


  
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <div style={{ marginLeft: "30%", overflowY: "auto", height: "80vh", paddingBottom: "100px" }} id="donorContent">
        <div className="w3-container">
          <h1>Campaigns</h1>
          <p>All donations made to campaigns are sent directly to the campaign</p>
        </div>
        <div className="w3-container">
          <div className="w3-row-padding">
            {donations.map((donation) => (
              <div key={donation.id} className="w3-col l4 m6 w3-margin-top">
                <div className="w3-padding">
             
                  <img src={`${donation.donation_poster}`}alt="Donation" style={{ width: "100%", height: "150px", borderRadius: "20px 20px 0 0" }} />
                
                  <div className="w3-container w3-white">
                    <h4><b>{donation.category}</b></h4>
                    <hr style={{ width: "100%" }}></hr>
                    <h4><b>{donation.donation_title}</b></h4>
                    <p>{`N${donation.donation_amount}`}</p>
                    <p>{`raised N${donation.amount_raised}`}</p>
                    <Link href={`/dashboard/campaign_details?id=${donation.donation_id}`}>
                    <button className="btn btn-lg btn-primary btn-block w3-margin-bottom" type="submit">
                      Check it Now
                    </button>
                    </Link>
                   
                    <Link href={`/dashboard/edit_donor?id=${donation.donation_id}`}>
                    <button className="btn btn-lg btn-primary btn-block w3-margin-bottom" >
                      Edit 
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ textAlign: "center", marginTop: "20px" }} >
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button key={page} onClick={() => handlePageChange(page)} disabled={page === currentPage}>
              {page}
            </button>
          ))}
        </div>
        <p>Total Donations: {totalDonations}</p>
      </div>
    </>
  );
}
