import { combineReducers } from 'redux'
import posts from './posts'
import comments from './comment'

const rootReducer = combineReducers({posts, comments})

export default rootReducer;