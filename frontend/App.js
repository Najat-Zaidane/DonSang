//The entry point to the app 
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from './screens/HomeScreen';


const Stack = createNativeStackNavigator(); //Fonction qui renvoie la prop screen et navigator ( qui contient les screens)

export default function App() {
  return (
    <NavigationContainer  initialRouteName='Home'> 
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false, headerLeft: null}}/>
       <Stack.Screen name="Register" component={RegisterScreen} options ={{headerShown: false, headerLeft:null}}/>
        <Stack.Screen name="Login" component={LoginScreen} options ={{headerShown: false, headerLeft:null}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

