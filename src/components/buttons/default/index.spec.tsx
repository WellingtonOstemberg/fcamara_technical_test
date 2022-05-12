import { render, screen } from '@testing-library/react'
import { TestWrapper } from '../../../utils'
import { ButtonDefault } from '.'

describe('ButtonDefault [Component]', () => {
  it('Should render a button with bg and color', () => {
    render(
      <TestWrapper>
        <ButtonDefault color="white" />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'No text' })
    expect(btn).toHaveStyle({
      color: 'white',
    })
    expect(btn).toBeInTheDocument()
  })
  it('Should render a button with icon', () => {
    render(
      <TestWrapper>
        <ButtonDefault icon={<span>Test</span>} />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'Test' })
    expect(btn).toBeInTheDocument()
  })
  it('Should render a button with text', () => {
    render(
      <TestWrapper>
        <ButtonDefault text="text" />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'text' })
    expect(btn).toBeInTheDocument()
  })
  it('Should render a button with border-radius', () => {
    render(
      <TestWrapper>
        <ButtonDefault borderRadius="2px" />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'No text' })
    expect(btn).toHaveStyle({
      borderRadius: '2px',
    })
  })
  it('Should render a button with height', () => {
    render(
      <TestWrapper>
        <ButtonDefault height="2px" />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'No text' })
    expect(btn).toHaveStyle({
      height: '2px',
    })
  })
  it('Should render a button with font-size', () => {
    render(
      <TestWrapper>
        <ButtonDefault fontSize="2px" />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'No text' })
    expect(btn).toHaveStyle({
      fontSize: '2px',
    })
  })
  it('Should render a button with width', () => {
    render(
      <TestWrapper>
        <ButtonDefault width="2px" />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'No text' })
    expect(btn).toHaveStyle({
      width: '2px',
    })
  })
})
