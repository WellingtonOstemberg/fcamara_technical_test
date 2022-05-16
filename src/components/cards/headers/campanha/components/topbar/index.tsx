import { TopbarItem } from './components/navitem'
import * as S from './styles'

type TopbarProps = {
  onClick: () => void
}
export const Topbar = ({ onClick }: TopbarProps) => {
  return (
    <S.Topbar>
      <TopbarItem onClick={onClick} />
    </S.Topbar>
  )
}
