import React from 'react'
import './comment.css'

//
import { Avatar } from '@material-ui/core';

const Comment = () => {
    return (
        <div className="comment-container">
            <Avatar />
            <div className="comment">
                <span className="user-name">hiron mullah</span>
                <p className="comment-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur libero animi alias magni doloremque consequatur eligendi quos nisi ullam. Repellendus, accusantium consectetur deserunt fuga voluptas eos exercitationem a voluptatum minima?</p>
            </div>
        </div>
    )
}

export default Comment
