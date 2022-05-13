import { render, screen } from '@testing-library/react'
import { TestWrapperWithoutRoutes } from '../../../../../../utils'
import { Topbar } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('Topbar [Component]', () => {
  it('Should render with correct children', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/redes' }]}>
        <TestWrapperWithoutRoutes>
          <Topbar />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const text = screen.getByText('Novo usuário')
    expect(text).toBeInTheDocument()
  })
})
