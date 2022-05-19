import { useLocation } from 'react-router-dom'
type TopbarItemProps = {
  headerItems: () => JSX.Element
}
export const TopbarItem = ({ headerItems }: TopbarItemProps) => {
  const location = useLocation()

  if (location.pathname.indexOf('/usuarios/editar/') !== -1) {
    return headerItems()
  }

  switch (location.pathname) {
    case '/usuarios':
    case '/usuarios/novo':
    default:
      return headerItems()
  }
}
