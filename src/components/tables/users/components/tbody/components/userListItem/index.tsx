import { InputSwitch } from 'components'
import { BtnAction } from 'components/buttons/action'
import { BtnNoAction } from 'components/buttons/noAction'
import { useDeleteUser } from 'services'
import Swal from 'sweetalert2'
import { UserType } from 'types'
import { TableUsersTBodyTr } from './styles'

type TabelUsersListItemProps = {
  user: UserType
}
export const TabelUsersListItem = ({ user }: TabelUsersListItemProps) => {
  const { deleteFetchUser } = useDeleteUser()

  const handleDelete = () => {
    Swal.fire({
      text: 'Usuário removido com sucesso!',
      icon: 'success',
      width: '300px',
    })
    deleteFetchUser(user.id || 0)
  }
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
        <BtnNoAction
          style={{ marginLeft: '8px', color: '#f00' }}
          onClick={handleDelete}
        />
      </td>
    </TableUsersTBodyTr>
  )
}
