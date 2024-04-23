import React , {useState, useEffect} from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text,View, StyleSheet } from "react-native";



const WelcomeMessage = () => {
       
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>
                Bienvenue sur notre application  !
            </Text>
        </View>
    )
}
export default WelcomeMessage;

//styles
const styles = StyleSheet.create({
    container : {
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    welcomeText: {
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
        color:"#CE1A19",
        marginBottom: 10,
        textTransform: 'uppercase',
       //color : "#1D828E",
    },
})