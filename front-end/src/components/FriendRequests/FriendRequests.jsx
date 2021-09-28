import React from 'react'
import './friendRequest.css'

import ShowPerson from '../ShowPerson/ShowPerson'

const FriendRequests = () => {
    return (
        <div className="container-fluid">
            <h3 className="lable">Friend Requests</h3>
            <div className="persons">
                <ShowPerson />
                <ShowPerson />
                <ShowPerson />
                <ShowPerson />
                <ShowPerson />
                <ShowPerson />
            </div>
        </div>
    )
}

export default FriendRequests
