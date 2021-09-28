import React from 'react'
import './commentBox.css'

//
import send from './send.svg';
import { Avatar } from '@material-ui/core';

const CommentBox = () => {
    return (
        <div className="comment-box">
            <div className="comment-input-avater">
                <Avatar />
            </div>
            <div className="comment-input-wrapper">
                <input type="text" className="comment-input" placeholder="Write Something..." />
            </div>
            <div className="send-wrapper">
                <img className="send-button" src={send} />
            </div>
        </div>
    )
}

export default CommentBox
