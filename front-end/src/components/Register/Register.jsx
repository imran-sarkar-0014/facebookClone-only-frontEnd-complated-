import React, { useEffect, useState } from 'react'
import './register.css'
import axiosInstance from '../../helper'
import { useDispatch } from 'react-redux'
import { UPDATE_TOKEN } from '../../store/actions/userAction'

import Input from '../Input/Input'

const Register = () => {
    const dispatch = useDispatch()
    // use today
    const date = new Date()

    // states of register form
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [dateOfBirth, setDateOfBirth] = useState({
        date: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear(0)
    })

    const [gender, setGender] = useState(0)

    const [dateArr, setDateArr] = useState([])
    const [monthArr, setMonthArr] = useState([])
    const [yearArr, setYearArr] = useState([])
    useEffect(() => {

        let i = 1;
        let arr = []
        for (; i <= 31; i++)
            arr.push(i)
        setDateArr(arr)

        setMonthArr([
            [0, 'jan'],
            [1, 'feb'],
            [2, 'march'],
            [3, 'april'],
            [4, 'may'],
            [5, 'june'],
            [6, 'july'],
            [7, 'aug'],
            [8, 'sept'],
            [9, 'oct'],
            [10, 'nov'],
            [11, 'dec']
        ])

        arr = []
        const limit = date.getFullYear()
        i = limit - 60
        for (; i <= limit; i++)
            arr.push(i)
        setYearArr(arr)

    }, [])

    const onDOBChangeHandler = (e) => {

        const name = e.target.name
        const value = e.target.value

        setDateOfBirth(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const onGenderChangeHandler = (e) => {
        setGender(e.target.value)
    }

    const onSubmitHandler = (e) => {
        alert('submiting')
        e.preventDefault()

        const body = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            dateOfBirth: {
                year: dateOfBirth.year,
                month: dateOfBirth.month,
                date: dateOfBirth.date
            },
            gender: gender
        }

        axiosInstance.post('/api/auth/register', body)
            .then(res => {
                localStorage.setItem('token', res.data)
                dispatch({
                    type: UPDATE_TOKEN,
                    payload: res.data
                })
            }).catch(err => {
                alert(`err is : ${err}`)
                console.log(err)
            });
    }

    return (
        <div className="full-screen .bg-color">
            <div className="registerwrapper">
                <h1 className="register-heading">facebook</h1>
                {/* <p className="register-text">Facebook helps you connect and share with the people in your life.</p> */}


                {/* name input box   */}
                <form className="register-form-wrapper">
                    <div className="register-name-box">

                        {/* first name */}
                        <div className="input-box">
                            <Input placeholder="First name" type='text' state={firstName} setState={setFirstName} />
                        </div>

                        {/* last name */}
                        <div className="input-box">
                            <Input placeholder="Last name" type='text' state={lastName} setState={setLastName} />
                        </div>

                    </div>

                    {/* { email */}
                    <div className="input-box">
                        <Input placeholder="Enter your email address" type='email' state={email} setState={setEmail} />
                    </div>

                    {/* password fild */}
                    <div className="input-box">
                        <Input placeholder="Create a Password" type='password' state={password} setState={setPassword} />
                    </div>

                    {/* Birth Day */}
                    <p className='register-form-text'>Date of birth</p>
                    <div className="register-dob-box">

                        {/* DATE */}
                        <div className="input-box">
                            <select
                                value={dateOfBirth.date}
                                onChange={onDOBChangeHandler}
                                name='date'>
                                {
                                    dateArr.map((date, idx) => (
                                        <option key={idx} value={date}>{date}</option>
                                    ))
                                }
                            </select>
                        </div>
                        {/* Month */}
                        <div className="input-box">
                            <select
                                value={dateOfBirth.month}
                                onChange={onDOBChangeHandler}
                                name='month'>
                                {
                                    monthArr.map((month, idx) => (

                                        <option key={idx} value={month[0]}> {month[1]}</option>
                                    ))
                                }
                            </select>
                        </div>

                        {/* YEAR */}
                        <div className="input-box">
                            <select
                                value={dateOfBirth.year}
                                onChange={onDOBChangeHandler}
                                name='year'>
                                {
                                    yearArr.map((year, idx) => (
                                        <option key={idx} value={year}>{year}</option>
                                    ))
                                }
                            </select>
                        </div>

                    </div>

                    {/* Gender */}
                    <p className="register-form-text">Gender</p>
                    <div className="gender-input-box" onChange={onGenderChangeHandler}>
                        <div className="input-box">
                            <label >Male</label>
                            <input type="radio" name="gender" value="1" />
                        </div>
                        <div className="input-box">
                            <label >Female</label>
                            <input type="radio" name="gender" value="2" />
                        </div>
                        <div className="input-box">
                            <label >Custom</label>
                            <input type="radio" name="gender" value="3" />
                        </div>
                    </div>


                    <button
                        onClick={onSubmitHandler}
                        className="register-btn input-box"
                    >Create An Account</button>


                </form>
            </div>
        </div>
    )
}

export default Register