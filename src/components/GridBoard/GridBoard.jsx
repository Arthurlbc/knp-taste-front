import React from 'react'
import GridSquare from './GridSquare'
import './GridBoard.css'


export default function GridBoard(props) {


    const grid = []
    // for (let row = 0; row < 100; row++) {
    //     grid.push([])
    // for (let col = 0; col < 100; col++) {
    //     grid[row].push(<GridSquare key={`${col}${row}`} color="1" />)
    // }
    // }
    for (let $i = 0; $i < 100; $i++) {
        grid.push([])
        for (let $i = 0; $i < 100; $i++) {
            grid.push(<GridSquare color="1" />)
        }

    }
    console.log(grid)

    // for (let row = 0; row < 100; row++) {
    //     grid.push([])
    //     grid[row].push(<GridSquare color="1" />)
    // }
    // grid.forEach((element, key) => {

    //     grid[key].push(<GridSquare color="1" />)
    // })

    return (
        <div className='grid-board'>
            {grid}
        </div>
    )
}