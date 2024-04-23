import React from "react";
import { SafeAreaView , Text, StyleSheet } from "react-native";
import FooterTabs from "../components/nav/FooterTabs";

const CentersScreen = () => {
    return(
        <SafeAreaView style={styles.container}>
        <Text>CENTERS LIST</Text>
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