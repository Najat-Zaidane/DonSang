import React, {useState,useEffect} from "react";
import {SafeAreaView, Text,StyleSheet,Image, View, TouchableOpacity,ScrollView, Button} from 'react-native'
import FooterTabs from "../components/nav/FooterTabs";
import {useSelector, useDispatch } from 'react-redux';
import { logout,reset } from "../redux/auth/authSlice";


const ProfileScreen = ({navigation}) =>{

    const dispatch = useDispatch()
   // const {user} = useSelector((state) => state.auth)

    const onLogout = async () => {
        dispatch(logout())
        dispatch(reset())
        navigation.navigate('Login')    
    }

    // just for cheking up
    const [loading, setLoading] = useState(true);

    const user = useSelector(state => state.auth.user);

    console.log('userinProfile', user)

    useEffect(() => {
        //  if user is found we'll set  the loading to false
        if (user) {
          setLoading(false);
        }
      }, [user]);


  
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.container2}>
            <Image
              source={require('../assets/user3.png')}
              style={styles.image}
            />
            <Text style={styles.text1}>{user.role} :</Text>
            <Text style={styles.text}>{loading ? "attend" : user.nom} {loading ? "attend" : user.prenom}</Text>
            <Text style={styles.text}>{loading ? "attend" : user.email} </Text> 
            </View>

            {/* mes rdvs section */}
           

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
      marginTop : 150,
     marginBottom : -100 ,
    },
    image : {
        height: 160,
        width: 160,
        borderRadius: 85,
        borderWidth: 1,
        borderColor: "#7CC1A6",
        marginBottom : 15
    },
    text : {
        fontSize: 14,
        marginVertical: 2,
        
    }, 
    text1 : {
      fontSize: 14,
      marginVertical: 2,
      fontWeight : 'bold'
  }, 
    loginButton: {
        backgroundColor: '#CE1A19',
        borderRadius: 25,
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