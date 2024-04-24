//The entry point to the app 
import React from 'react';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Provider } from 'react-redux'; 
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen'
import RdvScreen from './screens/RdvScreen'
import CentersScreen from './screens/CentersScreen'
import { store } from './redux/store';
import DonSangScreen from './screens/ProcessusScreen';
import AdDonScreen from './screens/CritereScreen';
import ImpactDonScreen from './screens/ImpactDonScreen';
import CritereScreen from './screens/CritereScreen';
import ProcessusScreen from './screens/ProcessusScreen';


//The provider actually is to make the store so the global states available to any nested components that need acces to it 


const Stack = createNativeStackNavigator(); //Fonction qui renvoie la prop screen et navigator ( qui contient les screens)

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer  initialRouteName='Login'> 
      <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options ={{headerShown: false, headerLeft:null}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, headerLeft: null}}/> 
      
      <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false, headerLeft: null}}/>
      <Stack.Screen name="Register" component={RegisterScreen} options ={{headerShown: false, headerLeft:null}}/> 
      <Stack.Screen name="Rdv" component={RdvScreen} options ={{headerShown: false, headerLeft:null}}/> 
      <Stack.Screen name="Centers" component={CentersScreen} options ={{headerShown: false, headerLeft:null}}/> 
      <Stack.Screen name="Processus" component={ProcessusScreen} /> 
      <Stack.Screen name="Criteres" component={CritereScreen} /> 
      <Stack.Screen name="ImpactDon" component={ImpactDonScreen} /> 

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

