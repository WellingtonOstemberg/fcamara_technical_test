import { render, screen } from '@testing-library/react'
import { TestWrapper } from '../../../utils'
import { SearchInput } from '.'

describe('SearchInput [Component]', () => {
  it('Should render a input search with placeholder props correctly', () => {
    const placeholderMock = 'any text'
    render(
      <TestWrapper>
        <SearchInput placeholder={placeholderMock} />
      </TestWrapper>,
    )
    const input = screen.getByRole('searchbox')
    const placeholder = screen.getByPlaceholderText(placeholderMock)
    expect(input).toBeInTheDocument()
    expect(placeholder).toBeInTheDocument()
  })
  it('Should render a input search without placeholder props correctly', () => {
    render(
      <TestWrapper>
        <SearchInput />
      </TestWrapper>,
    )
    const input = screen.getByRole('searchbox')
    const placeholder = screen.getByPlaceholderText('Buscar Usuário')
    expect(input).toBeInTheDocument()
    expect(placeholder).toBeInTheDocument()
  })
})
