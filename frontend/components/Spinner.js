import React from "react";
import { View, StyleSheet,ActivityIndicator  } from "react-native";

const Spinner = () => {
    return(
        <View style={styles.loadingSpinnerContainer}>

            <View style={styles.loadingSpinner}>
            <ActivityIndicator size="large" color="#003CA6" />
            </View>

        </View>
    );
}

export default Spinner;

const styles = StyleSheet.create({
    loadingSpinnerContainer : {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        
    },
    loadingSpinner : {
        width: 80,
        height: 80,
        borderRadius: 10,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        justifyContent: "center",
        alignItems: "center",

    }
})