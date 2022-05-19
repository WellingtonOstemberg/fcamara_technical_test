import { CardHeaderCampanha } from 'components'
import { useEffect, useState } from 'react'
import { usePotUser } from 'services'
import Swal from 'sweetalert2'
import { UserType } from 'types'
import { UserForm } from './components/form'

export const UserCreate = () => {
  const [user, setUser] = useState<UserType>({})
  const { postFetchUser, usersAsyncSlice } = usePotUser()
  const handleSaveUser = () => {
    Swal.fire({
      text: 'Informações salvas com sucesso!',
      icon: 'success',
      width: '300px',
    })
    postFetchUser(user)
  }

  useEffect(() => {
    console.log(usersAsyncSlice.users, 'adicionado')
  }, [usersAsyncSlice.users])

  return (
    <>
      <CardHeaderCampanha onClick={handleSaveUser} />
      <UserForm userData={user} setUser={setUser} />
    </>
  )
}
