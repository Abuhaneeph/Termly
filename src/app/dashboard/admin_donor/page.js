'use client'
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import {
  ref,
  uploadBytesResumable,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "@/hooks/firebase";
import NavWrapper from "../component/Header/NavWrapper";
export default function Page(){
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
  
    // Upload image to Firebase Storage
    const imageRef = ref(storage, "donation_posters/" + formValues.donation_poster.name);
   
  
    const snapshot = await uploadBytesResumable(imageRef, formValues.donation_poster);

    // Get the download URL after successful upload
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log('File available at', downloadURL);
  
    try {
      // Create a JSON object with the donation data
      const donationData = {
        donation_title: formValues.title,
        video_url: formValues.videoUrl,
        category: formValues.category,
        donation_amount: formValues.donationGoal,
        location: formValues.location,
        donation_poster: downloadURL,
        donation_desc: formValues.about,
      };
  
      // Make a POST request using Axios
      const response = await axios.post("https://termly-api.onrender.com/api/createDonation", donationData);
  
      // Handle the success response
      console.log("API Response:", response.data);
      toast.success("Donation created successfully");
    } catch (error) {
      // Handle errors
      console.error("API Error:", error);
      toast.error("Failed to create donation");
    }
  };
  
  
  // Function to fetch donation data by ID

    return (
        <>
<>


<div id="wrapper">
<NavWrapper/>

      <div id="page-wrapper">
        <div id="page-inner">
  <div className="w3-container">
    <h2>Create Donation</h2>
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
                 Create Donation
                </button>
                

               
              </form>
  </div>
</div>
</div>
</div>
</>

</>

    )

}