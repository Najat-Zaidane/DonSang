import React, {useState,useEffect} from "react";
import {SafeAreaView, Text,StyleSheet,Image, View, TouchableOpacity,ScrollView, Button} from 'react-native'
import FooterTabs from "../components/nav/FooterTabs";
import {useSelector, useDispatch } from 'react-redux';
import { logout,reset } from "../redux/auth/authSlice"
import axios from 'axios'

const API_URL_RDV = 'https://foxhound-resolved-jackal.ngrok-free.app/api/rdvs/'


const ProfileScreen = ({navigation}) =>{

    const dispatch = useDispatch()

    const onLogout = async () => {
        dispatch(logout())
        dispatch(reset())
        navigation.navigate('Login')    
    }

    // just for cheking up
    const [loading, setLoading] = useState(true);

    const user = useSelector(state => state.auth.user);

    console.log('userinProfile', user)

     //to display rdvs
     const [rdvs, setRdvs] = useState([]);


     const fetchRdvs = async () => {
       try {
           const response = await axios.get(API_URL_RDV, {
               headers: {
                   Authorization: `Bearer ${user.token}` // pour envoyez le token d'authentification avec la requête
               }
           });
           console.log('rdvsinProfile',response.data)
           setRdvs(response.data); 
       } catch (error) {
           console.error('Failed to fetch appointments:', error);
       }
   };

    useEffect(() => {
        //  if user is found we'll set  the loading to false
        if (user) {
          setLoading(false);
          fetchRdvs();
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

            {/* to re check */}
           
           <View style={styles.rdvSec}>
            <Text style={styles.rdvTitle}>Mes rendez-vous :</Text>
                {rdvs.map(rdv => (
                    <View key={rdv.id}>
                        <Text style={styles.rdv}>
                          Rendez vous pour le : {rdv.date} - {rdv.status}
                          </Text>
                      
                    </View>
                ))}
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
  rdvSec: {
      justifyContent: 'center',
      alignItems : 'center',
  },
  rdvTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom:10,
    textAlign : 'center',
   // color: "#1D828E"
  },
  rdv : {
   marginBottom : 10,

  },
    container :{
           flex: 1,
          justifyContent : "space-between",
          backgroundColor: "#f0f3f5",
    },
    container2: {
      justifyContent : 'center',
      alignItems : 'center',
      marginTop : 80,
      marginBottom : -20 ,
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