import React from 'react'
import './Cell.css'
import { useDispatch } from 'react-redux'
import { click } from 'modules/game'


export const Cell = (() => {

    const dispatch = useDispatch()
    const onClick = () => {
        dispatch(click())
    }
    return (
        <div className='cell' onClick={onClick}></div>
    )
})