import { render, screen } from '@testing-library/react'
import { FiUsers } from 'react-icons/fi'
import { colors } from '../../../styles/colors'
import { TestWrapper } from '../../../utils'
import { BtnNavLink } from '.'

describe('BtnNavLink [Component]', () => {
  it('Should render a button correctly', () => {
    render(
      <TestWrapper>
        <BtnNavLink icon={<FiUsers />} text={'any text'} />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'any text' })
    expect(btn).toBeInTheDocument()
  })
  it('Should render a button with right color and bg', () => {
    render(
      <TestWrapper>
        <BtnNavLink icon={<FiUsers />} text={'any text'} />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'any text' })
    expect(btn).toHaveStyle({
      color: colors.gray700,
      backgroundColor: '#fff',
    })
  })
  it('Should render a button with right color and bg', () => {
    render(
      <TestWrapper>
        <BtnNavLink icon={<FiUsers />} text={'any text'} active={true} />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'any text' })
    expect(btn).toHaveStyle({
      backgroundColor: colors.gray700,
      color: '#fff',
    })
  })
  it('Should render a button with right color and bg', () => {
    render(
      <TestWrapper>
        <BtnNavLink icon={<FiUsers />} text={'any text'} active={false} />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'any text' })
    expect(btn).toHaveStyle({
      color: colors.gray700,
      backgroundColor: '#fff',
    })
  })
  it('Should render a button with right color and bg', () => {
    render(
      <TestWrapper>
        <BtnNavLink icon={<FiUsers />} text={'any text'} />
      </TestWrapper>,
    )
    const btn = screen.getByRole('button', { name: 'any text' })
    expect(btn).toHaveStyle({
      color: colors.gray700,
      backgroundColor: '#fff',
    })
  })
})
