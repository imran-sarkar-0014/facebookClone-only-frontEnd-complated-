import React from 'react'
import './createPost.css'
import { Link } from 'react-router-dom'

import ImageIcon from '@material-ui/icons/Image';
import CreateIcon from '@material-ui/icons/Create';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const CreatePost = () => {
    return (
        <Link style={{ textDecoration: 'none' }} className="new-post-container">
            <div className="new-post-header">
                <div className="new-post-img-container">
                    <img
                        className="new-post-img"
                        src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
                        alt="" />
                </div>
                <div className="new-post-input">what's on your mind..?</div>

                <div className="img-icon" >
                    <ImageIcon />
                </div>
            </div>

            <div className="new-post-bottom">
                <div className="new-post-bottom-item">
                    <CreateIcon />
                    <p className="new-post-bottom-text">Text</p>
                </div>
                <div className="new-post-bottom-item">
                    <VideoCallIcon />
                    <p className="new-post-bottom-text">Video</p>
                </div>
                <div className="new-post-bottom-item">
                    <LocationOnIcon />
                    <p className="new-post-bottom-text">Location</p>
                </div>
            </div>
        </Link>
    )
}

export default CreatePost