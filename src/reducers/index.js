import { combineReducers } from 'redux'
import count from 'reducers/Count'
import user from 'reducers/User'

export default combineReducers({ count, user })
