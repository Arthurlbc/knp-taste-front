import React from 'react'
import styled from 'styled-components'


export const Cell = ((props) => {
    const { x, y, alive } = props

    // TODO use styled lib
    const Div = styled.div`
    width: 5em;
    height: 5em;
    border: 1px solid black;
    box-sizing: border-box;
    ${alive} ? { backgroundColor: 'black' }; : backgroundColor: 'white';
    `

    return <Div>{x}- {y}</Div>

})
