import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from 'modules';
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const composeEnhancers = composeWithDevTools({})

export default (initialState) => {
    const store = createStore(
        rootReducer,
        initialState,
        composeEnhancers(
            applyMiddleware(thunk)
        ))
    return store
}