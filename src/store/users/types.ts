import { PayloadAction } from '@reduxjs/toolkit'
import { getAllUsersTypes } from 'services/users/get/api/types'

export type PayloadType = PayloadAction<getAllUsersTypes>
