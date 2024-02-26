import { ProfileData } from "../assest/profile";

export const checkAuthentication = (email, password) => {
    const user = ProfileData.find((user) => user.email === email && user.password === password);
    return user 
};

export const checkAdminStatus = (email) => {
    // Example: Check if the user is an admin based on email
    const user = ProfileData.find((user) => user.email === email);
    return user ? user.isAdmin : false;
};

export const getProfileData = (email) => {
    // Example: Retrieve profile data based on email
    const user = ProfileData.find((user) => user.email === email);
    return user ? user : null;
};