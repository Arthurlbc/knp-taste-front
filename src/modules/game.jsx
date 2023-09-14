
const KILL = 'game::KILL'
const LIVE = 'game::LIVE'
const START = 'game::START'
const CLICK = 'game::click'


export const click = (state, action) => ({
    type: CLICK,
})

export const start = (height, width) => dispatch => {

    return dispatch({
        type: START,
    })

}

export const kill = cells => ({
    type: KILL,
    cells
})

export const live = cells => ({
    type: LIVE,
    cells
})

export function reducer(state = INITIAL_STATE, action) {
    const { type } = action

    switch (type) {
        case 'game::KILL':
            return {
                alive: false
            }
        case 'game::LIVE':
            return {
                alive: true
            }
        case 'game::CLICK':
            console.log('click')
            return {
                ...state = false ?? true
            }
        default:
            return state
    }

}

const INITIAL_STATE = {
    alive: false
}