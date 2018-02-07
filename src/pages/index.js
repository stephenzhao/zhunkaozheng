import ReactDom from 'react-dom'
import { Router, Route, Link, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { connect, Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'

import objectAssign from 'object-assign'
Object.assign = objectAssign

import configureStore from 'app/store/configureStore'

import Home from 'react-proxy?name=home!./home'
import About from 'react-proxy?name=about!./about'

const routes = (history) => (
    <Router history={history}>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
    </Router>
)

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })
const store = configureStore(appHistory)
const history = syncHistoryWithStore(appHistory, store)

ReactDom.render(
    <Provider store={store}>
    { routes(history) }
    </Provider>, document.getElementById('app')
)
