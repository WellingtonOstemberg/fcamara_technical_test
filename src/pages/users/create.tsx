import { BtnPrimaryLifted, CardHeaderCampanha } from 'components'
import { useEffect, useState } from 'react'
import { FiSave } from 'react-icons/fi'
import { usePostUser } from 'services'
import Swal from 'sweetalert2'
import { UserType } from 'types'
import { UserForm } from './components/form'
import { NavItemWrapper } from './style'
import { validateUserFields } from './utils'

export const UserCreate = () => {
  const [user, setUser] = useState<UserType>({})
  const { postFetchUser, usersAsyncSlice } = usePostUser()
  const handleSaveUser = () => {
    const { isValid } = validateUserFields(user)
    if (isValid) {
      Swal.fire({
        text: 'Informações salvas com sucesso!',
        icon: 'success',
        width: '300px',
      })
      postFetchUser(user)
    } else {
      Swal.fire({
        title: 'Erro ao cadastrar usuário',
        text: 'Tenha certeza de que preencheu todos os campos.',
        icon: 'error',
        width: '300px',
        heightAuto: true,
      })
    }
  }

  useEffect(() => {
    const newId = usersAsyncSlice.users
      .filter((userSlice: UserType) => userSlice.id)
      .map((userSlice: UserType) => userSlice.id)[
      usersAsyncSlice.users
        .filter((userSlice: UserType) => userSlice.id)
        .map((userSlice: UserType) => userSlice.id).length - 1
    ]
    newId && setUser({ ...user, id: newId + 1 })
  }, [usersAsyncSlice.users])

  const routeHeader = () => {
    return (
      <NavItemWrapper>
        <BtnPrimaryLifted
          onClick={handleSaveUser}
          width="184px"
          text="Salvar Alterações"
          icon={<FiSave />}
        />
      </NavItemWrapper>
    )
  }

  return (
    <>
      <CardHeaderCampanha headerItems={routeHeader} />
      <UserForm userData={user} setUser={setUser} />
    </>
  )
}
