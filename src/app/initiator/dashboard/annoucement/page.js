'use client'
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import NavWrapper from "../component/NavWrapper";
var sessionStorage = require('sessionstorage');
export default function Page(){
  const [isPost, setPost] = useState(false)
    const initiatorId= sessionStorage.getItem('initiatorID')
  const [formValues, setFormValues] = useState({

    title: '',
    
    category: '',
   
    about: '',
  });
 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  


 
  const handleSubmit = async (e) => {
    e.preventDefault();
  setPost(true)
  
  
    try {
      // Update formValues with initiator_id
      const formDataWithInitiator = {
        ...formValues,
        initiator_id: initiatorId,
      };
  
      // Make an API call to create an announcement
      const response = await axios.post('https://termly-api.onrender.com/api/createAnnouncement', formDataWithInitiator);
  
      // Check the response status
      if (response.status === 201) {
        // If successful, show a success toast
        setPost(false)
        toast.success("Announcement created successfully!");
        // Optionally, you can reset the form after successful submission
        setFormValues({
          title: '',
          category: '',
          about: '',
        });
      } else {
        setPost(false)
        // If the response status is not 201, show an error toast
        toast.error("Failed to create announcement. Please try again.");
      }
    } catch (error) {
      setPost(false)
      console.error('API Error:', error);
      // Show an error toast if there is an issue with the API call
      toast.error("An error occurred. Please try again later.");
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
    
    <h2>Create Annoucement</h2>
    <form
    enctype="multipart/form-data"
                className="form-signin"
          onSubmit={handleSubmit}
             
              >
               
                <div className="form-label-group">
                  <input
                    type="text"
                    id="inputTitle"
                    className="form-control"
                    onChange={handleInputChange}
                    value={formValues.title}
                    placeholder="Annoucement Title"
                    name="title"
                    required
                  />
                  <label htmlFor="inputTitle">Annoucement Title</label>
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
                <div>
  <textarea
    id="inputDesc"
    className="form-control"
    style={{ height: "130px" }}
    placeholder="About the Announcement"
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
                {!isPost  ? 'Post' : 'Creating Post...'}
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