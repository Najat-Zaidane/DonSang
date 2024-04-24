//this component is used to create the home screen content  for the app
//it displays a list of items that can be clicked on and navigates to different pages based on what was clicked

import React, { useEffect , useState} from "react";
import { View, TouchableOpacity, StyleSheet, SafeAreaView ,ImageBackground, ScrollView,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {useSelector} from "react-redux"
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


//this component  displays a single item on the home page
    export const Section = ({sectionNameRoute,sectionName,source}) =>{
        const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate(sectionNameRoute)}>
            <ImageBackground
            source={source}
            style={styles.sectionButton}
            resizeMode="cover" 
            blurRadius={6}
            >
            <Text style={styles.sectionButtonText}>{sectionName}</Text>
            <FontAwesome5 name="chevron-right" size={25} style={styles.icon}/>
            </ImageBackground>
            </TouchableOpacity>
    );
    };

const HomeContent = () => {
  
    // those lines before the return are to fetch the user data for any use case
    const [loading, setLoading] = useState(true);

    const user = useSelector(state => state.auth.user);

    console.log('userinHomeContent', user)

    useEffect(() => {
       
        if (user) {
          setLoading(false);
        }
      }, [user]);

    return (
        <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>
                Bienvenue, sur EasyDonate !
        </Text>
        <Text style={styles.introText}>
        Votre plateforme de prise de rendez-vous pour les dons de sang simplifiée.  
        </Text>

        <Text style={styles.introText2}>
        Planifiez vos rendez-vous pour donner du sang et sauver des vies !
        </Text>

        </View>
    
        {/* Conteneur pour les sections cliquables */}
        <View style={styles.sectionContainer}>
        <Section  sectionNameRoute='DonSang' sectionName='Processus de don de sang' source={require('../assets/image1.png')} />
        <Section  sectionNameRoute='AdDon' sectionName="Critères d'admissibilité" source={require('../assets/image2.png')} />
        <Section  sectionNameRoute='ImpactDon' sectionName='Impact des dons de sang'  source={require('../assets/image3.png')}/> 
           
        </View>

        </ScrollView>
    );
    };

    //Style
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f3f5', 
        //marginTop:10,
        marginBottom: 15
    },

    welcomeContainer: {
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: "center",
        padding: 20,
    },
    welcomeText: {
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
        color:"#CE1A19",
        marginBottom: 12,
       // textTransform: 'uppercase',
    },
    introText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#140F1F', 
        marginBottom:10
    },
    introText2: {
        fontSize: 15,
        textAlign: 'center',
        color: '#140F1F', 
        marginBottom:10,
        fontWeight: "bold",
    },
    sectionContainer: {
        marginTop: 30,
    },
    sectionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
        marginBottom: 22,
        paddingVertical: 30, // ajuster la hauteur
        paddingHorizontal: 50,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    sectionButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 18,
        color: '#FFFFFF',
    
    },
    icon: {
        color: '#ffffff',
    },
    });

    export default HomeContent;