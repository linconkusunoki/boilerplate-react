import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import count from './ducks/count'
import user from './ducks/user'
import auth from './ducks/signin'

export default combineReducers({
  auth,
  count,
  form,
  user,
})
