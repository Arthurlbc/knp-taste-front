import React from "react";
import { Cell } from "components/Cell";
import './Grid.css'


const Grid = (props) => {

  const grid = []
  for (let row = 0; row < 18; row++) {
    grid.push([])
    for (let col = 0; col < 10; col++) {
      grid[row].push(<Cell key={`${col}${row}`} color="1" />)
    }
  }

  return (
    <div className='grid'>
      {grid}
    </div>
  )
}
export default Grid

