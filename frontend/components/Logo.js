import React from "react";
import {View, Image,StyleSheet} from 'react-native'

const Logo = () => {
    return(
        <View style={styles.container}>
            <Image
            source = {require("../assets/logo2.png")}
            style={styles.logo}
            />
        </View>
    )

}

export default Logo;

const styles = StyleSheet.create({
    container: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: 35,
      marginBottom :-95,
    },
    logo: {     
      width: 220,
      height: 220,
    },
  });