import React from "react";

import '../style/Profile.css';

import Cover from "../assets/Images/Profile/cover.jpg";

const Profile = () => {
  return (
    <div className="container-fluid bg-light">
        <div className="img-col border rounded">
            <img
              src={Cover}
              className="rounded"
                alt="Cover"
                width="100%"
                height="100%"
            />
      </div>
    </div>
  );
};

export default Profile;
