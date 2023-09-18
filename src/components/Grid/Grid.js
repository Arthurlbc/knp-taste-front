import React, { useEffect } from "react";
import { Cell } from "components/Cell";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { click, loadGame } from '../../slices/gameSlice'

const Grid = () => {

  const grid = useSelector(state => state.game.grid)
  const dispatch = useDispatch()

  const handleCellClick = (x, y) => {
    dispatch(click({ x, y }));
  };


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
            y={indexLine}
            onClick={() => handleCellClick(indexLine, indexCell)}
          />
        })
      })}
    </Div>
  )
}
export default Grid

