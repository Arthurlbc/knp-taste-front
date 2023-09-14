import React from 'react'
import './Cell.css'


export const Cell = (({ state }) => {

    const className = `${state}-cell cell`

    return (
        <div className='non-activ-cell'></div>
    )
})