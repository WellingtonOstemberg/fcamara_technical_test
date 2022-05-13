import { BtnPrimaryLifted } from 'components/buttons'
import { SearchInput } from 'components/input'
import { useLocation } from 'react-router-dom'
import { NavItemWrapper } from './styles'

export const TopbarItem = () => {
  const location = useLocation()
  switch (location.pathname) {
    case '/redes':
      return (
        <NavItemWrapper>
          <SearchInput />
          <BtnPrimaryLifted text="Novo usuário" />
        </NavItemWrapper>
      )

    default:
      return <></>
  }
}
