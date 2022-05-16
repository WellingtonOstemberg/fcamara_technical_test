import { render, screen } from '@testing-library/react'
import { generateMutableString, TestWrapper } from '../../../utils'
import { SelectMultiple } from '.'

describe('SelectMultiple [Component]', () => {
  it('Should render a input with correct label and no items message', () => {
    const labelTextMock = generateMutableString()
    render(
      <TestWrapper>
        <SelectMultiple label={labelTextMock} />
      </TestWrapper>,
    )
    const label = screen.getByLabelText(labelTextMock)
    expect(label).toBeInTheDocument()
    const emptyData = screen.getAllByText('Nenhum item selecionado')
    emptyData.forEach((item) => {
      expect(item).toBeInTheDocument()
    })
  })
  it('Should render a input with correct label and items', () => {
    const labelTextMock = generateMutableString()
    const descriptionMock = generateMutableString()
    render(
      <TestWrapper>
        <SelectMultiple
          label={labelTextMock}
          data={[{ id: 1, description: descriptionMock }]}
        />
      </TestWrapper>,
    )
    const label = screen.getByLabelText(labelTextMock)
    expect(label).toBeInTheDocument()
    const items = screen.getAllByText(descriptionMock)
    items.forEach((item) => expect(item).toBeInTheDocument())
  })
})
