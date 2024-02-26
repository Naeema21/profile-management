import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import EditModal from "./editModal";
import { logout } from "../redux/reducer";

const NavBar = () => {
    const dispatch = useDispatch()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const showModal = () => {
        setIsModalOpen(true);
    };
    return (
        <div>
            <div className="navbar-container">
                <Link to={'/profile'}>Profile List</Link>
                <button onClick={showModal}>Add Profile</button>
                <div className="dropdown-container">
                    <div className="icon" onClick={toggleDropdown}>
                        <FaUserCircle />
                    </div>
                    {isOpen && (
                        <div className="dropdown-menu">
                            <Link to={'/user-info'}>Profile</Link>
                            <button onClick={() => dispatch(logout(true))} className="primary-button">Log Out</button>
                        </div>
                    )}
                </div>
            </div>
            <Outlet />
            <EditModal
                isEdit={false}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
        </div>
    )
}

export default NavBar