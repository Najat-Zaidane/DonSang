import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    rdvs : [], 
    isError : false, 
    isSuccess: false, 
    isLoading : false,
    message: ''
}

export const rdvSlice = createSlice({
    name : 'rdv',
    initialState,
    reducers : {
        reset : (state) => initialState
    },  
})

export const {reset} = rdvSlice.actions
export default rdvSlice.reducer