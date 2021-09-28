import React from 'react'
import './menuComponent.css'
import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_TOKEN } from '../../store/actions/userAction'
import { Link } from 'react-router-dom'

import { Avatar } from '@material-ui/core';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        height: '30px',
        width: '30px',
        color: '#8e8f92',
        '&:hover': {
            color: 'rgb(63, 63, 208)'
        }
    }
})


const MenuComponent = () => {
    const dispatch = useDispatch()
    const classes = useStyles()

    const onLogOutHandler = () => {
        localStorage.setItem('token', '')
        dispatch({
            type: UPDATE_TOKEN,
            payload: ''
        })
    }

    return (
        <div className='menu-container'>

            <div className="menu-profile-wrapper">
                <div className="menu-profile">
                    <Avatar />
                    <div className="user-name-item">
                        <p className="user-name-item1">Imran Sarkar</p>
                        <p className="user-name-item2">view profile</p>
                    </div>
                </div>
            </div>

            <div className="menu-item-container">
                <Link to='/' className="menu-item">
                    <NotificationsNoneOutlinedIcon className={classes.root} />
                    <span className="menu-item-text">
                        Feed
                    </span>
                </Link>
                <Link to='/friends' className="menu-item">
                    <NotificationsNoneOutlinedIcon className={classes.root} />
                    <p className="menu-item-text">
                        Friends
                    </p>
                </Link>
                <Link to='/message' className="menu-item">
                    <NotificationsNoneOutlinedIcon className={classes.root} />
                    <p className="menu-item-text">
                        Message
                    </p>
                </Link>
                <Link to='/friends' className="menu-item">
                    <NotificationsNoneOutlinedIcon className={classes.root} />
                    <p className="menu-item-text">
                        Friend Requests
                    </p>
                </Link>
                <Link to='/videos' className="menu-item">
                    <NotificationsNoneOutlinedIcon className={classes.root} />
                    <p className="menu-item-text">
                        Videos
                    </p>
                </Link>
                <Link to='notifications' className="menu-item">
                    <NotificationsNoneOutlinedIcon className={classes.root} />
                    <p className="menu-item-text">
                        Notifications
                    </p>
                </Link>
            </div>

            <button className='logout-btn' onClick={onLogOutHandler}>Log Out</button>
        </div>
    )
}
export default MenuComponent