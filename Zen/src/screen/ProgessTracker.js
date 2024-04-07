import { StyleSheet, Text, View, FlatList, Pressable, TouchableOpacity, Alert } from 'react-native';
import React ,{useState} from 'react'
import Header from '../../components/Header';
import Acitivity from '../components/Acitivity';
import Reward from '../components/Reward';


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
    {
      id: '3',
      name: 'Listen your fav music 4',
      credit:"2" ,

    },
    {
      id: '4',
      name: 'Progressive muscle relaxation',
      credit:"4" ,
    },
    

    
  ];

const ProgessTracker = ({navigation}) => {
  const [selectedActivities, setSelectedActivities] = useState([]);
    
  const handlePress = (id) => {
    if (!selectedActivities.includes(id)) {
      setSelectedActivities([...selectedActivities, id]);
    }
  };
  const handleDone = () => {
    if (selectedActivities.length === ACTIVITY_LIST.length) {
      navigation.navigate('WinnerScreen');
    } else {
      Alert.alert('Incomplete Activities', 'Please complete all activities before proceeding.');
    }
  };
  return (
    <View style={styles.container}>
        <Header title="" navigation={navigation} />
       <View style={styles.body}> 
       <View style={styles.bodyUpper}>
        <Text  style={styles.bodyText} >{"Progress Tracker : "}</Text>
        
       </View>
       <View style={styles.bodylower}>
       <FlatList
            data={ACTIVITY_LIST}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handlePress(item.id)}
                style={[styles.activityCard, { backgroundColor: selectedActivities.includes(item.id) ? 'green' : 'white' }]}
              >
                <Reward reward={item} />
              </Pressable>
            )}
          /> 
       </View>
       <TouchableOpacity style={styles.button} onPress={handleDone} >
          <Text style={styles.buttonText}>Done</Text>
        </TouchableOpacity>
        
       
       </View>
       
    </View>
  )
}

export default ProgessTracker

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
        margin: "40%",
        marginHorizontal: 66,
      },
      buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'black',
        padding: 2,
      },
      bodylower:{

      }
})