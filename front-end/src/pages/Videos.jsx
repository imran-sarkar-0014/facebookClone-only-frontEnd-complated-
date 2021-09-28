import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UPDATE_NAV } from '../store/actions/navAction'

const Videos = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: UPDATE_NAV,
            payload: 'video'
        })
    }, [])

    return (
        <div className="no-videos">
            No video
        </div>
    )
}

export default Videos
