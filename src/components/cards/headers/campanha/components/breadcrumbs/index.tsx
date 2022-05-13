import { useLocation } from 'react-router-dom'
import * as S from './styles'
export const Breadcrumbs = () => {
  const location = useLocation()
  let text = 'Default'
  switch (location.pathname) {
    case '/redes':
      text = 'Usuários'
      break
  }
  return <S.Breadcrumbs>{text}</S.Breadcrumbs>
}
