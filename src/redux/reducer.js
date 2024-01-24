import { createSlice } from '@reduxjs/toolkit';
import { ProfileData } from '../assest/profile';
import { redirect } from 'react-router-dom';
import { checkAuthentication, getProfileData } from './helper';

export const profileSlice = createSlice({
  name: 'profiles',
  initialState: { profiles: ProfileData }, // Initial data goes here
  reducers: {
    editProfile: (state, action) => {
      state.profiles = state.profiles.map((profile) =>
        profile.id === action.payload.id ? action.payload : profile
      );
    },
    addToWishlist: (state, action) => {
      state.profiles = state.profiles.map((profile) =>
        profile.id === action.payload.profileId
          ? { ...profile, wishlist: action.payload.wishlist }
          : profile
      );
    },
    AddProfile: (state, action) => {
      state.profiles = [...state.profiles, action.payload]
    },
    deleteProfile: (state, action) => {
      state.profiles = state.profiles.filter((profile) => profile.id !== action.payload);
    },
  },
});

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: false,
    isAdmin: false,
    profile: null,
  },
  reducers: {
    login: (state, action) => {
      // Replace the following logic with your actual authentication check
      const isUserAuthenticated = checkAuthentication(action.payload);

      if (isUserAuthenticated) {
        state.isAuthenticated = true;
        state.isAdmin = getProfileData(action.payload)?.isAdmin;
        state.profile = getProfileData(action.payload); // Replace with your profile data retrieval logic
      } else {
        // Handle authentication failure or show an error message
        state.isAuthenticated = false;
        state.isAdmin = false;
        state.profile = null;
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.isAdmin = false;
      state.profile = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export const { editProfile, addToWishlist, deleteProfile, AddProfile } = profileSlice.actions;
