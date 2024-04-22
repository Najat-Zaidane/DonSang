import React from "react";
import { View, StyleSheet } from "react-native";

const Spinner = () => {
    return(
        <View style={styles.loadingSpinnerContainer}>

            <View style={styles.loadingSpinner}>
            </View>

        </View>
    );
}

export default Spinner;

const styles = StyleSheet.create({
    loadingSpinnerContainer : {
        
    },
    loadingSpinner : {

    }
})