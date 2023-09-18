import React from 'react'
import styled from 'styled-components'


export const Cell = ((props) => {
    const { x, y, alive, onClick } = props

    const Div = styled.div`
    width: 5em;
    height: 5em;
    border: 1px solid black;
    box-sizing: border-box;
    background-color: ${(alive ? 'grey' : 'white')};
    `

    return <Div onClick={onClick}>{x}- {y}</Div>

})
