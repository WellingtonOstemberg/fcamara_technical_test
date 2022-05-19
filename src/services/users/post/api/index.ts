import { UserType } from 'types'
import { ErrorApi } from 'types/errorApi'
import { errorApi } from 'utils'
import { postUserTypes } from './types'

export const postUser = async (user: UserType): Promise<postUserTypes> => {
  try {
    // the asyncronous call will be done here
    const data = user
    console.log(user, 'postUser')

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
