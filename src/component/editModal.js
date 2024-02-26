import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddProfile, editProfile } from '../redux/reducer';

const EditModal = ({ isModalOpen, setIsModalOpen, profile, isEdit }) => {

    const initialData = isEdit ? { ...profile } :
        {
            name: '',
            email: '',
            phone: '',
            website: '',
            isAdmin: false,
            profile_pic: "https://avatars.dicebear.com/v2/avataaars/Bret.svg?options[mood][]=happy",
            wishlist: false
        };

    delete initialData.wishlist;
    const dispatch = useDispatch()
    const isAdmin = useSelector((state) => state.auth.isAdmin)

    const [formData, setFormData] = useState(initialData);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setErrors({
            ...errors,
            [name]: '',
        });
    };

    const validateForm = () => {
        const newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (key !== 'wishlist' && key !== 'isAdmin' && !formData[key]) {
                newErrors[key] = 'This field is required';
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleOk = () => {
        if (validateForm()) {
            if (isEdit) {
                dispatch(editProfile({ ...profile, ...formData }))
            }
            else {
                dispatch(AddProfile({ ...formData }))
                setFormData(initialData)
            }
            setIsModalOpen(false);
            setErrors({})
        }
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setErrors({})
    };

    return (

        <>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <form>
                            <div className='modal-header'>
                                <h2 className='modal-title'>Basic Modal</h2>
                            </div>
                            {
                                isAdmin ?
                                    <div className='modal-body'>
                                        <div className="form-group">
                                            <label htmlFor="name">Name :</label>
                                            <div style={{ width: '100%' }}>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                />
                                                <span className="error-message">{errors.name}</span>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email : </label>
                                            <div style={{ width: '100%' }}>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                />
                                                <span className="error-message">{errors.email}</span>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="phone">Phone : </label>
                                            <div style={{ width: '100%' }}>
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                />
                                                <span className="error-message">{errors.phone}</span>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="website">Website : </label>
                                            <div style={{ width: '100%' }}>
                                                <input
                                                    type="text"
                                                    id="website"
                                                    name="website"
                                                    value={formData.website}
                                                    onChange={handleInputChange}
                                                />
                                                <span className="error-message">{errors.website}</span>
                                            </div>
                                        </div>

                                        <div style={{ marginBottom: '15px' }}>
                                            <input
                                                checked={formData.isAdmin}
                                                type='checkbox'
                                                name='isAdmin'
                                                value={formData.isAdmin}
                                                onChange={handleInputChange}
                                            />
                                            <label> Admin</label>
                                        </div>
                                    </div>
                                    :
                                    <div className='info' style={{ margin: '10px', fontWeight: 'bold' }}> Only admin can edit / add </div>
                            }

                            <div className="modal-footer">
                                <button type="button" onClick={handleCancel}>
                                    Cancel
                                </button>
                                <button type="button" onClick={handleOk} className='primary-button'>
                                    OK
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
export default EditModal;