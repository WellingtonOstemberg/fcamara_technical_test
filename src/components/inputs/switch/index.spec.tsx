import { render, screen } from '@testing-library/react'
import { TestWrapperWithStore } from '../../../utils'
import { InputSwitch } from '.'

describe('InputSwitch [Component]', () => {
  it('Should render a input search with placeholder props correctly', () => {
    render(
      <TestWrapperWithStore>
        <InputSwitch value={1} />
      </TestWrapperWithStore>,
    )
    const input = screen.getByRole('checkbox')
    expect(input).toBeInTheDocument()
  })
})
