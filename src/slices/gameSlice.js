import { createSlice } from '@reduxjs/toolkit'

const lines = Array.from(Array(5).keys())
const grid = lines.map(() => {
    return Array.from(Array(5).keys()).map(() => {
        return false
    })

})

const initialState = {
    alive: false,
    grid: grid
}

export const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        click: (state, action) => {
            const newGrid = JSON.parse(JSON.stringify(state.grid))
            newGrid[action.payload.x][action.payload.y] = true;
            return {
                ...state,
                grid: newGrid,
            }
        },
        loadGame: (state) => {
            const newGrid = state.grid.map((line, index1) => {

                return line.map((cell, index2) => {
                    const aroundCellsValues = getAroundCellValue(grid, index1, index2);
                    if (aroundCellsValues.filter((value) => value === true).length > 3) {

                        return true
                    } else {

                        return false
                    }
                });
            });

            return {
                ...state,
                grid: newGrid,
            }
        },
    },
})

function getAroundCellValue(grid, x, y) {

    const widthGrid = grid[0].length
    const heightGrid = grid.length
    const boolCells = []

    if (x > 0) {
        boolCells.push(grid[x - 1][y]);
        if (y > 0) {
            boolCells.push(grid[x - 1][y - 1]);
        }
        if (y < widthGrid - 1) {
            boolCells.push(grid[x - 1][y + 1]);
        }
    }
    if (y > 0) {
        boolCells.push(grid[x][y - 1]);
    }
    if (y < widthGrid - 1) {
        boolCells.push(grid[x][y + 1]);
    }
    if (x < heightGrid - 1) {
        boolCells.push(grid[x + 1][y]);
        if (y > 0) {
            boolCells.push(grid[x + 1][y - 1]);
        }
        if (y < widthGrid - 1) {
            boolCells.push(grid[x + 1][y + 1]);
        }
    }

    return boolCells;
}

export const { click, loadGame } = gameSlice.actions
export default gameSlice.reducer
