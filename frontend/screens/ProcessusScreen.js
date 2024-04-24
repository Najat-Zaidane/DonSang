import React from "react";
import { StyleSheet , ScrollView , Text, View,Image} from "react-native";


const ProcessusScreen = () => {
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
        Devenez un héros en donnant votre sang et en aidant à sauver des vies. Découvrez tout ce que vous devez savoir sur le don de sang dans cette section. 
        </Text>

        <Text style={styles.bold}>1. Qu'est-ce que le don de sang?</Text>
        <Text center style={styles.apropos2}>
        Le don de sang est un processus par lequel une personne donne volontairement une certaine quantité de son sang, au profit d'une personne malade qui en a besoin.
        </Text>

        <Text style={styles.bold}>2. Qu'elles son les étapes du don de sang?</Text>
        <Text center style={styles.apropos2}>1- Acceuil et remplissage du questionnaire pré-don.</Text>
        <Text center style={styles.apropos2}>2- Entretien médical ( Etat de santé, vie personnlle..)</Text>
        <Text center style={styles.apropos2}>3- Prélèvement de sang  </Text>
        <Text center style={styles.apropos2}>4- Le repos du donateur et la collation</Text>

        <Text style={styles.bold}>3. Qu'elle est la durée du dons de sang?</Text>
        <Text center style={styles.apropos2}>Le prélèvement de sang lui-même dure environ<Text style={{fontWeight : 'bold'}}> 10 minutes.</Text></Text>
        <Text center style={styles.apropos2}>
        Le processus complet, incluant l'accueil, l'analyse sanguine, le don, la collation et le repos, prend généralement environ 1 heure.
        </Text>

        <Text style={styles.bold}>4. Sécurité et hygiène </Text>
        <Text center style={styles.apropos2}>
        . Sélection rigoureuse des donneurs.
        </Text>
        <Text center style={styles.apropos2}>
        . Matériel stérile et à usage unique.
        </Text>
        <Text center style={styles.apropos2}>
        . Désinfection du site de prélèvement.
        </Text>
        <Text center style={styles.apropos2}>
        . Hygiène des mains du personnel médical.
        </Text>
        <Text center style={styles.apropos2}>
        . Elimination des déchets aprés le don.
        </Text>

        </View>    

        {/* Galerie Section */}
        <View style={styles.gallerieContainer}>
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
      apropos2: {
        fontSize: 15,
        color: '#140F1F', 
        marginBottom : 12,
      },
      gallerieContainer : {
        marginHorizontal: 8,
      },
      bold:{
        fontWeight: 'bold',
        color : "#E2AB2D",
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



export default ProcessusScreen;