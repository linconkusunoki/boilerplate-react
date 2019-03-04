import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import count from 'reducers/CountReducer'
import user from 'reducers/UserReducer'

export default combineReducers({
  count,
  user,
  form,
})
