import { useUsersAsyncSlice } from 'store/users'
import { getAllUsers } from '../api'

export const useAllUsers = () => {
  const { getUsers, usersLoading, usersAsyncSlice } = useUsersAsyncSlice()

  const getFetchUsers = async () => {
    usersLoading()
    const users = await getAllUsers()
    getUsers(users)
  }

  return { usersAsyncSlice, getFetchUsers }
}
