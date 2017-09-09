import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import categories from './categories'
import comments from './comments'
import posts from './posts'
import ui from './ui'


const rootReducer = combineReducers({ categories, comments, posts, ui, router: routerReducer })

export default rootReducer;