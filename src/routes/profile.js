import React, { useState } from "react";
import ProfileCard from '../component/profileCard';
import { logout } from "../redux/reducer";
import { useDispatch, useSelector } from 'react-redux';
import EditModal from "../component/editModal";

const Profile = () => {
  const dispatch = useDispatch()
  const profiles = useSelector((state) => state.profiles.profiles);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="app-container">
      <div className="logout-container">
        <button onClick={showModal}>Add Profile</button>
        <button onClick={() => dispatch(logout(true))} className="primary-button">Log Out</button>
      </div>
      <div className="row">
        {profiles.map((profile) => (
          <div className="col" key={profile?.id}>
            <ProfileCard profile={profile} />
          </div>
        ))
        }
      </div >

      <EditModal
        isEdit={false}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div >
  );
}

export default Profile;
