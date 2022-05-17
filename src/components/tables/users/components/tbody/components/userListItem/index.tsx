import { InputSwitch } from 'components'
import { BtnAction } from 'components/buttons/action'
import { UserType } from 'types'
import { TableUsersTBodyTr } from './styles'

type TabelUsersListItemProps = {
  user: UserType
}
export const TabelUsersListItem = ({ user }: TabelUsersListItemProps) => {
  return (
    <TableUsersTBodyTr key={user.email}>
      <td>
        {user && user.rede && user.rede?.length > 0
          ? user.rede?.map((redeItem, index) =>
              index > 0 ? `,${redeItem}` : redeItem,
            )
          : 'Todas as Redes'}
      </td>
      <td>
        <div>
          <span>{user.nome}</span>
          <span>{user.email}</span>
        </div>
      </td>
      <td>{user.perfil}</td>
      <td>
        <InputSwitch value={user.id} />
      </td>
      <td>
        <BtnAction to={`/usuarios/editar/${user.id}`} />
        <BtnAction
          to={`/usuarios/deletar/${user.id}`}
          style={{ marginLeft: '8px' }}
          kind="delete"
        />
      </td>
    </TableUsersTBodyTr>
  )
}
