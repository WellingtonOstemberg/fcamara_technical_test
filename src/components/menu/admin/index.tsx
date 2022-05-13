import { useLocation } from 'react-router-dom'
import { FiChevronDown } from 'react-icons/fi'
import { menusAdminMock } from 'utils'
import * as S from './styles'

export const MenuAdmin = () => {
  const location = useLocation()

  return (
    <S.AdminWrapper>
      <S.ListAdmin>
        {menusAdminMock.map((menu) => {
          return (
            <S.ListItemAdmin
              key={menu.path}
              className={location.pathname === menu.path ? 'active' : ''}
            >
              <S.DropdownTextAdmin>{menu.name}</S.DropdownTextAdmin>{' '}
              {menu.badge > 0 ? <S.BadgeAdmin>{menu.badge}</S.BadgeAdmin> : ''}
            </S.ListItemAdmin>
          )
        })}
      </S.ListAdmin>
      <S.DropdownAdmin>
        <span>João Dasneves</span> <FiChevronDown />
      </S.DropdownAdmin>
    </S.AdminWrapper>
  )
}
