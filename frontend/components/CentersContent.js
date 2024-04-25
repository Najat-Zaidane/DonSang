import React, {useState, useEffect} from "react";
import { View,ScrollView, Text, StyleSheet, Image, TextInput} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';
import axios from 'axios';


const API_URL_centers = 'http://192.168.1.101:5000/api/centers/'

const  CentersContent = () => {

    const [centers, setCenters] = useState([]);

    const [keyword,setKeyword] = useState('');

    // Fonction pour mettre à jour le texte de recherche
    const handleSearch = (text) => {
        setKeyword(text);
    };

    // Filtrer les centres en fonction du texte de recherche
    const filteredCenters = centers.filter(center =>
        center.nom.toLowerCase().includes(keyword.toLowerCase())
    );

    //récupération des centres de santé 

    const fetchCenters = async () => {
        try {
            const response = await axios.get(API_URL_centers)
            console.log('centersinCENTERSCREEN', response.data)
           setCenters(response.data);  // mise à jour du state centers avec les données de l'API
        } catch (error) {
            console.error('Failed to fetch centers:', error)
        }
    };

    useEffect(() => {
        fetchCenters(); //L'appel du fetchCenters() lors du montage du composant pout que les centres seront récupérés
                        // qd le composant est affiché à l'user a chaque reload 
    }, []);
    

    return (
        <ScrollView style={styles.container} >
 
            <Text style={styles.title}>Découvrez les centres de santé disponibles</Text>
            
            {/* Barre de recherche */}
            <View style={styles.searchContainer}>
            <TextInput
                placeholder="Rechercher un centre..."
                placeholderTextColor="#9695b0"
                onChangeText={handleSearch}
                value={keyword}
                style={styles.searchbar}
            />

            <View style={styles.searchFloating}>
            <View style={styles.searchButton}>
                <FeatherIcon name="search" size={20} color="#003CA6" />
            </View>
            </View>
            </View>
  

         

           {/* Liste des centres filtrés */}
           {filteredCenters.map(center => (
                <View key={center.id} style={styles.section}>
                    <Text style={styles.sectionTitle}>
                        <FontAwesome5 name="hospital" size={15} style={styles.icon} />
                        {center.nom}
                    </Text>
                    <Text style={styles.sectionText}>Adresse : {center.adresse}</Text>
                    <Text style={styles.sectionText}>Email : {center.email}</Text>
                </View>
            ))}
            


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f3f5",
        padding:15
    },
    title: {
        fontSize: 18,
        marginTop: 25,
        fontWeight: "bold",
        marginBottom: 25,
        color: "#CE1A19",
        textAlign: 'center',
    },
    searchContainer : {
        borderRadius: 8,
        paddingHorizontal: 30,  
        marginBottom: 30,
    },
    section:{ 
        marginBottom: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#7CC1A6",
        paddingBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        marginLeft: 7,
    },
    sectionText : {
        fontSize: 15,
        color: "#140F1F",
        marginLeft: 7,
    },
    icon: { 
       color : '#7CC1A6',
       marginRight: 10,
    },
    logoContainer : {
        marginTop : 20,
        marginBottom :-16,
        alignItems:'center' , 
        justifyContent:'center', 
      },
    logo : {
     width : 160,
     height : 80,
     resizeMode:"contain",
    },
    searchbar: {
        height: 55,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        color: '#003CA6', // i could change it to black 
        fontSize: 15,
        borderRadius: 9999,
        borderWidth: 0.15 , 
        shadowOpacity : 0.15
    },
    searchFloating: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 40,
      },
      searchButton: {
        alignSelf: 'center',
        width: 44,
        height: 44,
        borderRadius: 9999,
        justifyContent: 'center',
        alignItems: 'center',
      },
   
});

export default CentersContent;
