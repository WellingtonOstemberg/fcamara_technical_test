import { TableUsers } from 'components'
import { usersMock } from 'mocks/users'

export const Users = () => {
  return <TableUsers users={usersMock} />
}
