import React from 'react';
import './ProfilePhoto.css';
import profileImage from '../images/joyce.jpg';

const ProfilePhoto = () => {
    return (
      <div
        className="profile-photo-shape"
        style={{ backgroundImage: `url(${profileImage})` }}
      ></div>
    );
  };
  
  export default ProfilePhoto;