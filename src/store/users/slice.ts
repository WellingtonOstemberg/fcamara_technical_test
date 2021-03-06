import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAllUsersTypes } from 'services/users/get/api/types'
import { UserType } from 'types'
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
    setUser(state, action: PayloadAction<UserType>) {
      return { ...state, users: [...state.users, action.payload] }
    },
    setUserUpdate(state, action: PayloadAction<UserType>) {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id ? { ...user, ...action.payload } : user,
        ),
      }
    },
    setUserDelete(state, action: PayloadAction<number>) {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      }
    },
    getUsers(state) {
      return { ...state }
    },
  },
})

export const {
  usersLoading,
  setUsers,
  getUsers,
  setUser,
  setUserUpdate,
  setUserDelete,
} = usersAsyncSlice.actions

export const usersAsync = usersAsyncSlice.reducer
