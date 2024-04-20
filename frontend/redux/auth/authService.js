//this service is for making http request and sending the data back
//axios is for  handling http requests, it's a promise based library
//its similar to what we did with postman
import { Axios } from "axios";

const API_URL = '/api/users/'

//Register User 
const register = async (userData) => {
    //getting the response of the request from the server
    
    //POST request with its response in the variable response
    const response = await Axios.post(API_URL, userData)

    
    //axios put the data inside of an object called data 
    if(response.data) {
        localStorage.setItem('user' , JSON.stringify(response.data)) // the response.data will include the token
    }

    return response.data

}

const authService = {
    register,
}

export default authService;
