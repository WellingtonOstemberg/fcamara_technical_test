import { useState } from 'react'
import { getAllUsers } from '../api'
import { getAllUsersTypes } from '../api/types'

export const useAllUsers = () => {
  const [allUsers, setAllUsers] = useState<getAllUsersTypes>()

  const getUsers = async (): Promise<void> => {
    setAllUsers({ users: [], error: '', isLoading: true })

    const { users, error, isLoading } = await getAllUsers()

    setAllUsers({ users, error, isLoading })
  }

  return { getUsers, allUsers }
}
