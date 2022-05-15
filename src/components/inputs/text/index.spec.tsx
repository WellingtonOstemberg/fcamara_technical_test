import { render, screen } from '@testing-library/react'
import { generateMutableString, TestWrapper } from '../../../utils'
import { InputText } from '.'

describe('InputText [Component]', () => {
  it('Should render a input with correct label', () => {
    const labelTextMock = generateMutableString()
    render(
      <TestWrapper>
        <InputText label={labelTextMock} />
      </TestWrapper>,
    )
    const label = screen.getByLabelText(labelTextMock)
    expect(label).toBeInTheDocument()
    const input = screen.getByRole('textbox', { name: labelTextMock })
    expect(input).toBeInTheDocument()
  })
  it('Should render a input with an errorMessage', () => {
    const labelErrorMock = generateMutableString()
    render(
      <TestWrapper>
        <InputText validate={false} errorMessage={labelErrorMock} />
      </TestWrapper>,
    )
    const err = screen.getByText(labelErrorMock)
    expect(err).toBeInTheDocument()
  })
})
