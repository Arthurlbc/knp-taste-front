import React from "react";
import { Cell } from "components/Cell";
import { useSelector } from "react-redux";
import styled from "styled-components";


const Grid = () => {

  const grid = useSelector(state => state.game.grid)
  console.log(grid)


  const Div = styled.div`
  width: 25em;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  `

  return (
    <Div>
      {grid.map((line, indexLine) => {
        return line.map((alive, indexCell) => {
          return <Cell
            alive={alive}
            x={indexCell}
            y={indexLine} />
        })
      })}
    </Div>
  )
}
export default Grid

