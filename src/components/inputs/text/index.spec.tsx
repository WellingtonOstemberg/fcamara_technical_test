import { render, screen } from '@testing-library/react'
import { generateMutableString, TestWrapper } from '../../../utils'
import { InputText } from '.'
import React from 'react'

describe('InputText [Component]', () => {
  it('Should render a input with correct label', () => {
    const labelTextMock = generateMutableString()
    const setStateMocked = jest.fn()
    const useStateMock: any = (useState: any) => [useState, setStateMocked]
    jest.spyOn(React, 'useState').mockImplementation(useStateMock)
    const [selectedMock, setSelectedMock] = useStateMock('')
    render(
      <TestWrapper>
        <InputText
          value={selectedMock}
          setValue={setSelectedMock}
          label={labelTextMock}
        />
      </TestWrapper>,
    )
    const label = screen.getByLabelText(labelTextMock)
    expect(label).toBeInTheDocument()
    const input = screen.getByRole('textbox', { name: labelTextMock })
    expect(input).toBeInTheDocument()
  })
  it('Should render a input with an errorMessage', () => {
    const labelErrorMock = generateMutableString()
    const setStateMocked = jest.fn()
    const useStateMock: any = (useState: any) => [useState, setStateMocked]
    jest.spyOn(React, 'useState').mockImplementation(useStateMock)
    const [selectedMock, setSelectedMock] = useStateMock('')
    render(
      <TestWrapper>
        <InputText
          value={selectedMock}
          setValue={setSelectedMock}
          validate={false}
          errorMessage={labelErrorMock}
        />
      </TestWrapper>,
    )
    const err = screen.getByText(labelErrorMock)
    expect(err).toBeInTheDocument()
  })
})
