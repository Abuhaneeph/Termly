import React from 'react'

const Profile = ({initiatorData}) => {
    const profile_img=initiatorData[0].certPass;
    console.log(profile_img)
    
  return (
     <div className="col-xl-4">
    {/* Profile picture card*/}
    <div className="card mb-4 mb-xl-0">
      <div className="card-header">Profile Picture</div>
      <div className="card-body text-center">
        {/* Profile picture image*/}
        <img
          className="img-account-profile rounded-circle mb-2"
          src={`${profile_img}`}
          alt=""
        />
        {/* Profile picture help block*/}
        <div className="small font-italic text-muted mb-4">
          JPG or PNG no larger than 5 MB
        </div>
        {/* Profile picture upload button*/}
        <button className="btn btn-primary" type="button">
          Upload new image
        </button>
      </div>
    </div>
  </div>
  )
}

export default Profile