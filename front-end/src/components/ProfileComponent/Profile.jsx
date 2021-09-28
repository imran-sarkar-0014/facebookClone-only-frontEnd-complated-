import React, { useEffect } from 'react'
import './profile.css'

import GroupButton from '../GroupButton/GroupButton'
import PersonBox from '../Personbox/PersonBox'
import CreatePost from '../CreatePost/CreatePost'
import Post from '../Post/Post'

const Profile = ({ user }) => {

    return (
        <div className='profile-container'>

            <div className="profile-header-cotainer">
                {/* cover image */}
                <div className="cover-img-wrapper">
                    <img src="https://images.pexels.com/photos/1535907/pexels-photo-1535907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="non" className="cover-img" />
                </div>
                {/* profile image */}
                <div className="profile-img-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="non" className="profile-img" />
                </div>
            </div>

            <div className="profile-container">

                <div className="profile-info-container">
                    {/* profile name */}
                    <div className="name-container">
                        <p className="profile-name">{`${user.firstName} ${user.lastName}`}</p>
                        <p className="profile-slog">Something unique in this Profile.</p>
                    </div>

                    {/* Profile Buttons */}
                    <div className="profile-buttons">
                        <GroupButton
                            button1={{
                                name: 'Confirm'
                            }}
                            button2={{
                                name: 'Edit Profile'
                            }}
                        />
                        <button className='btn-more'>...</button>
                    </div>

                    <div className="user-about">
                        <p>Current Town City</p>
                        <p>WorkPlace</p>
                        <p>School or University</p>
                        <p>Home Town</p>
                        <p>Relationship stats</p>
                    </div>

                </div>

                {/* Friends Container */}
                <span className="text-friend">Friends</span>

                <div className="profile-friends-container">
                    <PersonBox />
                    <PersonBox />
                    <PersonBox />
                    <PersonBox />
                    <PersonBox />
                    <PersonBox />

                </div>

                <div className="new-post-box">
                    <CreatePost />
                </div>

                <div className="post-box">
                    <Post />
                </div>

            </div>

        </div>
    )
}

export default Profile