import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import count from 'reducers/CountReducer'
import user from 'reducers/UserReducer'
import auth from 'reducers/AuthReducer'

export default combineReducers({
  auth,
  count,
  form,
  user,
})
