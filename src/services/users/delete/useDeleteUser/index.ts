import { useUsersAsyncSlice } from 'store/users'
import { deleteUser } from '../api'

export const useDeleteUser = () => {
  const { setUserDelete, usersLoading, usersAsyncSlice } = useUsersAsyncSlice()

  const deleteFetchUser = async (id: number) => {
    console.log(id, 'userParam')
    usersLoading()
    const user = await deleteUser(id)
    user.userId && setUserDelete(user.userId)
  }

  return { usersAsyncSlice, deleteFetchUser }
}
