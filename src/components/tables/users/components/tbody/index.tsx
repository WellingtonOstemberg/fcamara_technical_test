import { UserType } from 'types'
import { TabelUsersListItem } from './components/userListItem'
import * as S from './styles'

type TableUsersTBodyProps = {
  users: UserType[]
}
export const TableUsersTBody = ({ users }: TableUsersTBodyProps) => {
  return (
    <S.TableUsersTBodyStyled>
      {users.map((user) => {
        return <TabelUsersListItem user={user} key={user.email} />
      })}
    </S.TableUsersTBodyStyled>
  )
}
