import utils from '../../utils'

export default function validate(values) {
  let errors = {}

  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!utils.isValidEmail(values.email)) {
    errors.email = 'Email is invalid'
  }

  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 8) {
    errors.password = 'Password must have at least 8 characters'
  }

  return errors
}
