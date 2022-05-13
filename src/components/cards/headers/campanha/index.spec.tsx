import { render, screen } from '@testing-library/react'
import { TestWrapperWithoutRoutes, TestWrapper } from '../../../../utils'
import { CardHeaderCampanha } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('CardHeaderCampanha [Component]', () => {
  it('Should render with correct children and title', () => {
    render(
      <TestWrapper>
        <CardHeaderCampanha />
      </TestWrapper>,
    )
    const text = screen.getByText('Default')
    expect(text).toBeInTheDocument()
  })
  it('Should render with correct children and title', () => {
    render(
      <MemoryRouter initialEntries={[{ pathname: '/redes' }]}>
        <TestWrapperWithoutRoutes>
          <CardHeaderCampanha />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const text = screen.getByText('Novo usuário')
    expect(text).toBeInTheDocument()
  })
})
