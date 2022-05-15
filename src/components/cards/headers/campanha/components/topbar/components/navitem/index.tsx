import { SearchInput, BtnPrimaryLifted } from 'components'
import { FiSave } from 'react-icons/fi'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavItemWrapper } from './styles'

export const TopbarItem = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const handleSaveUser = () => {
    console.log('salvar usuário')
  }
  const handleNewUser = () => {
    return navigate('/usuarios/novo')
  }

  if (location.pathname.indexOf('/usuarios/editar/') !== -1) {
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

  switch (location.pathname) {
    case '/usuarios':
      return (
        <NavItemWrapper>
          <SearchInput />
          <BtnPrimaryLifted
            onClick={handleNewUser}
            width="184px"
            text="Novo usuário"
          />
        </NavItemWrapper>
      )
    case '/usuarios/novo':
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

    default:
      return <></>
  }
}
