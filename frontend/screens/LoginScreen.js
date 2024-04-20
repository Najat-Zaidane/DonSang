import React  from "react";
import {View, StyleSheet,TextInput, TouchableOpacity} from 'react-native'
import Text from '@kaloraat/react-native-text'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LogoCopy from "../components/LogoCopy";
const LoginScreen = () => {

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
                />

                {/*  Password */}
                <TextInput 
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry
                />

            <TouchableOpacity style={styles.signUpButton}>
              <Text bold medium center style={styles.signUpButtonText}>Se connecter</Text>
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
