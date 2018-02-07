import cache from 'utils/cache'
import * as types from '../constants/ActionTypes'

const initialState = {
    movies: [],
}

export default function root(state = initialState, action) {
    switch (action.type) {
        case types.RECEIVE_MOVIES:
            {
                return Object.assign({}, state, {
                    movies: action.movies
                })
            }

        default:
            return state
    }
}
