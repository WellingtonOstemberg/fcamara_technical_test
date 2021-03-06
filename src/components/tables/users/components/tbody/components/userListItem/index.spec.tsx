import { render, screen } from '@testing-library/react'
import { TestWrapperWithStore, usersMock } from '../../../../../../../utils'
import { TabelUsersListItem } from '.'

describe('TabelUsersListItem [Component]', () => {
  it('Should render table elements correctly', () => {
    render(
      <TestWrapperWithStore>
        <table>
          <tbody>
            {usersMock.map(
              (user, index) =>
                index < 2 && (
                  <TabelUsersListItem key={user.email} user={user} />
                ),
            )}
          </tbody>
        </table>
      </TestWrapperWithStore>,
    )
    const tr = screen.getAllByRole('rowgroup')
    for (let index = 0; index < tr.length; index++) {
      expect(tr[index]).toBeInTheDocument()
    }
  })
})
