import React, {useState} from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Text from '@kaloraat/react-native-text'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from "@react-navigation/native";


export  const Tab = ({text,name,route}) => {
    const navigation = useNavigation();
    return (
    <TouchableOpacity style={styles.tab}  onPress={() => navigation.navigate(route)}  >
              <>
                <FontAwesome5 name={name} size={23} style={styles.icon}  />
                <Text  color="#003CA6">{text}</Text>
              </>
    </TouchableOpacity>
    );
  };

 


const FooterTabs = () => {
    return(
        <View style={styles.container}>

            <Tab text="Acceuil"  name="home" route='Home' />

            <Tab text="Centres" name="clinic-medical" route='Centers'/>

            <Tab text="Rendez-vous" name="calendar-alt" route='Rdv'/>

            <Tab text="Profile" name="user" route='Profile'/>
          {/* indice : le props route doint contenir le le nom de stackScreen pas le component */}

        </View>
    )
   
}
export default FooterTabs;

//style
const styles=StyleSheet.create ({
    container :{ 
          flexDirection : "row",
          margin : 12,
          marginHorizontal : 30,
          justifyContent : "space-between",
        //  backgroundColor : "#E8B73A",
          backgroundColor : "#FFFFFF",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 30,
          shadowColor : "black",
          shadowOffset : {
            width : 0,
            height : 10,
          },
          shadowOpacity:0.40,
          shadowRadius : 5.5,
          elevation : 5,
    },
    icon : {
       marginBottom : 3,
       alignSelf : "center",
       color : "#003CA6",
    },
    tab: {
      alignItems: "center",
    },
});

