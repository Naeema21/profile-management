import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineEdit, AiFillDelete, AiOutlineMail, AiOutlinePhone, AiOutlineGlobal, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import EditModal from './editModal';
import { addToWishlist, deleteProfile } from '../redux/reducer';


const ProfileCard = ({ profile }) => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleAddToWishlist = () => {
        dispatch(addToWishlist({ profileId: profile.id, wishlist: !profile.wishlist }));
    };

    const handleDeleteProfile = () => {
        dispatch(deleteProfile(profile.id));
    };

    return (
        <>
            <div className="card">
                <div className='card-img'>
                    <img src={profile.profile_pic} alt="example" />
                </div>
                <div className="card-content">
                    <div className="title">{profile.name}</div>
                    <div className="info">
                        <AiOutlineMail className='icon' />
                        <p>{profile.email}</p>
                    </div>
                    <div className="info">
                        <AiOutlinePhone className='icon' />
                        <p>{profile.phone}</p>
                    </div>
                    <div className="info">
                        <AiOutlineGlobal className='icon' />
                        <p>{profile.website}</p>
                    </div>
                </div>
                <ul className="actions">
                    <li className='wishlist-icon'>{profile?.wishlist ? <AiFillHeart onClick={() => handleAddToWishlist()} color='red' /> :
                        <AiOutlineHeart onClick={() => handleAddToWishlist()} />}</li>
                    <li className='icon'><AiOutlineEdit onClick={showModal} /></li>
                    <li className='icon'><AiFillDelete onClick={() => handleDeleteProfile(profile)} /></li>
                </ul>
            </div>

            <EditModal
                isEdit={true}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                profile={profile}
            />
        </>
    )
}
export default ProfileCard;