import React from "react";
import {View, Image,StyleSheet} from 'react-native'

const LogoCopy = () => {
    return(
        <View style={styles.container}>
            <Image
            source = {require("../assets/logo2.png")}
            style={styles.logo}
            />
        </View>
    )

}

export default LogoCopy;

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 120,
     marginBottom :-220,
    },
    logo: {     
      width: 220,
      height: 220,
    },
  });