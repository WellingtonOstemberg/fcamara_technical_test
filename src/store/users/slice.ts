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
    setUsers(state, { payload }: PayloadType) {
      return { ...state, ...payload }
    },
    getUsers(state) {
      return { ...state }
    },
  },
})

export const { usersLoading, setUsers, getUsers } = usersAsyncSlice.actions

export const usersAsync = usersAsyncSlice.reducer
