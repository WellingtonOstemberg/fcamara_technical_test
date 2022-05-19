import { render, screen } from '@testing-library/react'
import { TestWrapperWithoutRoutes } from '../../../../../../utils'
import { Topbar } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('Topbar [Component]', () => {
  const headerItemsMock = () => <h1>Test</h1>
  it('Should render with correct children', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/usuarios/novo' }]}>
        <TestWrapperWithoutRoutes>
          <Topbar headerItems={headerItemsMock} />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const text = screen.getByRole('heading', { name: 'Test' })
    expect(text).toBeInTheDocument()
  })
})
