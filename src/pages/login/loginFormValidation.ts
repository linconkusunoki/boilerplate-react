import utils from '../../utils'
import { AuthValues } from '../../types/auth'

export default function validate({ email, password }: AuthValues): AuthValues {
  let errors: AuthValues = {}

  if (!email) {
    errors.email = 'Email is required'
  } else if (!utils.isValidEmail(email)) {
    errors.email = 'Email is invalid'
  }

  if (!password) {
    errors.password = 'Password is required'
  } else if (password.length < 8) {
    errors.password = 'Password must have at least 8 characters'
  }

  return errors
}
