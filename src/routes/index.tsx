import { Home } from 'pages/home'
import { UserCreate } from 'pages/users/create'
import { Route, Routes } from 'react-router-dom'
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
      element: <Home />,
    },
  ]
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {routes.map((menu) => {
        return <Route key={menu.path} path={menu.path} element={menu.element} />
      })}
    </Routes>
  )
}
