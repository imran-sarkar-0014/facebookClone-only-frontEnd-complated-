import React, { useEffect } from 'react'
import './nav.css'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux'
import { UPDATE_NAV } from '../../store/actions/navAction'



// 
import messenger_outline_dark from './messenger-outline-dark.svg'

//  Active icon
import HomeIcon from '@material-ui/icons/Home';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import MenuIcon from '@material-ui/icons/MenuOutlined';


// inactive icon
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

//
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        height: '30px',
        width: '30px',
        color: '#8e8f92',
        '&:hover': {
            color: 'rgb(63, 63, 208)'
        }
    },
    active: {
        height: '30px',
        width: '30px',
        color: 'blue'
    }
})

const Nav = () => {
    const classes = useStyles()
    const navReducer = useSelector(state => state.navReducer)

    return (
        <div className="container-fluid-nav" >
            <div className="nav-icon-container">

                <div className="nav-icon-wrapper">
                    <Link to="/">
                        {
                            navReducer.home ?
                                <HomeIcon className={classes.root, classes.active} /> :
                                <HomeOutlinedIcon className={classes.root} />
                        }
                    </Link>
                </div>
                <div  className="nav-icon-wrapper">
                    <Link to="/friends">
                        {
                            navReducer.friend ?
                                <PeopleAltIcon className={classes.root, classes.active} /> :
                                <PeopleAltOutlinedIcon className={classes.root} />
                        }
                    </Link>
                </div>
                <div className="nav-icon-wrapper">
                    <img src={messenger_outline_dark} className="nav-icon" />
                </div>
                <div className="nav-icon-wrapper">
                    <Link to="/videos">
                        {
                            navReducer.video ?
                                <OndemandVideoIcon className={classes.root, classes.active} /> :
                                <OndemandVideoOutlinedIcon className={classes.root} />
                        }
                    </Link>
                </div>
                <div className="nav-icon-wrapper">
                    <Link to="/notifications">
                        {
                            navReducer.notification ?
                                <NotificationsNoneIcon className={classes.root, classes.active} /> :
                                <NotificationsNoneOutlinedIcon className={classes.root} />
                        }
                    </Link>
                </div>
                <div className="nav-icon-wrapper">
                    <Link to="/menu">
                        {
                            navReducer.menu ?
                                <MenuIcon className={classes.root, classes.active} /> :
                                <MenuOutlinedIcon className={classes.root} />
                        }
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav
