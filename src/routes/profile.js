import React from "react";
import ProfileCard from '../component/profileCard';
import { useSelector } from 'react-redux';


const Profile = () => {
  const profiles = useSelector((state) => state.profiles.profiles);

  return (
    <div className="app-container">
      <div className="row">
        {profiles.map((profile) => (
          <div className="col" key={profile?.id}>
            <ProfileCard profile={profile} />
          </div>
        ))
        }
      </div >
    </div >
  );
}

export default Profile;
