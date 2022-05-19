import { CardHeaderCampanha, TableUsers } from 'components'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAllUsers } from 'services'

export const Users = () => {
  const navigate = useNavigate()
  const { getFetchUsers, usersAsyncSlice } = useAllUsers()
  const handleNavigate = () => {
    navigate('/usuarios/novo')
  }

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
