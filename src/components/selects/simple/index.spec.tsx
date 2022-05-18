import { render, screen } from '@testing-library/react'
import { generateMutableString, TestWrapper } from '../../../utils'
import { SelectSimple } from '.'
import React from 'react'

describe('SelectSimple [Component]', () => {
  it('Should render a input with correct label and no items message', () => {
    const labelTextMock = generateMutableString()
    const setStateMocked = jest.fn()
    const useStateMock: any = (useState: any) => [useState, setStateMocked]
    jest.spyOn(React, 'useState').mockImplementation(useStateMock)
    const [selectedMock, setSelectedMock] = useStateMock('')
    render(
      <TestWrapper>
        <SelectSimple
          selected={selectedMock}
          setSelected={setSelectedMock}
          label={labelTextMock}
        />
      </TestWrapper>,
    )
    const label = screen.getByLabelText(labelTextMock)
    expect(label).toBeInTheDocument()
    const emptyData = screen.getByText('Nenhum item a ser exibido')
    expect(emptyData).toBeInTheDocument()
  })
  it('Should render a input with correct label and items', () => {
    const labelTextMock = generateMutableString()
    const descriptionMock = generateMutableString('desc-', 5)

    const setStateMocked = jest.fn()
    const useStateMock: any = (useState: any) => [useState, setStateMocked]
    jest.spyOn(React, 'useState').mockImplementation(useStateMock)
    const [selectedMock, setSelectedMock] = useStateMock('')
    render(
      <TestWrapper>
        <SelectSimple
          selected={selectedMock}
          setSelected={setSelectedMock}
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
