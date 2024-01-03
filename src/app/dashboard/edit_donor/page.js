'use client'
import { useState ,useEffect} from "react";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import axios from "axios";
export default function Page (){
   
    const searchParams = useSearchParams()
 
  const id =  searchParams.get('id');

  const [formValues, setFormValues] = useState({
    donation_poster: null,
    title: '',
    videoUrl: '',
    category: '',
    donationGoal: null,
    location: '',
    about: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  

  const validatePoster = (file) => {
    const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
    const maxSize = 1000; // in kilobytes

    if (!allowedFormats.includes(file.type)) {
      return 'Invalid file format. Please upload a JPEG or PNG image.';
    }

    if (file.size > maxSize * 2048) {
      return 'File size exceeds the limit (2 MB).';
    }

    return null; // No validation error
  };

  const handlePosterChange = (e) => {
    const file = e.target.files[0];
    const validationError = validatePoster(file);

    if (validationError) {
      // Display toast error
      console.error(validationError);
      toast.error(validationError)
    } else {
      setFormValues({
        ...formValues,
        donation_poster: file,
      });
    }
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
  
  
    try {
      // Create FormData object to send files and other data
      const formData = new FormData();
      formData.append("donation_title", formValues.title);
      formData.append("video_url", formValues.videoUrl);
      formData.append("category", formValues.category);
      formData.append("donation_amount", formValues.donationGoal);
      formData.append("location", formValues.location);
      formData.append("donation_poster", formValues.donation_poster);
      formData.append("donation_desc", formValues.about);

  
      // Make a POST request using Axios
      const response = await axios.put(`http://localhost:3000/api/updateDonationById/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      // Handle the success response
      console.log("API Response:", response.data);
      toast.success("Donation Updated successfully");
    } catch (error) {
      // Handle errors
      console.error("API Error:", error);
      toast.error("Failed to update donation");
    }
  };
  
  const fetchDonationById = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/getDonationById/${id}`
      );
     
      const donationData = response.data; // Adjust this based on your API response
 
      // Update form values with donation data
      setFormValues({
        donation_poster:  null,
        title: donationData.donation.donation_title || '',
        videoUrl: donationData.donation.video_url || "",
        category: donationData.donation.category || "",
        donationGoal: donationData.donation.donation_amount || null,
        location: donationData.donation.location || "",
        about: donationData.donation.donation_desc || "",
      });
      
    } catch (error) {
      console.error("Error fetching donation by ID:", error);
      toast.error("Failed to fetch donation details");
    }
  };

  useEffect(() => {
    // Fetch donation data by ID when the component mounts
    fetchDonationById();
  }, []); // Empty dependency array to run the effect only once

 
    return (
        <>
<>


<div style={{ marginLeft: "30%", overflowY: "auto", height: "80vh",paddingBottom:"20px" }} id="donorContent">
  <div className="w3-container">
    <h2>Edit Donation {id} </h2>
   
    <form
    enctype="multipart/form-data"
                className="form-signin"
          onSubmit={handleSubmit}
             
              >
               
                <div className="form-label-group">
                  <input
                    type="file"
                    id="inputPoster"
                    className="form-control"
                    style={{ height: "60px" }}
                    onChange={handlePosterChange}
                    placeholder="Poster"
                    name="donation_poster"
                    required
                  />
                  <label htmlFor="inputPoster">Donation Poster</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputTitle"
                    className="form-control"
                    onChange={handleInputChange}
                    value={formValues.title}
                    placeholder="Donation Title"
                    name="title"
                    required
                  />
                  <label htmlFor="inputTitle">Donation Title</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="url"
                    id="inputVideo"
                    required
                    className="form-control"
                    placeholder="Your Video URL"
                    name="videoUrl"
                    onChange={handleInputChange}
                    value={formValues.videoUrl}
                  />
                  <label htmlFor="inputVideo">
                  Video URL
                  </label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputCategory"
               
                    className="form-control"
                    placeholder="Category"
                    name="category"
                    onChange={handleInputChange}
                    value={formValues.category}
                    required
                  />
                  <label htmlFor="inputCategory">Category</label>
                </div>
                <div className="form-label-group">
                  <input
                    type="number"
                    id="inputDonation"
                 
                    className="form-control"
                    placeholder="Donation Goal"
                    name="donationGoal"
                    onChange={handleInputChange}
                    value={formValues.donationGoal}
                  />
                  <label htmlFor="inputDonation">
                  Donation Goal(in Naira)
                  </label>
                </div>
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputLocation"
                    className="form-control"
                 
                    placeholder="Location"
                    name="location"
                    onChange={handleInputChange}
                    value={formValues.location}
                    required
                  />
                  <label htmlFor="inputLocation">Location</label>
                </div>
                <div className="form-label-group">
                <div>
  <textarea
    id="inputDesc"
    className="form-control"
    style={{ height: "130px" }}
    placeholder="About the Donation"
    name="about"
    onChange={handleInputChange}
    value={formValues.about}
    required
  ></textarea>
 
</div>

                </div>
                
                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                >
                 Edit Donation
                </button>

               
              </form>
  </div>
</div>

</>

</>

    )

}