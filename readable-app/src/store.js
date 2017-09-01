import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers/root'

export const history = createHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = routerMiddleware(history)
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(middleware)
  )
);

export default store;

