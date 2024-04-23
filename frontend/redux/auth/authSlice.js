// in ths file is where our reducers or our initial state gonna go 
// with redux tool kit, updating the state with what we get back from the server is gonna be easier
//the createAsyncThunk is in order to have async functions to update the states
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

//when we register or login we get a back a token that we need to access the protected routes
//so we gonna get that token and save it to our local storage

const initialState = {
    user: null, 
    isError : false,
    isSuccess: false,
    isLoading : false,
    message: ''
}

// creating the slice

//Register user
//the user we gonna get from the register component
export const register = createAsyncThunk('auth/register',async(user , thunkApi) => {
    try {
        //returning the payload ( data) that are coming back from the register function of the service 
        return await authService.register(user);
    } catch (error) {
        const message = 
        (error.response && 
        error.response.data && 
        error.response.data.message) || 
        error.message || 
        error.toString()

        //to reject then send the error message as payload
        return thunkApi.rejectWithValue(message)
    }
})

// Logout =  destorying the token
export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})




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
    extraReducers : (builder) => {
        builder 
          .addCase(register.pending, (state) => {
            state.isLoading = true  //fetching the data
          })
          .addCase(register.fulfilled, (state, action)=> {
            state.isLoading = false 
            state.isSuccess = true
            state.user = action.payload
             // Save user data to AsyncStorage after successful registration
             AsyncStorage.setItem('userData', JSON.stringify(action.payload))
          })
          .addCase(register.rejected, (state,action)=>{
            state.isLoading = false 
            state.isError = true // because we're in the rejection case wich means we have an error 
            state.message = action.payload
            state.user = null // beacause during the register smth went wrong 
        })
        .addCase(logout.fulfilled, (state)=>{
            state.user = null

        })

}
})

// exporting the actions that will be created : 
//exporting the reset action so we can use it in other components
export const { reset} = authSlice.actions
export default  authSlice.reducer;
