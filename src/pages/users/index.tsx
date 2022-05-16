import { CardHeaderCampanha, TableUsers } from 'components'
import { usersMock } from 'mocks/users'
import { useNavigate } from 'react-router-dom'

export const Users = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate('/usuarios/novo')
  }

  return (
    <>
      <CardHeaderCampanha onClick={handleNavigate} />
      <TableUsers users={usersMock} />
    </>
  )
}
