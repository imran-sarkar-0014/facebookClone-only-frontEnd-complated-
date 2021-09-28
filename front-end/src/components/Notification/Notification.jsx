import React from 'react'
import './notification.css'

import { Avatar } from '@material-ui/core'

const Notification = ({ readed }) => {
    return (
        <div className={readed ? "notification-container" : "notification-container unseen"}>
            <Avatar />
            <div className="notification-body">
                <span className="notification-text">Some One comment on your post</span>
                <p className="notification-timestamps">30 min ago</p>
            </div>
        </div >
    )
}

export default Notification
