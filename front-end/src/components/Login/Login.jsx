import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { UPDATE_TOKEN } from '../../store/actions/userAction'

import axiosInstance from '../../helper'
import './login.css'

import Input from '../Input/Input'
import { Link } from 'react-router-dom'

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passVisibility, setPassVisibility] = useState(false)

    const dispatch = useDispatch()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const data = {
            email: email,
            password: password
        }

        axiosInstance.post('/api/auth/login', data)
            .then(res => {
                localStorage.setItem('token', res.data)
                dispatch({
                    type: UPDATE_TOKEN,
                    payload: res.data
                })
            }).catch(err => {
                
                console.log(err)
            })
    }

    const onVisibilityChangeHandler = () => {
        setPassVisibility(!passVisibility)
    }

    return (
        <div className="full-screen .bg-color">
            <div className="loginwrapper">
                <h1 className="login-heading">facebook</h1>
                <p className="login-text">Facebook helps you connect and share with the people in your life.</p>

                <form className="login-form-wrapper">

                    {/* email */}
                    <div className="input-box">
                        <Input
                            placeholder="Enter Your Email"
                            type='text'
                            state={email}
                            setState={setEmail} />
                    </div>

                    {/* password */}
                    <div className="input-box">
                        <Input
                            placeholder="Enter Password"
                            type={passVisibility ? 'text' : 'password'}
                            state={password}
                            setState={setPassword} />

                        {
                            passVisibility ?
                                <VisibilityIcon onClick={onVisibilityChangeHandler} /> :
                                <VisibilityOffIcon onClick={onVisibilityChangeHandler} />
                        }


                    </div>

                    {/* login Button */}
                    <button onClick={onSubmitHandler} className="login-btn input-box">Log In</button>
                    <p className='forgot-text'>Forgotten password?</p>

                    <div className="login-hr" > </div>

                    <Link to='/register' className="reg-btn-box">
                        <button className="login-create-btn">Create New Account</button>
                    </Link>

                </form>
            </div>
        </div>
    )
}

export default Login