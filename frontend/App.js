//The entry point to the app 
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen"


const Stack = createNativeStackNavigator(); //Fonction qui renvoie la prop screen et navigator ( qui contient les screens)

export default function App() {
  return (
    <NavigationContainer  initialRouteName='Register'> 
      <Stack.Navigator>
       <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

