import { UserType } from 'types'

export type getAllUsersTypes = {
  users: UserType[]
  error: string
  isLoading: boolean
}
