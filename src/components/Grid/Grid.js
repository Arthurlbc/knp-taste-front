import React from "react";
import { Cell } from "components/Cell";
import './Grid.css'
import { useSelector } from "react-redux";


const Grid = () => {

  const grid = useSelector(state => state.game.grid)
  console.log(grid)


  return (
    <div className='grid'>
      {grid.map((line, indexLine) => {
        return line.map((alive, indexCell) => {
          return <Cell
            alive={alive}
            x={indexCell}
            y={indexLine}/>
        })
      })}
    </div>
  )
}
export default Grid

