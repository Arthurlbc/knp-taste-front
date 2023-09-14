import { configureStore } from '@reduxjs/toolkit'
import { gameSlice } from 'components/slices/gameSlice'

export const store = configureStore({
    reducer: {
        game: gameSlice.reducer
    },
})