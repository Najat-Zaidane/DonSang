import {configureStore} from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'
import rdvReducer from './rdvs/rdvSlice'

export const store = configureStore({
    reducer : {
        auth : authReducer,
        rdv: rdvReducer
    },
})