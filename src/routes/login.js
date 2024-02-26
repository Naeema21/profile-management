// Login.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducer';
import { useNavigate } from 'react-router-dom';

const LoginScreen = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        email: '',
        password: '',
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!formData.email) {
            isValid = false;
            newErrors.email = 'Email is required';
        } else {
            newErrors.email = '';
        }

        if (!formData.password) {
            isValid = false;
            newErrors.password = 'Password is required';
        } else {
            newErrors.password = '';
        }

        setErrors(newErrors);
        return isValid;
    };

    const submitForm = (e) => {
        e.preventDefault();

        if (validateForm()) {
          const error =  dispatch(login(formData?.email))
          console.log(error)
            navigate("/profile");
        }
    };

    return (
        <div className='login-form-container'>
            <form onSubmit={submitForm} className='login-form'>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input
                        type='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                        className='form-input'
                        required
                    />
                    <span className='error'>{errors.email}</span>
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <div className='password-input-container'>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className='form-input'
                            required
                        />
                        <button
                            type='button'
                            className='toggle-password-button'
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? 'Hide' : 'View'}
                        </button>
                    </div>
                    <span className='error'>{errors.password}</span>
                </div>
                <button type='submit' className='button'>
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginScreen;
