import { Users } from 'pages/users'

export const menusAdminMock = [
  { name: 'Redes', path: '/redes', badge: 0, element: <Users /> },
  { name: 'Produtos', path: '/produtos', badge: 2, element: <Users /> },
  {
    name: 'Configurações',
    path: '/configuracoes',
    badge: 0,
    element: <Users />,
  },
]
