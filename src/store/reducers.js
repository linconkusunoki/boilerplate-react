import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import count from './ducks/count'
import users from './ducks/users'
import auth from './ducks/signin'

export default combineReducers({
  auth,
  count,
  form,
  users,
})
