import { createSlice } from '@reduxjs/toolkit'
import { getAllUsersTypes } from 'services/users/get/api/types'
import { PayloadType } from './types'

const initialState: getAllUsersTypes = {
  isLoading: false,
  users: [],
  error: '',
}

const usersAsyncSlice = createSlice({
  name: 'usersAsync',
  initialState,
  reducers: {
    usersLoading(state) {
      return { ...state, isLoading: true }
    },
    getUsers(state, { payload }: PayloadType) {
      return { ...state, ...payload }
    },
  },
})

export const { usersLoading, getUsers } = usersAsyncSlice.actions

export const usersAsync = usersAsyncSlice.reducer
