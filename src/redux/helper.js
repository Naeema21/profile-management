import { ProfileData } from "../assest/profile";

export const checkAuthentication = (email, password) => {
    return ProfileData.some((user) => user.email === email && user.password === password);
};

export const checkAdminStatus = (email) => {
    // Example: Check if the user is an admin based on email
    const user = ProfileData.find((user) => user.email === email);
    return user ? user.isAdmin : false;
};

export const getProfileData = (email) => {
    // Example: Retrieve profile data based on email
    const user = ProfileData.find((user) => user.email === email);
    return user ? { email: user.email, isAdmin: user.isAdmin } : null;
};