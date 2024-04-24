import React from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import {Picker} from '@react-native-picker/picker';

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const RdvContent = () => {

    return(
        
            <KeyboardAwareScrollView contentContainerStyle={styles.container}>

                <Text style={styles.title1}>Prenez votre Rendez-vous!</Text>

                <View >

                <Picker
                    //selectedValue={selectedCenter}
                    //onValueChange={(itemValue) => setSelectedCenter(itemValue)}
                    style={styles.picker}
                >
                    {/* <Picker.Item label="Sélectionnez le centre" value="" />
                    {centers.map((center, index) => (
                        <Picker.Item key={index} label={center} value={center} />
                    ))} */}
                </Picker>

                <TextInput
                placeholder="Center de santé"
                />

                <TextInput
                placeholder="Date Rendez-vous"
                />

                <TextInput
                placeholder="Creneau Rendez-vous"
                />

               
                <TouchableOpacity style={styles.submitButton} >
                <Text style={styles.submitText}>Réserver </Text>
                </TouchableOpacity>
                

                </View>


            </KeyboardAwareScrollView>
       
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
        fontSize: 17,
        fontWeight: "bold",
        textAlign: "center",
        color:"#CE1A19",
        marginBottom: 15,
    },
    // picker: {
    //     height: 50,
    //     width: "100%",
    //     marginBottom: 15,
    //    // backgroundColor: "#f0f3f5",
    // },
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
       // marginBottom: 20,
        marginTop:30,
        height: 50,
    },
   
})