import { colors } from 'styles/colors'
import Swal from 'sweetalert2'

export const handleDelete = () => {
  Swal.fire({
    title: 'Excluir usuário',
    text: 'Você deseja excluir este usuário definitivamente? Esta ação não poderá ser desfeita.',
    icon: 'warning',
    color: 'red',
    showDenyButton: true,
    confirmButtonText: 'Sim',
    denyButtonText: `Não`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Usuário removido com sucesso!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('A ação foi cancelada', '', 'error')
    }
  })
}
export const handleReset = () => {
  Swal.fire({
    title: 'Resetar senha',
    text: 'Você deseja resetar a senha deste usuário?',
    icon: 'warning',
    color: 'red',
    showDenyButton: true,
    confirmButtonText: 'Sim',
    confirmButtonColor: colors.orange,
    denyButtonText: `Não`,
    denyButtonColor: colors.red,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Senha resetada com sucesso!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('A ação foi cancelada', '', 'error')
    }
  })
}
