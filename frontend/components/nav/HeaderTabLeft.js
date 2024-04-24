import React from "react";
import {View ,TouchableOpacity, StyleSheet, SafeAreaView} from "react-native";
import  Text  from '@kaloraat/react-native-text';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from "@react-navigation/native";


const HeaderTabLeft = () => {
   const navigation = useNavigation();
    return(
    <SafeAreaView>
       <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <FontAwesome5 name="reply" size={22} style={styles.icon} />
       </TouchableOpacity>
    </SafeAreaView>
    );

};

const styles=StyleSheet.create({
    icon : {
        marginBottom : 3,
        alignSelf : "center",
        color : "#E2AB2D",
        marginLeft : 10
        
     }
});
export default HeaderTabLeft;

