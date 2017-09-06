import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import categories from './categories'
import comments from './comments'
import posts from './posts'


const rootReducer = combineReducers({ categories, comments, posts, router: routerReducer })

export default rootReducer;