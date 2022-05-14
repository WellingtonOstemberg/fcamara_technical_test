import { BtnNavLink } from 'components'
import { useLocation } from 'react-router-dom'
import { sidebarMock } from 'utils'
import { WrapperSidebar } from './styles'

export const SidebarLayout = () => {
  const location = useLocation()
  return (
    <WrapperSidebar>
      {sidebarMock.map((navItem) => {
        return (
          <BtnNavLink
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
