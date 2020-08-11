import useSWR from 'swr'

import { UserHook } from '../types/user'
import utils from '../utils'

export default function useUsers(): UserHook {
  const { data, error } = useSWR('/users', utils.fetcher)
  return {
    users: data,
    isLoading: !error && !data,
    isError: error,
  }
}
