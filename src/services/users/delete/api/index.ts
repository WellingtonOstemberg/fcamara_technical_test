import { ErrorApi } from 'types/errorApi'
import { errorApi } from 'utils'
import { deleteUserTypes } from './types'

export const deleteUser = async (id: number): Promise<deleteUserTypes> => {
  try {
    // the asyncronous call will be done here
    const data = id

    return {
      userId: data,
      error: '',
      isLoading: false,
    }
  } catch (e) {
    return {
      userId: undefined,
      error: errorApi(e as ErrorApi),
      isLoading: false,
    }
  }
}
