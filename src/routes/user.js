import React from "react"
import { useSelector } from "react-redux"

const UserInfo = () => {
    const user = useSelector((state) => state.auth.profile)
    return (
        <>
         <img src={user.profile_pic} width={200} />
         <p>Name: {user?.name}</p>
         <p>Email: {user?.email}</p>
         <p>Phone: {user?.phone}</p>
         <p>Website: {user?.website}</p>
         <p>User: {user?.isAdmin ? 'Admin' : 'User'}</p>
        </>
    )
}



export default UserInfo