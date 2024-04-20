import React from "react";
import {SafeAreaView, Text,StyleSheet} from 'react-native'
import FooterTabs from "../components/nav/FooterTabs";


const HomeScreen = () =>{
    return (
        <SafeAreaView style={styles.container}>
            <Text>home content</Text>
            <FooterTabs/>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles=StyleSheet.create ({
    container :{
           flex: 1,
          justifyContent : "space-between",
          backgroundColor: "#f0f3f5",
    },
});