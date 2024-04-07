import { StyleSheet, Text, View,FlatList , TouchableOpacity , Pressable} from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import Acitivity from '../components/Acitivity';
import Reward from '../components/Reward';

const REWARD_LIST= [
    {
      id: '1',
      name: 'Go eat Icecream',
    },
  ];
  const ACTIVITY_LIST= [
    {
      id: '1',
      name: 'Going for a walk outside',
      credit:"2" ,
      
      

    },
    {
      id: '2',
      name: 'Take a deep breath',
      credit:"1" ,
    
    },

  ];


const ConfirmScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Header title="" navigation={navigation} />
   <View style={styles.body}> 
   <View style={styles.bodyUpper}>
    <Text  style={styles.bodyText} >{"Challenges : "}</Text>
   </View>
   <View style={styles.bodylower}>
   <FlatList
     data={ACTIVITY_LIST}
     keyExtractor={item => item.id}
     renderItem={({item}) => (
        <Pressable
        onPress={{}}
        style={[styles.activityCard,]}
      >
        <Reward reward={item} />
      </Pressable>
     )}
     /> 
   </View>

    <View style={styles.bodyUpper}>
    <Text  style={styles.bodyText} >{"Rewards : "}</Text>
   </View>
   <View style={styles.bodylower}>
   <FlatList
     data={REWARD_LIST}
     keyExtractor={item => item.id}
     renderItem={({item}) => (
        <Pressable
        onPress={{}}
        style={[styles.activityCard,]}
      >
        <Reward reward={item} />
      </Pressable>
     )}
     /> 
   </View>
   <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProgessTracker')}>
      <Text style={styles.buttonText}>Make Challenge</Text>
    </TouchableOpacity>  
   </View>
   
    </View>
  )
}

export default ConfirmScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#F5F5DC',
        flex: 1,
      },
      bodyText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        marginVertical:5
      },
      body:{
        margin:10,
        padding:8
      },
      bodyUpper:{
        paddingVertical:20,
      },
      activityCard: {
        padding: 2,
        marginVertical: 5,
        marginLeft:3,
        borderWidth: 1,
        borderColor: 'black',
        height: 50,
        borderRadius: 10,
        backgroundColor:"#FFFFFF"
        
      },
      button: {
        width: 200,
        backgroundColor: '#D2B48C',
        height: 33,
        borderRadius: 5,
        margin: "0%",
        marginHorizontal: 66,
      },
      buttonText: {
        fontSize: 18,
        textAlign: 'center',
        color: 'black',
        padding: 2,
      },
      bodylower:{
        marginVertical:20
      }
})