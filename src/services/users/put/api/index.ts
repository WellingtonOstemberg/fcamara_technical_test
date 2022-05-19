import { UserType } from 'types'
import { ErrorApi } from 'types/errorApi'
import { errorApi } from 'utils'
import { putUserTypes } from './types'

export const putUser = async (user: UserType): Promise<putUserTypes> => {
  try {
    // the asyncronous call will be done here
    const data = user

    return {
      user: data,
      error: '',
      isLoading: false,
    }
  } catch (e) {
    return {
      user: {},
      error: errorApi(e as ErrorApi),
      isLoading: false,
    }
  }
}
