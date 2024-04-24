import React from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';

const SearchBar = ({value,setValue}) => {
return (
    <View style={styles.search}>

    <TextInput
      placeholder="Chercher un centre..."
      placeholderTextColor="#9695b0"
      style={styles.searchInput}
      value={value}
      onChangeText={(text) =>  setValue(text)} 
    />

<View style={styles.searchFloating}>
      <View > 
        <View style={styles.searchButton}>
          <FeatherIcon name="search" size={25} color="#003CA6" />
        </View>
      </View>
    </View>
  </View>

);
};
 //styles 
const styles=StyleSheet.create({
    
    search: { 
        borderRadius: 8,
        paddingHorizontal: 25,  
      },
      searchInput: {
        //height: 60,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        color: '#003CA6', // i could change it to black 
        fontSize: 16,
        borderRadius: 9999,
        //borderWidth: 0.5 ,
       // borderColor : '#003CA6', 
        shadowOpacity : 0.15
      },
      searchFloating: {
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 35,
      },
      searchButton: {
        alignSelf: 'center',
        width: 44,
        height: 44,
        borderRadius: 9999,
        //backgroundColor: '#E2AB2D',
        justifyContent: 'center',
        alignItems: 'center',
      },

});
export default SearchBar;