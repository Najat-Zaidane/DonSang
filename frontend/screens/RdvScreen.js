import React from "react";
import { SafeAreaView , Text, StyleSheet } from "react-native";
import FooterTabs from "../components/nav/FooterTabs";
import RdvContent from "../components/RdvContent";

const RdvScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
        <RdvContent/>
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