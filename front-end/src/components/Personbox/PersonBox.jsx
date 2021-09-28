import React from 'react'
import './personBox.css'

import { Link } from 'react-router-dom'

const PersonBox = () => {
    return (
        <Link className="personBox-wrapper">
            <img
                className="personBox-img"
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="" />
        </Link>
    )
}

export default PersonBox