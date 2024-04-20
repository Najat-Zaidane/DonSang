// in ths file is where our reducers or our initial state gonna go 
// with redux tool kit, updating the state with what we get back from the server is gonna be easier
//the createAsyncThunk is in order to have async functions to update the states
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'

// Get user from local Storage
// the parse() is because the local storage can only have strings
const user = JSON.parse(localStorage.getItem('User'))

const initialState = {
    user: user ? user : null, // if there's a user in the local storage i'm gonna use it esle it's null
    isError : false,
    isSuccess: false,
    isLoading : false,
    message: ''
}

// creating the slice

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers : {
        //the function reset is to set the states to the default value (false) when we register 
        reset : (state) =>  {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    }, 
    extraReducers : () => {}
})

// exporting the actions that will be created : 
//exporting the reset action so we can use it in other components
export const { reset} = authSlice.actions
export default  authSlice.reducer;