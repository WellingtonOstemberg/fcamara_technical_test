import { render, screen } from '@testing-library/react'
import { TestWrapper } from '../../../../../utils'
import { handleFilter } from '../../utils'
import { TableUsersTHead } from '.'

jest.mock('../../utils')

describe('TableUsersTHead [Component]', () => {
  it('Should render table elements correctly', () => {
    render(
      <TestWrapper>
        <table>
          <TableUsersTHead handleFilter={handleFilter} />
        </table>
      </TestWrapper>,
    )
    const table = screen.getByRole('table')
    const thead = screen.getByRole('rowgroup')
    const headers = screen.getByRole('row')
    const collumnHeader01 = screen.getByRole('columnheader', { name: 'Rede' })
    const collumnHeader02 = screen.getByRole('columnheader', { name: 'Nome' })
    const collumnHeader03 = screen.getByRole('columnheader', { name: 'Perfil' })
    const collumnHeader04 = screen.getByRole('columnheader', { name: 'Status' })
    const collumnHeader05 = screen.getByRole('columnheader', { name: 'Ações' })
    expect(table).toBeInTheDocument()
    expect(thead).toBeInTheDocument()
    expect(headers).toBeInTheDocument()
    expect(collumnHeader01).toBeInTheDocument()
    expect(collumnHeader02).toBeInTheDocument()
    expect(collumnHeader03).toBeInTheDocument()
    expect(collumnHeader04).toBeInTheDocument()
    expect(collumnHeader05).toBeInTheDocument()
  })
})
