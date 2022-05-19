import { render, screen } from '@testing-library/react'
import { TopbarItem } from '.'
import { MemoryRouter } from 'react-router-dom'
import { TestWrapperWithoutRoutes } from '../../../../../../../../utils'

describe('TopbarItem [Component]', () => {
  const headerItemsMock = () => <h1>Test</h1>
  it('Should render with correct children', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/usuarios/deletar/1' }]}>
        <TestWrapperWithoutRoutes>
          <TopbarItem headerItems={headerItemsMock} />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const btn = screen.getByRole('heading', { name: 'Test' })
    expect(btn).toBeInTheDocument()
  })
  it('Should render with correct children', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/usuarios' }]}>
        <TestWrapperWithoutRoutes>
          <TopbarItem headerItems={headerItemsMock} />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const btn = screen.getByRole('heading', { name: 'Test' })
    expect(btn).toBeInTheDocument()
  })
})
