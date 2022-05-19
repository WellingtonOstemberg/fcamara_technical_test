import { UserType } from 'types'
import { TableUsersTBody, TableUsersTHead } from './components'
import * as S from './styles'

export const TableUsers = ({ users }: { users: UserType[] }) => {
  return (
    <>
      <S.TableUsers>
        <TableUsersTHead />
        <TableUsersTBody users={users} />
      </S.TableUsers>
    </>
  )
}
