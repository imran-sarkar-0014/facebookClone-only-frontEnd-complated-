import React from 'react'
import './showPerson.css'

import { Avatar } from '@material-ui/core'
import GroupButton from '../GroupButton/GroupButton'



const ShowPerson = () => {
    return (
        <div className="person-container-wrapper">
            <div className="person-container">
                <div className="person-img">
                    <Avatar />
                </div>
                <div className="info-container">
                    <span className="person-name">steve jobs</span>
                    <GroupButton />
                </div>
            </div>
        </div>
    )
}

export default ShowPerson
