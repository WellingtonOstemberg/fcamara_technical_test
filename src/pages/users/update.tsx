import { CardHeaderCampanha } from 'components'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { UserType } from 'types'
import { UserForm } from './components'

export const UserUpdate = () => {
  const [user, setUser] = useState<UserType>({})
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
      <UserForm userData={user} setUser={setUser} />
    </>
  )
}
