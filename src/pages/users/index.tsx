import { CardHeaderCampanha, TableUsers } from 'components'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAllUsers } from 'services'
import { useUsersAsyncSlice } from 'store/users'

export const Users = () => {
  const navigate = useNavigate()
  const { getFetchUsers } = useAllUsers()
  const handleNavigate = () => {
    navigate('/usuarios/novo')
  }

  const { usersAsyncSlice } = useUsersAsyncSlice()

  useEffect(() => {
    getFetchUsers()
  }, [])

  return (
    <>
      <CardHeaderCampanha onClick={handleNavigate} />
      <TableUsers users={usersAsyncSlice.users} />
    </>
  )
}
