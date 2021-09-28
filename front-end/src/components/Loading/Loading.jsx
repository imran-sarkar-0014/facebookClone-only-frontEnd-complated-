import React from 'react'
import './loading.css'

const Loading = () => {
    return (
        <div className="loading">
            <img
                className='load-img'
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                alt="" className="load-img" />

            <h3 className='load-text'>facebook</h3>
        </div>
    )
}

export default Loading