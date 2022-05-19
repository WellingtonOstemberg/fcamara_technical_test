import { useUsersAsyncSlice } from 'store/users'
import { UserType } from 'types'
import { postUser } from '../api'

export const usePotUser = () => {
  const { setUser, usersLoading, usersAsyncSlice } = useUsersAsyncSlice()

  const postFetchUser = async (userParam: UserType) => {
    usersLoading()
    const user = await postUser(userParam)
    setUser(user.user)
  }

  return { usersAsyncSlice, postFetchUser }
}
