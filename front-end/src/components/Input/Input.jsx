import { placeholder } from '@babel/types'
import React from 'react'
import './input.css'

const Input = ({ placeholder, type, state, setState }) => {

    const onChangeHandler = (e) => {
        setState(e.target.value)

    }

    return <input value={state} onChange={onChangeHandler} placeholder={placeholder} className='input' type={type} />
}

export default Input