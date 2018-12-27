export const loadState = () => {
  const serializedState = sessionStorage.getItem('state')
  if (serializedState === null) {
    return undefined
  }
  return JSON.parse(serializedState)
}

export const saveState = state => {
  try {
    const serializedState = JSON.stringify(state)
    sessionStorage.setItem('state', serializedState)
  } catch (err) {
    // Ignore write errors
  }
}
