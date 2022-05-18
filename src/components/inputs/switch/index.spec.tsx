import { render, screen } from '@testing-library/react'
import { TestWrapper } from '../../../utils'
import { InputSwitch } from '.'

describe('InputSwitch [Component]', () => {
  it('Should render a input search with placeholder props correctly', () => {
    render(
      <TestWrapper>
        <InputSwitch value={1} />
      </TestWrapper>,
    )
    const input = screen.getByRole('checkbox')
    expect(input).toBeInTheDocument()
  })
})
