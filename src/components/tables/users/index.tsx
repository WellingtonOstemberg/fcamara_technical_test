import { UserType } from 'types'
import { TableUsersTBody, TableUsersTHead } from './components'
import * as S from './styles'
import { handleFilter } from './utils'

export const TableUsers = ({ users }: { users: UserType[] }) => {
  return (
    <>
      <S.TableUsers>
        <TableUsersTHead handleFilter={handleFilter} />
        <TableUsersTBody users={users} />
      </S.TableUsers>
    </>
  )
}
