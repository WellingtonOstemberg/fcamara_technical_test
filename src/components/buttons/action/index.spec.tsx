import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TestWrapperWithoutRoutes } from '../../../utils'
import { BtnAction } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('BtnAction [Component]', () => {
  it('Should redirect to a specific route', () => {
    const urlMock = '/any_url'
    const mockUseLocationValue = {
      pathname: urlMock,
      search: '',
      hash: '',
      state: null,
    }
    jest.mock('react-router', () => ({
      // eslint-disable-next-line @typescript-eslint/ban-types
      ...(jest.requireActual('react-router') as {}),
      useLocation: jest.fn().mockImplementation(() => {
        return mockUseLocationValue
      }),
    }))
    render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <TestWrapperWithoutRoutes>
          <BtnAction to={urlMock} />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
    userEvent.click(btn)
    expect(mockUseLocationValue.pathname).toBe(urlMock)
  })
  it('Should redirect to a specific route', () => {
    const urlMock = '/any_url'
    const mockUseLocationValue = {
      pathname: urlMock,
      search: '',
      hash: '',
      state: null,
    }
    jest.mock('react-router', () => ({
      // eslint-disable-next-line @typescript-eslint/ban-types
      ...(jest.requireActual('react-router') as {}),
      useLocation: jest.fn().mockImplementation(() => {
        return mockUseLocationValue
      }),
    }))
    render(
      <MemoryRouter initialEntries={[{ pathname: '/' }]}>
        <TestWrapperWithoutRoutes>
          <BtnAction kind="delete" to={urlMock} />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
    userEvent.click(btn)
    expect(mockUseLocationValue.pathname).toBe(urlMock)
  })
})
