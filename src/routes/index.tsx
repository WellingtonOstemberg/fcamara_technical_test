import { UserCreate } from 'pages/users/create'
import { UserUpdate } from 'pages/users/update'
import { Navigate, Route, Routes } from 'react-router-dom'
import { menusAdminMock, sidebarMock } from 'utils'

export const MainRoutes = () => {
  const routes = [
    ...menusAdminMock,
    ...sidebarMock,
    {
      path: 'usuarios/novo',
      element: <UserCreate />,
    },
    {
      path: 'usuarios/editar/:id',
      element: <UserUpdate />,
    },
  ]
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/usuarios'} />} />
      {routes.map((menu) => {
        return <Route key={menu.path} path={menu.path} element={menu.element} />
      })}
    </Routes>
  )
}
