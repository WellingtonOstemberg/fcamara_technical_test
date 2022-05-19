import { render, screen } from '@testing-library/react'
import { TestWrapperWithoutRoutes } from '../../../utils'
import { BtnNoAction } from '.'
import { MemoryRouter } from 'react-router-dom'

describe('BtnNoAction [Component]', () => {
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
          <BtnNoAction />
        </TestWrapperWithoutRoutes>
      </MemoryRouter>,
    )
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
  })
})
