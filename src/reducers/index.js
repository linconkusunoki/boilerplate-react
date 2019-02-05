import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import count from 'reducers/Count'
import user from 'reducers/User'

export default combineReducers({
  count,
  user,
  form,
})
