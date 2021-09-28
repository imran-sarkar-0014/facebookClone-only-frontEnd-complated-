import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { UPDATE_NAV } from '../store/actions/navAction'

import MenuComponent from '../components/MenuComponent/MenuComponent'


const Menu = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch({
            type: UPDATE_NAV,
            payload: 'menu'
        })
    }, [])

    return (
        <MenuComponent />
    )
}

export default Menu
