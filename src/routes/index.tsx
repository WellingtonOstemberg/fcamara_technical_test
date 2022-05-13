import { Home } from 'pages/home'
import { Route, Routes } from 'react-router-dom'
import { menusAdminMock } from 'utils'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {menusAdminMock.map((menu) => {
        return <Route key={menu.path} path={menu.path} element={<Home />} />
      })}
    </Routes>
  )
}
