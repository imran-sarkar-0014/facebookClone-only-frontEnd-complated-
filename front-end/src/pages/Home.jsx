import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UPDATE_NAV } from '../store/actions/navAction'

import CreatePost from '../components/CreatePost/CreatePost'
import Post from '../components/Post/Post'
import Create from '@material-ui/icons/Create'

const Home = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: UPDATE_NAV,
            payload: 'home'
        })
    }, [])

    return (
        <>
            <CreatePost />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </>
    )
}

export default Home