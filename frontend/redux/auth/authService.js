//this service is for making http request and sending the data back
//axios is for  handling http requests, it's a promise based library
//its similar to what we did with postman
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from'axios'


const API_URL = 'http://192.168.1.101:5000/api/users/'



//Register User 
const register = async (userData) => {
    try{

    //getting the response of the request from the server
    
    //POST request with its response in the variable response
     const response = await axios.post(API_URL, userData)

    
    //axios put the data inside of an object called data 
    if(response.data) {
        await AsyncStorage.setItem('user', JSON.stringify(response.data)) // the response.data will include the token
    }

    return response.data
}catch (error) {
    console.error( error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};


//login User 
const login = async (userData) => {
    try{
     const response = await axios.post(API_URL + 'login', userData)

    if(response.data) {
        await AsyncStorage.setItem('user', JSON.stringify(response.data)) // the response.data will include the token
    }
   
 
}catch (error) {
    console.error( error);
    throw error; // Re-throw the error to propagate it to the caller
  }
};

// //fetch user Data
// const  getUserData = async ({navigation})=>{
//     try{
//    const token = await  AsyncStorage.getItem('token')

//    if(!token){
//        alert("You must be logged in")
//        navigation.navigate('Register')
//    }else{
//         const response = await axios.get(API_URL +'me',{headers:{Authorization:`Bearer ${token}`}})
        
//         return response.data
//    }
// } catch (error) {
//     console.log(error)
// }
// }



//Logout user
const logout = () => {
    AsyncStorage.removeItem('user' )
}

const authService = {
    register,
    login,
   // getUserData,
    logout,
}

export default authService;
