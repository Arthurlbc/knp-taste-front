import React from 'react'
import './Cell.css'
import styled from 'styled-components'


export const Cell = ((props) => {
    const { x, y, alive } = props

    // TODO use styled lib
    // const div = styled.div`
    // width: 5em;
    // height: 5em;
    // border: 1px solid black;
    // box-sizing: border-box;
    // {$alive ? { backgroundColor: 'black' } : { backgroundColor: 'white' }}
    // backgroundColor: ${alive? "white" : "black  "};`
    

    return (
        <div
            className='cell'
            style={alive ? { backgroundColor: 'black' } : { backgroundColor: 'white' }}  >
            {x}- {y}
        </div>
    )
})
