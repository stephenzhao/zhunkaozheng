import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux'

let middlewares = [thunk]
let MODE = process.env.MODE

if (MODE !== 'release') {
    let createLogger = require('redux-logger')
    const logger = createLogger({
        level: 'info',
        logger: console,
        collapsed: true
    })

    middlewares = [...middlewares, logger]
}

module.exports = function configureStore(history, initialState) {
    middlewares = [...middlewares, routerMiddleware(history)]
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(reducer, initialState)
}
