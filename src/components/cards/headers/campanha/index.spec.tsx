import { render, screen } from '@testing-library/react'
import { TestWrapperWithoutRoutes, TestWrapper } from '../../../../utils'
import { CardHeaderCampanha } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('CardHeaderCampanha [Component]', () => {
  const headerItemsMock = () => <h1>Test</h1>
  it('Should render with correct children and title', () => {
    render(
      <TestWrapper>
        <CardHeaderCampanha headerItems={headerItemsMock} />
      </TestWrapper>,
    )
    const text = screen.getByText('Seja bem-vindo!')
    expect(text).toBeInTheDocument()
  })
  it('Should render with correct children and title', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/usuarios/novo' }]}>
        <TestWrapperWithoutRoutes>
          <CardHeaderCampanha headerItems={headerItemsMock} />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const text = screen.getByText('Novo Usuário')
    expect(text).toBeInTheDocument()
  })
})
