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
    reducers: {}
    // reducers: {
    //     click: (state) => {
    //         state.grid[x][y] = false
    //     }
})
