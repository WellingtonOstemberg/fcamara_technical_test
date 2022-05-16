import { MainRoutes } from 'routes'
import { HeaderLayout } from './header'
import { SidebarLayout } from './sidebar'
import { Wrapper, WrapperMain } from './styles'

export const Layout = () => {
  return (
    <>
      <HeaderLayout />
      <Wrapper>
        <SidebarLayout />
        <WrapperMain>
          <MainRoutes />
        </WrapperMain>
      </Wrapper>
    </>
  )
}
