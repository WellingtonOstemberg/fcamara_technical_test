import { getAllUsersTypes } from 'services/users/get/api/types'
import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import { setUsers, usersLoading } from './slice'

export const useUsersAsyncSlice = () => {
  const dispatch = useTypedDispatch()
  const usersAsyncSlice = useTypedSelector((state) => state.usersAsync)

  const setState = {
    usersLoading: () => dispatch(usersLoading()),
    getUsers: (users: getAllUsersTypes) => dispatch(setUsers(users)),
  }

  return { usersAsyncSlice, ...setState }
}
