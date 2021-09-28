import React from 'react'
import './postBody.css'


//
import { Avatar } from '@material-ui/core';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatBubbleOutlineOutlinedIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';


const PostBody = () => {
    return (
        <div className="post-container">
            <div className="post-top">
                <div className="post-top-left-wrapper">
                    <Avatar />
                    <div className="user-details">
                        <span className="user-name">imran sarkar</span>
                        <div className="post-timestamps">3 min ago</div>
                    </div>
                </div>
                <div className="post-top-right">
                    <MoreVertOutlinedIcon />
                </div>
            </div>
            <div className="post-middle">
                <div className="post-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias recusandae vel in exercitationem illum esse ea optio rem soluta, nobis voluptate repudiandae, aliquid excepturi facilis amet fugit quo at aliquam?</div>
                <div className="post-img-container">
                    <img className="post-img" src="https://images.pexels.com/photos/556666/pexels-photo-556666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                </div>
            </div>
            <div className="post-bottom">
                <div className="bottom-item-wrapper">
                    <div className="bottom-item">
                        <ThumbUpAltOutlinedIcon />
                        <p className="count">10</p>
                    </div>
                </div>
                <div className="bottom-item-wrapper">
                    <div className="bottom-item">
                        <ChatBubbleOutlineOutlinedIcon />
                        <p className="count">10</p>
                    </div>
                </div>
                <div className="bottom-item-wrapper">
                    <div className="bottom-item">
                        <ShareOutlinedIcon />
                        <p className="count">10</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PostBody
