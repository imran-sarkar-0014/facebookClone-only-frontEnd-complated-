import React from 'react'
import './groupButton.css'

const GroupButton = ({
    button1 = '', button2 = ''
}) => {
    return (
        <div className="group-button">
            <button className="button button-first">{button1.name}</button>
            <button className="button">{button2.name}</button>
        </div>
    )
}

export default GroupButton