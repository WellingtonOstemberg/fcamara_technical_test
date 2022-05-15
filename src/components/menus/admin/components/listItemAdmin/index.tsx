import { useLocation } from 'react-router-dom'
import * as S from '../../styles'
export const ListItemAdmin = (menu: {
  name: string
  path: string
  badge: number
}) => {
  const location = useLocation()
  return (
    <S.ListItemAdmin
      key={menu.path}
      className={location.pathname === menu.path ? 'active' : ''}
    >
      <S.DropdownTextAdmin>{menu.name}</S.DropdownTextAdmin>{' '}
      {menu.badge > 0 ? <S.BadgeAdmin>{menu.badge}</S.BadgeAdmin> : ''}
    </S.ListItemAdmin>
  )
}
