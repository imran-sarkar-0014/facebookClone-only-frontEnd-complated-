import React from 'react'
import './friendSuggestions.css'

import ShowPerson from '../ShowPerson/ShowPerson'

const friendSuggestions = () => {
    return (
        <div className="container-fluid">
            <h3 className="lable">Friend Suggestions</h3>
            <div className="persons">
                <ShowPerson />
                <ShowPerson />
                <ShowPerson />
                <ShowPerson />
                <ShowPerson />
                <ShowPerson />
            </div>
        </div>
    )
}

export default friendSuggestions