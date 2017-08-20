import { combineReducers } from 'redux'
import post from './post'
import comment from './comment'

const rootReducer = combineReducers({post, comment})

export default rootReducer;