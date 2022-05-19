import { CardHeaderCampanha, TableUsers } from 'components'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAllUsers } from 'services'
import { UserType } from 'types'

export const Users = () => {
  const navigate = useNavigate()
  const { getFetchUsers, usersAsyncSlice } = useAllUsers()
  const [users, setUsers] = useState<UserType[]>([])
  const handleNavigate = () => {
    navigate('/usuarios/novo')
  }

  useEffect(() => {
    setUsers(
      JSON.parse(
        JSON.parse(localStorage.getItem('persist:root') || '').usersAsync,
      ).users,
    )
    getFetchUsers()
  }, [])

  return (
    <>
      <CardHeaderCampanha onClick={handleNavigate} />
      <TableUsers users={users || usersAsyncSlice.users} />
    </>
  )
}
