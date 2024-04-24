import React from "react";
import { StyleSheet , ScrollView , Text, View,Image} from "react-native";


const DonSangScreen = () => {
    return  (
       <ScrollView contentContainerStyle={styles.container}>

        
        <View style={styles.logoContainer}>
          <Image
           source={require('../assets/logo1.png')} 
           style={styles.logo}          
          />
        </View>
        
        {/* Section description   */}
        <View style={styles.aproposContainer}>
        <Text style={styles.title}>Tout savoir sur le don de sang</Text>   
        <Text center style={styles.apropos}>
        La Faculté des Sciences d'El Jadida, créée en <Text style={styles.bold}>1986</Text>, est l'un des établissements de <Text style={styles.bold}>l'Université Chouaib Doukkali.</Text>
        </Text>
        <Text center style={styles.apropos}>
        Elle draine une population étudiante importante qui totalise un chiffre de <Text style={styles.bold}>3500</Text> étudiants, issue de toutes les provinces de la Région.
        </Text>
        <Text center style={styles.apropos}>
        Elle accueille aussi des étudiants étrangers appartenant à des pays essentiellement africains, du sub-Sahara, et du Maghreb.
        </Text>
        </View>    

        {/* Galerie Section */}
        <View style={styles.gallerieContainer}>
        <Text style={styles.title}>Galerie</Text> 
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.imageContainer}>
          <Image source={require('../assets/image1.png')} style={styles.img} />
          <Image source={require('../assets/image2.png')} style={styles.img} />
          <Image source={require('../assets/image3.png')} style={styles.img} />
          </ScrollView>
        </View>  

     
        
       </ScrollView>
    );
}
//style
const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f0f3f5', 
      },
     aproposContainer: {
      alignItems: 'center',
      padding: 25,
      //marginTop : 20
      },
      title: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: "center",
        color : "#CE1A19",
      },
     apropos: {
        fontSize: 15,
        textAlign: 'center',
        color: '#140F1F', 
        marginBottom : 10,
      },
      gallerieContainer : {
       // alignItems: 'center',
        marginHorizontal: 8,
      },
      // texte en gras
      bold:{
        fontWeight: 'bold',
        color : "#E2AB2D"
      },
      imageContainer : {
      marginTop: 10,
      shadowOffset:{width:1,height:1},
      shadowOpacity:0.9,
      shadowRadius:5,
      },
      img : {
        width: 350,
        height: 200,
        borderRadius:5,
      },
      logoContainer : {
        marginTop : 20,
        marginBottom :-16,
      },
    logo : {
     width : 160,
     height : 80,
     resizeMode:"contain",
    // elevation : 5 ,
    },
});



export default DonSangScreen;