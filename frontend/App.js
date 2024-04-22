//The entry point to the app 
import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Provider } from 'react-redux'; 
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from './screens/HomeScreen';
import { store } from './redux/store';


//The provider actually is to make the store so the global states available to any nested components that need acces to it 


const Stack = createNativeStackNavigator(); //Fonction qui renvoie la prop screen et navigator ( qui contient les screens)

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer  initialRouteName='Home'> 
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options ={{headerShown: false, headerLeft:null}}/>
      <Stack.Screen name="Register" component={RegisterScreen} options ={{headerShown: false, headerLeft:null}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, headerLeft: null}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

