import React from "react";
import {View, Image} from 'react-native'

const Logo = () => {
    return(
        <View>
            <Image
            source = {require("../assets/logo1.png")}
            
            />
        </View>
    )

}

export default Logo;


// const styles = StyleSheet.create({
//     container: {
//       justifyContent: "center",
//       alignItems: "center",
//     },
//     logo: {
//       width: 180,
//       height: 180,
//       marginLeft: 30,
      
//     },
//   });