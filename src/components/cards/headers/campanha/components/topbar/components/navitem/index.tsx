import { SearchInput, BtnPrimaryLifted } from 'components'
import { InputSwitch } from 'components/inputs'
import { FiSave } from 'react-icons/fi'
import { useLocation, useParams } from 'react-router-dom'
import { NavItemWrapper } from './styles'
type TopbarItemProps = {
  onClick: () => void
}
export const TopbarItem = ({ onClick }: TopbarItemProps) => {
  const location = useLocation()
  const params = useParams()

  if (location.pathname.indexOf('/usuarios/editar/') !== -1) {
    return (
      <NavItemWrapper>
        <InputSwitch value={params.id} />
        <BtnPrimaryLifted
          onClick={onClick}
          width="184px"
          text="Salvar Alterações"
          icon={<FiSave />}
        />
      </NavItemWrapper>
    )
  }

  if (location.pathname.indexOf('/usuarios/deletar/') !== -1) {
    return (
      <NavItemWrapper>
        <BtnPrimaryLifted
          onClick={onClick}
          width="184px"
          text="Remover usuário"
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
            onClick={onClick}
            width="184px"
            text="Novo usuário"
          />
        </NavItemWrapper>
      )
    case '/usuarios/novo':
      return (
        <NavItemWrapper>
          <BtnPrimaryLifted
            onClick={onClick}
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
