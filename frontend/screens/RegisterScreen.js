import  React, {useState}  from "react";
import {View, StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import Text from '@kaloraat/react-native-text'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Logo from "../components/Logo";


const RegisterScreen = () => {
  const [lname,setLname] = useState("")  //nom
  const [fname,setFname]= useState("")  //prenom
  const [email, setEmail] = useState("")
  const [number,setNumber] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")



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
                placeholder="Nom"
                value={lname}
                onChangeText={setLname}
                />

                {/* Prenom */}
                <TextInput
                style = {styles.input}
                placeholder="Prénom"
                value={fname}
                onChangeText={setFname}
                />

                {/* email */}
                <TextInput 
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
                />
                {/* number */}
                <TextInput
                style={styles.input}
                placeholder="Numéro de téléphone"
                keyboardType='numeric'
                value={number}
                onChangeText={setNumber}
                />

                {/*  Password */}
                <TextInput 
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
                />

                {/* Passsword confirmation */}
                <TextInput
                style={styles.input}
                placeholder="Confirmation du mot de passe"
                secureTextEntry
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                />

            <TouchableOpacity style={styles.signUpButton}>
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
