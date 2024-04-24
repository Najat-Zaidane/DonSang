import React from "react";
import { SafeAreaView , Text, StyleSheet } from "react-native";
import FooterTabs from "../components/nav/FooterTabs";
import CentersContent from "../components/CentersContent";

const CentersScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
        <CentersContent/>
        <FooterTabs/>
    </SafeAreaView>
    )
}
export default CentersScreen;


const styles=StyleSheet.create ({
    container :{
           flex: 1,
          justifyContent : "space-between",
          backgroundColor: "#f0f3f5",
    },
});