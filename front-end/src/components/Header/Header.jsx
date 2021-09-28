import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'


//icons
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';


//
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    search: {
        fontSize: '25px',
        fontWeight: '100'
    },
    avater: {
        height: '32px',
        width: '32px'
    }
    ,
    photo: {
        height: '32px',
        width: '32px',
        color: '#4b4c4f'
    },
});

const Header = () => {
    const classes = useStyles();
    return (
        <div className="container-fluid-header" >

            <div className="header-avater-wrapper">
                <Link to='/profile'>
                    <Avatar className={classes.avater} />
                </Link>
            </div>
            <div className="header-search-wrapper">
                <SearchIcon className={classes.search} />
                <input placeholder="Search Facebook" type="text" className="header-search-input" />
            </div>
            <div className="header-photoicon-wrapper">
                <PhotoCameraIcon className={classes.photo} />
            </div>
        </div>
    )
}

export default Header

//npm install @material-ui/icons