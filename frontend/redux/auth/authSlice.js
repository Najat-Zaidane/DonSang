// in ths file is where our reducers or our initial state gonna go 
// with redux tool kit, updating the state with what we get back from the server is gonna be easier
//the createAsyncThunk is in order to have async functions to update the states
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSlice , createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'


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

//Login user

export const login = createAsyncThunk('auth/login',async(user , thunkApi) => {
    try {
      
        return await authService.login(user);

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

// //fetch the user data
// export const getUserData = createAsyncThunk('auth/getUserData', async() => {
//     try  {
//         return await authService.getUserData()

//     } catch(error){
//         console.log("Error in getting User Data")
//     }
// }) 


// Logout =  destorying the token
export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})



//le slice d'authentification est créé, et on utilise le dispatch pour envoyer une action à notre reducer

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
        .addCase(login.pending, (state) => {
            state.isLoading = true  //fetching the data
          })
          .addCase(login.fulfilled, (state, action)=> {
            state.isLoading = false 
            state.isSuccess = true
            state.user = action.payload
            // Save user data to AsyncStorage after successful registration
            AsyncStorage.setItem('userData', JSON.stringify(action.payload))
          })
          .addCase(login.rejected, (state,action)=>{
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



// exporting the actions so we can use it in other components
export const { reset } = authSlice.actions

// Exporting the reducer
export default  authSlice.reducer;
