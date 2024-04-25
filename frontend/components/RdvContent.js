import React, {useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker'
import {useSelector, useDispatch } from 'react-redux';
import { Alert } from 'react-native';

/* 
avec adress ip pc 
const API_URL_centers = 'http://192.168.56.1:5000/api/centers/'
const API_URL_creneaux = 'http://192.168.56.1:5000/api/creneaus/'
const API_URL_RDV = 'http://192.168.56.1:5000/api/rdvs/'

 */
// const API_URL_centers = process.env.API_UR+'centers/'
// const API_URL_creneaux = process.env.API_UR+'creneaus/'
// const API_URL_RDV = process.env.API_UR+'rdvs/'

//avec ngrok
const API_URL_centers = 'https://foxhound-resolved-jackal.ngrok-free.app/api/centers/'
const API_URL_creneaux = 'https://foxhound-resolved-jackal.ngrok-free.app/api/creneaus/'
const API_URL_RDV = 'https://foxhound-resolved-jackal.ngrok-free.app/api/rdvs/'


const RdvContent = () => {
    
    const [selectedDate, setSelectedDate] = useState(new Date());

    const [selectedCenter, setSelectedCenter] = useState();
    const [centers, setCenters] = useState([]);

    const[selectedCreneau, setSeelectedCreneau] = useState();
    const [creneaux, setcreneaux] = useState([])
  

     //Date partie

    // Fonction appelée lorsque la date est sélectionnée dans le sélecteur de date
    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setSelectedDate(currentDate);
    };

    //centers part 

    // Fnct pour récupération de la liste des centres depuis l API
    // execution fnct sera mis en pause jusqu'a reception des données de l'api avec la requete get
    const fetchCenters = async () => {
        try {
            const response = await axios.get(API_URL_centers)
            console.log('centersinRDVSCREEN', response.data)
            setCenters(response.data);  // mise à jour du state centers avec les données de l'API
        } catch (error) {
            console.error('Failed to fetch centers:', error)
        }
    };

    useEffect(() => {
        fetchCenters(); //L'appel du fetchCenters() lors du montage du composant pout que les centres seront récupérés
                        // qd le composant est affiché à l'user a chaque reload 
    }, []);

   //creneaux partie
   const fetchCreneaux = async () => {
    try {
        const response = await axios.get(API_URL_creneaux)
        console.log('creneauxInRDVSCREEN',response.data)
        
        setcreneaux(response.data)
    } catch (error) {
        console.error('Failed to fetch creneaux:', error)
    }
   }

   useEffect(()=>{
    fetchCreneaux()
   }, [])

   //selecting the user data for the user id
  
   const [loading, setLoading] = useState(true);  
   const user = useSelector(state => state.auth.user)
   console.log('userInRDVv',user)

   useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

   //handling the submited data
   const onPress = async  () => {
        try {
            const response = await axios.post(API_URL_RDV, {
                date: selectedDate,
                centerId: selectedCenter,
                creneauId: selectedCreneau,
                userId:user.id
            });
          
           console.log('RDV created:', response.data);

           if(response){
           Alert.alert('Succes','Votre rendez-vous a été créé avec succès.')
           }

        } catch (error) {
            console.error('Failed to create RDV:', error);
            Alert.alert('Oops!','Erreur lors de la prise de rendez-vous, veuillez réssayer')
        }
   }
    return(
            <SafeAreaView style={styles.container}>

                <Text style={styles.title1}>Prenez votre Rendez-vous!</Text>

                <View >
  
                {/*  date */}     
                <Text style={styles.dateTitle}>Sélectionnez une date</Text>  
                <DateTimePicker
                    value={selectedDate}
                    mode="date"
                    display="default"
                    onChange={handleDateChange}
                    style={styles.date}
                />

                {/* centers */}
            
                <Picker
                    selectedValue={selectedCenter}
                    onValueChange={(itemValue) => setSelectedCenter(itemValue)}
                    style={styles.picker1}
                >
                    
                    <Picker.Item label="Sélectionnez un centre" value="" />
                    {centers.map((center) => (
                        <Picker.Item key={center.id} label={center.nom} value={center.id} />
                    ))}

                </Picker>
                
                

                 {/* creneaux */}
                
                <Picker
                    selectedValue={selectedCreneau}
                    onValueChange={(itemValue) => setSeelectedCreneau(itemValue)}
                    style={styles.picker2}
                >
                    
                    <Picker.Item label="Sélectionnez un creneau" value="" />
                    {creneaux.map((creneau) => (
                        <Picker.Item key={creneau.id} label={`${creneau.startTime} - ${creneau.endTime}`} value={creneau.id} />
                    ))}

                </Picker>
              

                {/* submiting the form */}
                <TouchableOpacity style={styles.submitButton} onPress={onPress} >
                <Text style={styles.submitText}>Réserver </Text>
                </TouchableOpacity>
                

                </View>


            </SafeAreaView>
       
    )
}

export default RdvContent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title1 : {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color:"#CE1A19",
        marginBottom: 35,
    },
    dateTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom:10,
        textAlign : 'center',
        color: "#1D828E"
    },
    picker1: {
       height: 100,
        width: 320,
        marginBottom: 30,
       backgroundColor: "#f0f3f5", 
    },
    picker2: {
        height: 100,
         width: 300,
         marginBottom: 30,
        backgroundColor: "#f0f3f5",
     },   
    date : {
        width: 200,
    },
    submitText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize : 15,
        fontWeight : 'bold'
    },
    submitButton : {
        backgroundColor: '#CE1A19',
        borderRadius: 30,
        justifyContent: 'center',
        shadowOffset:{width:4,height:4},
        shadowOpacity:0.6,
        shadowRadius:2,
        marginTop:115, 
        height: 50,
    },
})