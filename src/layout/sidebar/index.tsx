import { BtnNavLink } from 'components'
import { useLocation, useNavigate } from 'react-router-dom'
import { sidebarMock } from 'utils'
import { WrapperSidebar } from './styles'

export const SidebarLayout = () => {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <WrapperSidebar>
      {sidebarMock.map((navItem) => {
        const handleClick = () => {
          return navigate(navItem.path)
        }
        return (
          <BtnNavLink
            onClick={handleClick}
            key={navItem.path}
            icon={navItem.icon}
            text={navItem.name}
            active={location.pathname === navItem.path}
          />
        )
      })}
    </WrapperSidebar>
  )
}
