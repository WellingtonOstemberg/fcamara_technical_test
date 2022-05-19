import { BtnPrimaryLifted, CardHeaderCampanha, InputSwitch } from 'components'
import { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BsLightningCharge } from 'react-icons/bs'
import { FiSave } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import { usePutUser } from 'services'
import Swal from 'sweetalert2'
import { UserType } from 'types'
import { UserForm } from './components/form'
import { NavItemWrapper } from './style'
import { handleDelete, handleReset } from './utils'

export const UserUpdate = () => {
  const [user, setUser] = useState<UserType>({})
  const { putFetchUser } = usePutUser()
  const params = useParams()
  const handleSaveUser = () => {
    Swal.fire({
      text: 'Informações salvas com sucesso!',
      icon: 'success',
      width: '300px',
    })
    putFetchUser(user)
  }

  const routeHeader = () => {
    return (
      <NavItemWrapper>
        <InputSwitch value={params.id} />
        <BtnPrimaryLifted
          onClick={handleReset}
          backgroundColor="#fff"
          color="black"
          width="184px"
          text="Resetar senha"
          icon={<BsLightningCharge color="#999999" />}
          border="1px solid #ddd"
        />
        <BtnPrimaryLifted
          onClick={handleSaveUser}
          width="184px"
          text="Salvar Alterações"
          icon={<FiSave />}
        />
        <BtnPrimaryLifted
          onClick={handleDelete}
          width="184px"
          text="Excluir usuário"
          backgroundColor="#DC3545"
          icon={<AiOutlineClose />}
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
