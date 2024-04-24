//this component is used to create the home screen content  for the app
//it displays a list of items that can be clicked on and navigates to different pages based on what was clicked

import React, { useEffect , useState} from "react";
import { View, TouchableOpacity, StyleSheet, SafeAreaView ,ImageBackground, ScrollView,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {useSelector} from "react-redux"
import AsyncStorage from '@react-native-async-storage/async-storage';


//this component  displays a single item on the home page
    // export const Section = ({sectionNameRoute,sectionName,source}) =>{
    //     const navigation = useNavigation();
    // return (
    //     <TouchableOpacity onPress={() => navigation.navigate(sectionNameRoute)}>
    //         <ImageBackground
    //         source={source}
    //         style={styles.sectionButton}
    //         resizeMode="cover" 
    //         blurRadius={10}
    //         >
    //         <Text style={styles.sectionButtonText}>{sectionName}</Text>
    //         <FontAwesome5 name="chevron-right" size={25} style={styles.icon}/>
    //         </ImageBackground>
    //         </TouchableOpacity>
    // );
    // };

const HomeContent = () => {

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
                Bienvenue, {loading ? "attend" : user.nom} {user.prenom} !
        </Text>
        <Text style={}
        </View>
    
        {/* Conteneur pour les sections cliquables */}
        {/* <View style={styles.sectionContainer}>
        <Section  sectionNameRoute='Apropos' sectionName='A Propos' source={require('../assets/fac1.jpeg')} />
        <Section  sectionNameRoute='Administration' sectionName='Administration' source={require('../assets/fac2.jpg')} />
            <Section  sectionNameRoute='Departement' sectionName='Départements'  source={require('../assets/fac4.jpg')}/> 
            <Section  sectionNameRoute='EspaceLoisir' sectionName='Espace Loisirs' source={require('../assets/fac5.jpg')}/>
        </View> */}

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
        marginTop:10,
        marginBottom: 15
    },

    welcomeContainer: {
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: "center",
        padding: 20,
    },
    welcomeText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color:"#CE1A19",
        marginBottom: 10,
        textTransform: 'uppercase',
    },
    // introText: {
    //     fontSize: 16,
    //     textAlign: 'center',
    //     color: '#140F1F', 
    // },
    sectionContainer: {
        marginTop: 30,
    },
    sectionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 22,
        marginBottom: 25,
        paddingVertical: 30, // ajuster la hauteur
        paddingHorizontal: 72,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    sectionButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginRight: 18,
    // color: '#FEAC5D',
        color: '#FFFFFF',
    
    },
    icon: {
        color: '#FFFFFF',
        //color: '#FEAC5D',

    },
    });

    export default HomeContent;