import { CardHeaderCampanha } from 'components'
import { useState } from 'react'
import { usePutUser } from 'services'
import Swal from 'sweetalert2'
import { UserType } from 'types'
import { UserForm } from './components/form'

export const UserUpdate = () => {
  const [user, setUser] = useState<UserType>({})
  const { putFetchUser } = usePutUser()
  const handleSaveUser = () => {
    Swal.fire({
      text: 'Informações salvas com sucesso!',
      icon: 'success',
      width: '300px',
    })
    putFetchUser(user)
  }

  return (
    <>
      <CardHeaderCampanha onClick={handleSaveUser} />
      <UserForm userData={user} setUser={setUser} />
    </>
  )
}
