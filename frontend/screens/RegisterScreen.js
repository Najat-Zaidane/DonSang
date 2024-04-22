import  React, {useEffect, useState}  from "react";
import {View, StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import Text from '@kaloraat/react-native-text'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Logo from "../components/Logo";
//import { useNavigation } from "@react-navigation/native";
import Spinner from "../components/Spinner"


// useSelector is used to select  the state of the store 
// useDispatch is used to dispatch actions to the store.
import {useSelector , useDispatch} from 'react-redux'
import { register,reset } from "../redux/auth/authSlice";


const RegisterScreen = ({navigation}) => {

  // the state for the form registry
  const [formData, setFormData] = useState({
    nom : '',
    prenom : '',
    role:'',
    email: '',
    tele: '',
    pwd: '',
    pwd2: '', 
  })

  //distracture the fields from the state object 
  const {nom,prenom,role,email,tele,pwd,pwd2}= formData

  //const navigate = useNavigation()
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

  //to handle changes in the inputs
  const onChangeText = (text,inputName) => { 
    setFormData((prevState) => ({
      ...prevState,
      [inputName]  : text
    }))
  }

  //to handle submiting the form 
  const OnPress = async () => {
    if(!nom || !prenom ||!role  ||!email ||  !tele ||!pwd ||!pwd2 ){
      alert("Veuillez Remplir tous les champs")
      return;
    } 

    if(pwd !== pwd2 ){
      alert("Les mots de passe entrés ne sont pas conformes, veuillez ressayer !")
    } else {
      const userData = {
        nom,
        prenom,
        role,
        email,
        tele,
        pwd,
      }
     console.log(userData)

    dispatch(register(userData)) //dispatching the action register
    }

    //console.log('Form submitted:', formData)
  }

  if(isLoading) {
     return <Spinner/>
  }

    return(
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
             <Logo/>
        <View style={styles.form}>

            {/* Registry  Form Title*/}
            <Text title center style= {styles.title}>Créer un compte</Text>

            {/*  Registry Form */}
            <View style={{ marginHorizontal: 25 }}>
               
                {/* Nom */}
                <TextInput
                style = {styles.input}
                placeholder="Entez votre nom"
                value={nom}
               onChangeText={(text) => onChangeText(text, 'nom')}
                />

                {/* Prenom */}
                <TextInput
                style = {styles.input}
                placeholder="Entez votre prénom"
                value={prenom}
                onChangeText={(text) => onChangeText(text, 'prenom')}
               
                />

                {/* role */}
                <TextInput
                style = {styles.input}
                placeholder="Entez votre role (Donator, Admin) "
                value={role}
                onChangeText={(text) => onChangeText(text, 'role')}
               
                />

                {/* email */}
                <TextInput 
                style={styles.input}
                placeholder="Entez votre e-mail"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => onChangeText(text, 'email')}
                
                />
                {/* tele */}
                <TextInput
                style={styles.input}
                placeholder="Entez votre numéro téléphonique"
                keyboardType='numeric'
                value={tele}
                onChangeText={(text) => onChangeText(text, 'tele')}
             
                />

                {/*  pwd */}
                <TextInput 
                style={styles.input}
                placeholder="Entez votre mot de passe"
                secureTextEntry
                value={pwd}
                onChangeText={(text) => onChangeText(text, 'pwd')}
              
                />

                {/* Passsword confirmation */}
                <TextInput
                style={styles.input}
                placeholder="Confirmez votre mot de passe"
                secureTextEntry
                value={pwd2}
                onChangeText={(text) => onChangeText(text, 'pwd2')}
             
                />

            <TouchableOpacity style={styles.signUpButton} onPress={OnPress}>
              <Text bold medium center style={styles.signUpButtonText}>
                S'inscrire
              </Text>
            </TouchableOpacity>

            <Text center >
              Vous avez déjà un compte ?
              <Text color="#CE1A19" onPress={() => navigation.navigate('Login')}> Connectez vous !</Text>
            </Text> 

                
            </View>
        </View>
        </KeyboardAwareScrollView>
    )

}

export default RegisterScreen;

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
