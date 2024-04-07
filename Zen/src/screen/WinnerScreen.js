import { Image, StyleSheet, Text, View,Alert ,TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Header'



const WinnerScreen = ({navigation}) => {
    
    function handleSubmit() {
        Alert.alert('Great Job ! Go enjoy your Icecream ');
        navigation.navigate('ReviewScreen1');   
    }
  return (
    <View style={styles.container}>
         <Header title="" navigation={navigation} />
        <View style={styles.body}>
            <View style={styles.bodyHeading}>
                <Text style={styles.bodyText}>Hurray</Text>
                <Text style={{fontSize:18 , marginTop:2 ,color:"black"}}>We Hava a WINNER</Text>
            </View>
            <View style={styles.bodyImage}>
                    <Image
                style={styles.bodyImage}
                source={require('../images/winner.png')}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
            <Text style={styles.buttonText}>Time to Reward</Text>
            </TouchableOpacity>
           
        </View>
    </View>
  )
}

export default WinnerScreen

const styles = StyleSheet.create({
    bodyHeading:{
        margin:20,
        alignItems:"center"
    },
    bodyText:{
        fontSize:25,
        color:"black",
        fontWeight:"600"
    },
    bodyImage:{
       
    },
    button: {
        width: 200,
        backgroundColor: '#D2B48C',
        height: 33,
        borderRadius: 5,
        margin: 10,
        marginHorizontal: 86,
        marginTop:30
      },
      buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        padding: 2,
      },
})