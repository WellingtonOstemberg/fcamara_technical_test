import { getAllUsersTypes } from 'services/users/get/api/types'
import { UserType } from 'types'
import { useTypedDispatch, useTypedSelector } from '../useHelpers'
import { setUser, setUsers, usersLoading, setUserUpdate } from './slice'

export const useUsersAsyncSlice = () => {
  const dispatch = useTypedDispatch()
  const usersAsyncSlice = useTypedSelector((state) => state.usersAsync)

  const setState = {
    usersLoading: () => dispatch(usersLoading()),
    getUsers: (users: getAllUsersTypes) => dispatch(setUsers(users)),
    setUser: (user: UserType) => dispatch(setUser(user)),
    setUserUpdate: (user: UserType) => dispatch(setUserUpdate(user)),
  }

  return { usersAsyncSlice, ...setState }
}
