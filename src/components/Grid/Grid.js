import React from "react";
import { Cell } from "components/Cell";
import './Grid.css'
import { Provider } from "react-redux";
import configureStore from "configureStore";


const Grid = (props) => {

  return (
    <Provider store={configureStore()}>
      <div className='grid'>
        {(() => {
          const grid = [];
          for (let row = 0; row < 50; row++) {
            grid.push([])
            for (let col = 0; col < 50; col++) {
              grid[row].push(<Cell />)
            }
          }
          return grid;
        })()}
      </div>
    </Provider>
  )
}
export default Grid

