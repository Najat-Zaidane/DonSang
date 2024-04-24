import React from "react";
import {SafeAreaView, Text,StyleSheet,View, Image} from 'react-native'
import FooterTabs from "../components/nav/FooterTabs";
import HomeContent from "../components/HomeContent";


const HomeScreen = () =>{
    return (
        <SafeAreaView style={styles.container}>
           <HomeContent/>
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