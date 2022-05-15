import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ListItemAdmin } from '.'
import {
  menusAdminMock,
  TestWrapper,
  TestWrapperWithoutRoutes,
} from '../../../../../utils'
import { ListAdmin } from '../../styles'

describe('ListItemAdmin [Component]', () => {
  it('Should render with a li', () => {
    render(
      <TestWrapper>
        <ListAdmin>
          {menusAdminMock.map((menu) => {
            return <ListItemAdmin key={menu.path} {...menu} />
          })}
        </ListAdmin>
      </TestWrapper>,
    )
    const li = screen.getAllByRole('listitem')
    expect(li.length).toBe(menusAdminMock.length)
  })
  it('Should render with active li', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: menusAdminMock[0].path }]}>
        <TestWrapperWithoutRoutes>
          <ListAdmin>
            {menusAdminMock.map((menu) => {
              return <ListItemAdmin key={menu.path} {...menu} />
            })}
          </ListAdmin>
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const li = screen.getAllByRole('listitem')
    expect(li.length).toBe(menusAdminMock.length)
  })
})
