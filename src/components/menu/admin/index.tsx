import { FiChevronDown } from 'react-icons/fi'
import { menusAdminMock } from 'utils'
import * as S from './styles'
import { ListItemAdmin } from './components'

export const MenuAdmin = () => {
  return (
    <S.AdminWrapper>
      <S.ListAdmin>
        {menusAdminMock.map((menu) => {
          return <ListItemAdmin key={menu.path} {...menu} />
        })}
      </S.ListAdmin>
      <S.DropdownAdmin>
        <span>João Dasneves</span> <FiChevronDown />
      </S.DropdownAdmin>
    </S.AdminWrapper>
  )
}
