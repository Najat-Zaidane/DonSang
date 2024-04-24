import React from "react";
import { StyleSheet , ScrollView , Text, View,Image} from "react-native";


const ImpactDonScreen = () => {
    return  (
       <ScrollView contentContainerStyle={styles.container}>

        
        <View style={styles.logoContainer}>
          <Image
           source={require('../assets/logo2.png')} 
           style={styles.logo}          
          />
        </View>
        
        {/* Section description   */}
        <View style={styles.aproposContainer}>
        <Text style={styles.title}>L'impact du don de sang : Sauver des vies et bien plus encore ! 🩸</Text>   
        
        <Text style={styles.bold}>1. Sauver des vies :</Text>
        <Text center style={styles.apropos2}>. Disponibilité dans les cas d'urgences médicales.      </Text>
        <Text center style={styles.apropos2}>. Aide dans les traitemens des maladies chroniques.     </Text>
        <Text center style={styles.apropos2}>. Aide dans les traitements du cancer.       </Text>
        <Text center style={styles.apropos2}>.  Disponibilité continue de sang pour les hôpitaux.      </Text>

        <Text style={styles.bold}>2. Avantages pour la santé ‍⚕️:</Text>
        <Text center style={styles.apropos2}>. Régénérer les cellules sanguines.      </Text>
        <Text center style={styles.apropos2}>. Réduire le risque du cancer de foie.      </Text>
        <Text center style={styles.apropos2}>. Renforcer le système immunitaire.       </Text>
        <Text center style={styles.apropos2}>.  Bilan de santé gratuit.       </Text>

       
     
        <Text style={styles.bold}>3. Impact sur la vie</Text>
        <Text center style={styles.apropos2}>. Sentiment de satisfaction et de solidarité.</Text>
        <Text center style={styles.apropos2}>. Conscience de la santé et du bien-être.</Text>
        <Text center style={styles.apropos2}>. Inspiration pour les autres. </Text>

        
        <Text style={styles.titleFinal}>N'oubliez pas que ces avantages potentiels pour la santé
         s'appliquent aux dons de sang réguliers, généralement un à deux fois par an.</Text>  

        </View>    

        {/* Galerie Section */}
        <View style={styles.gallerieContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.imageContainer}>
          <Image source={require('../assets/a3.png')} style={styles.img} />
          <Image source={require('../assets/a4.png')} style={styles.img} />
          <Image source={require('../assets/a2.png')} style={styles.img} />
          </ScrollView>
        </View>  

     
        
       </ScrollView>
    );
}
//style
const styles=StyleSheet.create({
    container: {
      flexGrow: 1,
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
        marginBottom: 18,
        textAlign: "center",
        color : "#CE1A19",
      },
      titleFinal : {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 18,
        textAlign: "center",
        //color : "#CE1A19",
      },
     apropos: {
        fontSize: 15,
        textAlign: 'center',
        color: '#140F1F', 
        marginBottom : 10,
      },
      apropos2: {
        fontSize: 15,
        color: '#140F1F', 
        marginBottom : 12,
      },
      gallerieContainer : {
        marginHorizontal: 8,
        marginBottom:80
      },
      bold:{
        fontWeight: 'bold',
        color : "#140F1F",
        fontSize:15,
        marginBottom:5
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



export default ImpactDonScreen;