import React from "react";
import { SafeAreaView , Text, StyleSheet } from "react-native";
import FooterTabs from "../components/nav/FooterTabs";

const RdvScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
        <Text>RDV BOOKING</Text>
        <FooterTabs/>
    </SafeAreaView>
    )
}
export default RdvScreen;


const styles=StyleSheet.create ({
    container :{
           flex: 1,
          justifyContent : "space-between",
          backgroundColor: "#f0f3f5",
    },
});