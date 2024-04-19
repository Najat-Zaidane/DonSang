import React  from "react";
import {Text, View, StyleSheet,TextInput} from 'react-native'

const Register = () => {
    return(
        <View style={styles.container}>
            <Text style= {styles.text}>This is the Register Page.</Text>
        </View>
    )

}

export default Register;

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
    },
    text : {
        fontSize : 24,
        color: '#333',
    }
})
