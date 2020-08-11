export default function isValidEmail(email: string) {
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}
