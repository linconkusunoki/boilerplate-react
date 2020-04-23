import React from 'react'

const useFetch = (fn, params) => {
  const [response, setResponse] = React.useState(null)
  const [error, setError] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await fn(params)
        setResponse(data)
        setIsLoading(false)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [fn, params])

  return { response, error, isLoading }
}

export default useFetch
