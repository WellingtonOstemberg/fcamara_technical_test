import { render, screen } from '@testing-library/react'
import { TopbarItem } from '.'
import { MemoryRouter } from 'react-router-dom'
import { TestWrapperWithoutRoutes } from '../../../../../../../../utils'

describe('TopbarItem [Component]', () => {
  it('Should render with correct children', () => {
    const onClick = jest.fn()
    render(
      <MemoryRouter initialEntries={[{ pathname: '/usuarios/deletar/1' }]}>
        <TestWrapperWithoutRoutes>
          <TopbarItem onClick={onClick} />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
  })
  it('Should render with correct children', () => {
    const onClick = jest.fn()
    render(
      <MemoryRouter initialEntries={[{ pathname: '/usuarios' }]}>
        <TestWrapperWithoutRoutes>
          <TopbarItem onClick={onClick} />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
  })
})
