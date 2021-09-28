import React, { useEffect } from 'react'
import ProfileComponent from '../components/ProfileComponent/Profile'


import axiosInstance from '../helper'
import { useSelector } from 'react-redux'


const Profile = () => {

    const user = useSelector(state => state.user)

    useEffect(() => {

    }, [])

    return (
        <div className="full-screen">
            <ProfileComponent user={user} />
        </div>
    )
}

export default Profile