import * as S from './styles'

type TopbarProps = {
  headerItems: () => JSX.Element
}
export const Topbar = ({ headerItems }: TopbarProps) => {
  return <S.Topbar>{headerItems()}</S.Topbar>
}
