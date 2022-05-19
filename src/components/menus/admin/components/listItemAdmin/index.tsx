import * as S from '../../styles'
export const ListItemAdmin = (menu: {
  name: string
  path: string
  badge: number
}) => {
  return (
    <S.ListItemAdmin
      key={menu.path}
      className={menu.name === 'Configurações' ? 'active' : ''}
    >
      <S.DropdownTextAdmin>{menu.name}</S.DropdownTextAdmin>{' '}
      {menu.badge > 0 ? <S.BadgeAdmin>{menu.badge}</S.BadgeAdmin> : ''}
    </S.ListItemAdmin>
  )
}
