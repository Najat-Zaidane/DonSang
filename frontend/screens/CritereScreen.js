import React from "react";
import { StyleSheet , ScrollView , Text, View,Image} from "react-native";


const CritereScreen = () => {
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
        <Text style={styles.title}>Êtes-vous admissible ?</Text>   
        <Text center style={styles.apropos}>
        Pour donner votre sang au Maroc, vous devez remplir ces conditions principales : 
        </Text>

        <Text style={styles.bold}>1. Age : </Text>
        <Text center style={styles.apropos2}>
            Les donneurs doivent généralement être âgés de <Text style={{fontWeight : 'bold'}}>18 à 65 ans.</Text>
        </Text>

        <Text style={styles.bold}>2. Poids :</Text>
        <Text center style={styles.apropos2}>
        Le poids minimum requis pour un donneur est généralement d'<Text style={{fontWeight : 'bold'}}>environ 50 kg</Text>
        </Text>
        
        <Text style={styles.bold}>3. État de santé :</Text>
        <Text center style={styles.apropos2}>. Bonne santé générale, sans maladie chronique ou contagieuse.</Text>
        <Text center style={styles.apropos2}>. Pas de grossesse/allaitement</Text>
        <Text center style={styles.apropos2}>. Pas d'alcool/drogues</Text>
        <Text center style={styles.apropos2}>. Pas de tatouage/piercing récents
</Text>


        <Text style={styles.bold}>4. Antécédents médicaux :</Text>
        <Text center style={styles.apropos2}>
        Les donneurs doivent être en mesure de fournir des informations précises sur leur <Text style={{fontWeight : 'bold'}}>historique médical </Text> 
         (les maladies transmissibles par le sang : <Text style={{fontWeight : 'bold'}}>VIH, l'hépatite B et C ...</Text> )
      </Text>

      <Text style={styles.bold}>5. Intervalle entre les dons :</Text>
        <Text center style={styles.apropos2}>
        Entre les dons de sang, il existe un intervalle minimum <Text style={{fontWeight : 'bold'}}>d'environ 8 à 12 semaines</Text> pour permettre au donneur de récupérer complètement. 
      </Text>

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
     apropos: {
        fontSize: 15,
        textAlign: 'center',
        color: '#140F1F', 
        marginBottom : 10,
      },
      apropos2: {
        fontSize: 15,  
        textAlign: 'center',
        color: '#140F1F', 
        marginBottom : 12,
      },
      bold:{
        fontWeight: 'bold',
        color : "#7CC1A6",
        fontSize:15,
        marginBottom:5,
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



export default CritereScreen;