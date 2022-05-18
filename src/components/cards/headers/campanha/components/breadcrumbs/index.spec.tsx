import { render, screen } from '@testing-library/react'
import { TestWrapper, TestWrapperWithoutRoutes } from '../../../../../../utils'
import { Breadcrumbs } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('Breadcrumbs [Component]', () => {
  it('Should render with correct text', () => {
    render(
      <TestWrapper>
        <Breadcrumbs />
      </TestWrapper>,
    )
    const breadcrumb = screen.getByText('Default')
    expect(breadcrumb).toBeInTheDocument()
  })
  it('Should render with correct text Usuários', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/usuarios' }]}>
        <TestWrapperWithoutRoutes>
          <Breadcrumbs />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const breadcrumb = screen.getByText('Usuários')
    expect(breadcrumb).toBeInTheDocument()
  })
  it('Should render with correct text Usuários', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/usuarios/editar/1' }]}>
        <TestWrapperWithoutRoutes>
          <Breadcrumbs />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const breadcrumb = screen.getByText('Editar Usuário')
    expect(breadcrumb).toBeInTheDocument()
  })
  it('Should render with correct text Usuários', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/redes' }]}>
        <TestWrapperWithoutRoutes>
          <Breadcrumbs />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const breadcrumb = screen.getByText('Redes')
    expect(breadcrumb).toBeInTheDocument()
  })
  it('Should render with correct text Usuários', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/usuarios/novo' }]}>
        <TestWrapperWithoutRoutes>
          <Breadcrumbs />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const breadcrumb = screen.getByText('Novo Usuário')
    expect(breadcrumb).toBeInTheDocument()
  })
})
