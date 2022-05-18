import { ErrorApi } from 'types/errorApi'
import { errorApi, usersMock } from 'utils'
import { getAllUsersTypes } from './types'

export const getAllUsers = async (): Promise<getAllUsersTypes> => {
  try {
    // the asyncronous call will be done here
    const data = usersMock

    return {
      users: data,
      error: '',
      isLoading: false,
    }
  } catch (e) {
    return {
      users: [],
      error: errorApi(e as ErrorApi),
      isLoading: false,
    }
  }
}
