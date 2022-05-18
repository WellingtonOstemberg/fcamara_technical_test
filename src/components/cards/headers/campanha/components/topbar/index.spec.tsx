import { render, screen } from '@testing-library/react'
import { TestWrapperWithoutRoutes } from '../../../../../../utils'
import { Topbar } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('Topbar [Component]', () => {
  it('Should render with correct children', () => {
    const onClick = jest.fn()
    render(
      <MemoryRouter initialEntries={[{ pathname: '/usuarios/novo' }]}>
        <TestWrapperWithoutRoutes>
          <Topbar onClick={onClick} />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const text = screen.getByText('Salvar Alterações')
    expect(text).toBeInTheDocument()
  })
})
