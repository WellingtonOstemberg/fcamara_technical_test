import { useUsersAsyncSlice } from 'store/users'
import { UserType } from 'types'
import { putUser } from '../api'

export const usePutUser = () => {
  const { setUserUpdate, usersLoading, usersAsyncSlice } = useUsersAsyncSlice()

  const putFetchUser = async (userParam: UserType) => {
    usersLoading()
    const user = await putUser(userParam)
    setUserUpdate(user.user)
  }

  return { usersAsyncSlice, putFetchUser }
}
