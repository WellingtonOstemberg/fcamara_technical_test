import { useLocation } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { menusAdminMock } from 'utils'
import { AdminWrapper, BadgeAdmin, DropdownAdmin } from './styles'

export const MenuAdmin = () => {
  const location = useLocation()

  return (
    <AdminWrapper>
      <ul>
        {menusAdminMock.map((menu) => {
          return (
            <li className={location.pathname === menu.path ? 'active' : ''}>
              <span>{menu.name}</span>{' '}
              {menu.badge > 0 ? <BadgeAdmin>{menu.badge}</BadgeAdmin> : ''}
            </li>
          )
        })}
      </ul>
      <DropdownAdmin>
        <span>João Dasneves</span> <FiChevronDown />
      </DropdownAdmin>
    </AdminWrapper>
  )
}
