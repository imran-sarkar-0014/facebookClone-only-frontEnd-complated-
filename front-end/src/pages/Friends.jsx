import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UPDATE_NAV } from '../store/actions/navAction'

// it's components
import FriendRequests from '../components/FriendRequests/FriendRequests'
import FriendSuggestions from '../components/FriendSuggestions/FriendSuggestions'

const Friends = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: UPDATE_NAV,
            payload: 'friend'
        })
    }, [])
    return (
        <>
            <FriendRequests />
            <FriendSuggestions />
        </>
    )
}

export default Friends
