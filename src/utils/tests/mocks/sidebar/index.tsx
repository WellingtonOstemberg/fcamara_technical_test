import { FiUsers } from 'react-icons/fi'
import { BsListCheck } from 'react-icons/bs'
import { Home } from 'pages/home'
import { Users } from 'pages/users'
export const sidebarMock = [
  {
    name: 'Usuários',
    path: '/usuarios',
    icon: <FiUsers />,
    element: <Users />,
  },
  {
    name: 'Perfis de Acesso',
    path: '/perfis-de-acesso',
    icon: <BsListCheck />,
    element: <Home />,
  },
]
