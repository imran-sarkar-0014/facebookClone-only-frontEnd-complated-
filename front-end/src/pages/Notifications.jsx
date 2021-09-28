import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UPDATE_NAV } from '../store/actions/navAction'

import Notification from '../components/Notification/Notification'

const Notifications = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: UPDATE_NAV,
            payload: 'notification'
        })
    }, [])

    return (
        <div className="container">
            <Notification readed />
            <Notification />
            <Notification />
        </div>
    )
}

export default Notifications
