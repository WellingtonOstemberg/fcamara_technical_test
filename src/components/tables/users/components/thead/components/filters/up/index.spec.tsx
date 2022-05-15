import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TableUsersTHeadFilterUp } from '.'
import { handleFilter } from '../../../../../utils'
import { TestWrapper } from '../../../../../../../../utils'

jest.mock('../../../../../utils')

describe('TableUsersTHeadFilterUp [Component]', () => {
  it('Should render table elements correctly', () => {
    const { container } = render(
      <TestWrapper>
        <TableUsersTHeadFilterUp filter="networkUp" />
      </TestWrapper>,
    )
    const svg = container.getElementsByClassName('table-filter-up')[0]
    expect(svg).toBeInTheDocument()
  })
  it('Should call a function onClick', () => {
    const { container } = render(
      <TestWrapper>
        <TableUsersTHeadFilterUp filter="networkUp" />
      </TestWrapper>,
    )
    const filterUp = container.getElementsByClassName('table-filter-up')[0]
    userEvent.click(filterUp)
    expect(handleFilter).toHaveBeenCalled()
  })
})
