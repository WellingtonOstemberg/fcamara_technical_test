import { useLocation } from 'react-router-dom'
import * as S from './styles'
export const Breadcrumbs = () => {
  const location = useLocation()
  let text = 'Default'
  if (location.pathname.indexOf('/usuarios/editar/') !== -1) {
    text = 'Editar Usuário'
  }
  switch (location.pathname) {
    case '/redes':
      text = 'Redes'
      break
    case '/usuarios':
      text = 'Usuários'
      break
    case '/usuarios/novo':
      text = 'Novo Usuário'
      break
  }
  return <S.Breadcrumbs>{text}</S.Breadcrumbs>
}
