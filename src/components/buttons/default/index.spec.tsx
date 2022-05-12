import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestWrapper } from '../../../utils'
import { BtnPrimaryLifted } from '.'

describe('BtnPrimaryLifted [Component]', () => {
  it('Should render a button with color', () => {
    render(
      <TestWrapper>
        <BtnPrimaryLifted color="white" />
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
        <BtnPrimaryLifted icon={<span>Test</span>} />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'Test' })
    expect(btn).toBeInTheDocument()
  })
  it('Should render a button with text', () => {
    render(
      <TestWrapper>
        <BtnPrimaryLifted text="text" />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'text' })
    expect(btn).toBeInTheDocument()
  })
  it('Should render a button with border-radius', () => {
    render(
      <TestWrapper>
        <BtnPrimaryLifted borderRadius="2px" />
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
        <BtnPrimaryLifted height="2px" />
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
        <BtnPrimaryLifted fontSize="2px" />
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
        <BtnPrimaryLifted width="2px" />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'No text' })
    expect(btn).toHaveStyle({
      width: '2px',
    })
  })
  it('Should call a function onClick', () => {
    const onClick = jest.fn()
    render(
      <TestWrapper>
        <BtnPrimaryLifted onClick={onClick} />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'No text' })
    userEvent.click(btn)
    expect(onClick).toHaveBeenCalled()
    expect(onClick).toHaveBeenCalledTimes(1)
  })
})
