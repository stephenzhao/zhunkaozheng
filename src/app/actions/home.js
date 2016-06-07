import reqwest from 'reqwest'
import cache from 'utils/cache'
import * as types from '../constants/ActionTypes'

export function fetchMovies() {
    return (dispatch, getState) => {
        const url = `${API}/movie/v1/movies?status=1&cityId=110100&limit=80&offset=0&__uni_source=1.3`

        return reqwest(url)
            .then(resp => {
                dispatch(receiveMovies(resp.data.datas))
                return resp
            })
    }
}

function receiveMovies(movies) {
    return {
        type: types.RECEIVE_MOVIES,
        movies,
    }
}
