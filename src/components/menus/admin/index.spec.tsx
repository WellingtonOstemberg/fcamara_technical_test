import { render, screen } from '@testing-library/react'
import { menusAdminMock, TestWrapper } from '../../../utils'
import { MenuAdmin } from '.'

describe('MenuAdmin [Component]', () => {
  it('Should render with a ul', () => {
    render(
      <TestWrapper>
        <MenuAdmin />
      </TestWrapper>,
    )
    const ul = screen.getByRole('list')
    expect(ul).toBeInTheDocument()
  })
  it('Should render with a li', () => {
    render(
      <TestWrapper>
        <MenuAdmin />
      </TestWrapper>,
    )
    const li = screen.getAllByRole('listitem')
    expect(li.length).toBe(menusAdminMock.length)
  })
  it('Should render with a correct username', () => {
    render(
      <TestWrapper>
        <MenuAdmin />
      </TestWrapper>,
    )
    const username = screen.getByText('João Dasneves')
    expect(username).toBeInTheDocument()
  })
})
