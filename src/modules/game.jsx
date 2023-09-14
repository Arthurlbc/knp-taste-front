
const KILL = 'game::KILL'
const LIVE = 'game::LIVE'
const START = 'game::START'


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
                state: { className: 'non-activ' }
            }
        case 'game::LIVE':
            return {
                state: { className: 'activ' }
            }
        default:
            return state
    }

}

const INITIAL_STATE = {
    grid: [[]]
}