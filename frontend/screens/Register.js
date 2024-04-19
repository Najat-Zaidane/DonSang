import React  from "react";
import {View, StyleSheet,TextInput} from 'react-native'
import Text from '@kaloraat/react-native-text'


const Register = () => {
    return(
        <View style={styles.container}>

            {/* Registry  Form Title*/}
            <Text title center style= {styles.title}>Créer un compte</Text>

            {/*  Registry Form */}
            <View style={{ marginHorizontal: 25 }}>
               
                {/* Nom */}
                <TextInput
                style = {styles.input}
                placeholder="Nom"
                //onChangeText={(text) => console.log(text)}
                />

                {/* Prenom */}
                <TextInput
                style = {styles.input}
                placeholder="Prénom"
                />

                {/* email */}
                <TextInput 
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                />
                {/* number */}
                <TextInput
                style={styles.input}
                placeholder="Numéro de téléphone"
                keyboardType='numeric'
                />

                {/*  Password */}
                <TextInput 
                style={styles.input}
                placeholder="Mot de passe"
                secureTextEntry
                />

                {/* Passsword confirmation */}
                <TextInput
                style={styles.input}
                placeholder="Confirmation du mot de passe"
                secureTextEntry
                />


                
            </View>
        </View>
    )

}

export default Register;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
    },
    title: {
        color: "#003CA6",
        marginBottom: 12,
        marginTop : -5,
      },
    input: {
        borderBottomWidth: 1.1,
        borderBottomColor: '#8e93a1',
        marginBottom: 12,
        padding: 13, 
        fontSize: 18,
        color: '#1D1D1D',
      },
})
