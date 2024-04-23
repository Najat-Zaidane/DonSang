import React from "react";
import {SafeAreaView, Text,StyleSheet,Image, View, TouchableOpacity} from 'react-native'
import FooterTabs from "../components/nav/FooterTabs";
import {useSelector, useDispatch } from 'react-redux';
import { logout,reset } from "../redux/auth/authSlice";


const ProfileScreen = ({navigation}) =>{

    const dispatch = useDispatch()
    const {user} = useSelector((state) => state.auth)

    const onLogout = async => {
        dispatch(logout())
        dispatch(reset())
        navigation.navigate('Login')
    }
    

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container2}>
            <Image
              source={require('../assets/user1.png')}
              style={styles.image}
            />
            <Text style={styles.text}>Nom et prenom</Text>
            <Text style={styles.text}>email et tele</Text> 
            </View>

            <View  >
            <TouchableOpacity style={styles.loginButton} onPress={onLogout} >
            <Text style={styles.loginButtonText}>Se déconnecter </Text>
           </TouchableOpacity>
           </View>

            <FooterTabs/>
        </SafeAreaView>
    )
}

export default ProfileScreen;

const styles=StyleSheet.create ({
    container :{
           flex: 1,
          justifyContent : "space-between",
          backgroundColor: "#f0f3f5",
    },
    container2: {
        justifyContent : 'center',
      alignItems : 'center',
      marginTop : 100,
    //  marginBottom : -100 ,
    },
    image : {
        height: 170,
        width: 170,
        borderRadius: 85,
        borderWidth: 2,
        borderColor: "#31D194",
        marginBottom : 15
    },
    text : {
        fontSize: 14,
       // marginBottom: 4,
        marginVertical: 5,
    }, 
    loginButton: {
        backgroundColor: '#CE1A19',
       // padding: 10,
        borderRadius: 20,
        justifyContent: 'center',
        //marginBottom : 15,
        height : 58,
        marginHorizontal: 80
      },
      loginButtonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize : 15,
        fontWeight : 'bold'
      },
});