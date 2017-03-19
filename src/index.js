import React from 'react'
import ReactDOM from 'react-dom'
import Login from './components/Login'
import Shout from './components/Shout'
import Timeline from './components/Timeline'
import { Router, Route, browserHistory } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { reducer as formReducer } from 'redux-form'
import { main } from './reducers/main'
import ReduxThunk from 'redux-thunk'
import createLogger from 'redux-logger'

const logger = createLogger();
const middlewares = [ReduxThunk, logger]
const reducers = {
  form: formReducer,
  main
}

const reducer = combineReducers(reducers)
const store = createStore(reducer, applyMiddleware(...middlewares))

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route exact path="/" component={Login} />
      <Route path="/shout" component={Shout} />
      <Route path="/timeline/(:user)" component={Timeline} />
    </Router>
  </Provider>
  , document.getElementById('app'))
