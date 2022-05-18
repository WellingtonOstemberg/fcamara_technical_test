import { CardHeaderCampanha, TableUsers } from 'components'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAllUsers } from 'services'

export const Users = () => {
  const navigate = useNavigate()
  const users = useAllUsers()
  const handleNavigate = () => {
    navigate('/usuarios/novo')
  }

  useEffect(() => {
    users.getUsers()
  }, [])
  useEffect(() => {
    console.log(users.allUsers), 'all'
  }, [users.allUsers])

  return (
    <>
      <CardHeaderCampanha onClick={handleNavigate} />
      {users.allUsers?.isLoading ? (
        <h1>Loading...</h1>
      ) : (
        users.allUsers?.users && <TableUsers users={users.allUsers.users} />
      )}
    </>
  )
}
