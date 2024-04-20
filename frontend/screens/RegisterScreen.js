import  React, {useState}  from "react";
import {View, StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import Text from '@kaloraat/react-native-text'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Logo from "../components/Logo";


const RegisterScreen = () => {

  // the state for the form registry
  const [formData, setFormData] = useState({
    lname : '',
    fname : '',
    email: '',
    number: '',
    password: '',
    password2: '', 
  })

  //distracture the fields from the state object 
  const {lname,fname,email,number,password,password2}= formData

  //to handle changes in the inputs
  const onChangeText = (text,inputName) => { 
    setFormData((prevState) => ({
      ...prevState,
      [inputName]  : text
    }))
  }

  //to handle submiting the form
  const OnPress = () => {
    //send form data to the api/db 

    //for now
    console.log('Form submitted:', formData)
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
                value={lname}
               onChangeText={(text) => onChangeText(text, 'lname')}
                />

                {/* Prenom */}
                <TextInput
                style = {styles.input}
                placeholder="Entez votre prénom"
                value={fname}
                onChangeText={(text) => onChangeText(text, 'fname')}
               
                />

                {/* email */}
                <TextInput 
                style={styles.input}
                placeholder="Entez votre e-mail"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => onChangeText(text, 'email')}
                
                />
                {/* number */}
                <TextInput
                style={styles.input}
                placeholder="Entez votre numéro téléphonique"
                keyboardType='numeric'
                value={number}
                onChangeText={(text) => onChangeText(text, 'number')}
             
                />

                {/*  Password */}
                <TextInput 
                style={styles.input}
                placeholder="Entez votre mot de passe"
                secureTextEntry
                value={password}
                onChangeText={(text) => onChangeText(text, 'password')}
              
                />

                {/* Passsword confirmation */}
                <TextInput
                style={styles.input}
                placeholder="Confirmez votre mot de passe"
                secureTextEntry
                value={password2}
                onChangeText={(text) => onChangeText(text, 'password2')}
             
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
