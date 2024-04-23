import React, {useEffect, useState }  from "react";
import {View, StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import Text from '@kaloraat/react-native-text'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LogoCopy from "../components/LogoCopy";
import {useSelector , useDispatch} from 'react-redux'
import { login,reset } from "../redux/auth/authSlice";
import Spinner from "../components/Spinner"


const LoginScreen = ({navigation}) => {

  const [formData,setFormData] = useState({
    email : '',
    pwd : '',
  })

  const {email, pwd} = formData 

  const dispatch = useDispatch()

  const {user , isLoading , isError, isSuccess, message } = useSelector
  (
    (state)=> state.auth
  )

  useEffect (() => {
    if(isError) {
      alert(message)
      console.log(message)
    }

    if(isSuccess || user){
      navigation.navigate('Home') 
    }

    //after checking everything we gonna reset the state  to its default value : false
    dispatch(reset())

  }, [user, isError, isSuccess, message, navigation.navigate, dispatch])

//to handle the inputs change
const onChangeText = (text , inputName) =>{
  setFormData((prevState) => ({
    ...prevState,
    [inputName] : text
  }))
}

//to handle submiting the form 
const OnPress = async () => {

  if(!email || !pwd){
    alert("Veuillez Remplir tous les champs")
    return;
  } 
  //the user is validated iin the backend
    const userData = {  
      email,
      pwd
    }

 //  console.log(userData)

  dispatch(login(userData)) 
  }

if(isLoading) {
  return <Spinner/>
}

    return(
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
             <LogoCopy/>
        <View style={styles.form}>

            {/* LOGIN  Form Title*/}
            <Text title center style= {styles.title}>Connexion</Text>

            {/*  LOGIN Form */}
            <View style={{ marginHorizontal: 25 }}>
            
                {/* email */}
                <TextInput 
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => onChangeText(text,'email')}
                />

                {/*  pwd */}
                <TextInput 
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry
                value={pwd}
                onChangeText={(text) => onChangeText(text, 'pwd')}
                />

            <TouchableOpacity style={styles.signUpButton}>
              <Text bold medium center style={styles.signUpButtonText} onPress={OnPress}>Se connecter</Text>
            </TouchableOpacity>

            <Text center >
            Vous n'avez pas de compte ?
              <Text color="#CE1A19" onPress={() => navigation.navigate('Register')}> Créez-en un !</Text>
            </Text> 

            </View>
        </View>
        </KeyboardAwareScrollView>
    )

}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f0f3f5",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    form : {
        flex : 1,
        justifyContent : 'center',
    },
    title: {
        color: "#003CA6",
        marginBottom: 12,
        marginTop : -5,
        fontSize:27
      },
    input: {
        borderBottomWidth: 1.0,
        borderBottomColor: '#8e93a1',
        marginBottom: 12,
        padding: 11, 
        fontSize: 16,
        color: '#1D1D1D',
      },
      signUpButton: {
        backgroundColor: '#003CA6',
        borderRadius: 30,
        justifyContent: 'center',
        marginBottom: 20,
        marginTop:15,
        height: 50,
      },
      signUpButtonText: {
        color: '#FFFFFF',
        textAlign: 'center',
      },
})
