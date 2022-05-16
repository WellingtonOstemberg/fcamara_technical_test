import { CardHeaderCampanha } from 'components'
import Swal from 'sweetalert2'
import { UserForm } from './components'

export const UserUpdate = () => {
  const handleSaveUser = () => {
    Swal.fire({
      text: 'Informações salvas com sucesso!',
      icon: 'success',
      width: '300px',
    })
  }

  return (
    <>
      <CardHeaderCampanha onClick={handleSaveUser} />
      <UserForm />
    </>
  )
}
