import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import count from './CountReducer'
import user from './UserReducer'
import auth from './AuthReducer'

export default combineReducers({
  auth,
  count,
  form,
  user,
})
