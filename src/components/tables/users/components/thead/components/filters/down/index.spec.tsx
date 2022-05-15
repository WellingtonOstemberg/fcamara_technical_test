import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TableUsersTHeadFilterDown } from '.'
import { handleFilter } from '../../../../../utils'
import { TestWrapper } from '../../../../../../../../utils'

jest.mock('../../../../../utils')

describe('TableUsersTHeadFilterDown [Component]', () => {
  it('Should render table elements correctly', () => {
    const { container } = render(
      <TestWrapper>
        <TableUsersTHeadFilterDown filter="networkDown" />
      </TestWrapper>,
    )
    const svg = container.getElementsByClassName('table-filter-down')[0]
    expect(svg).toBeInTheDocument()
  })
  it('Should call a function onClick', () => {
    const { container } = render(
      <TestWrapper>
        <TableUsersTHeadFilterDown filter="networkDown" />
      </TestWrapper>,
    )
    const filterDown = container.getElementsByClassName('table-filter-down')[0]
    userEvent.click(filterDown)
    expect(handleFilter).toHaveBeenCalled()
  })
})
