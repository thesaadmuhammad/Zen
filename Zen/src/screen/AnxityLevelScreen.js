import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Slider from '@react-native-community/slider';
import { useRoute } from "@react-navigation/native";


const AnxityLevelScreen = ({navigation}) => {
  const [anxietyLevel, setAnxietyLevel] = useState(1);
  const [idealLevel, setIdealLevel] = useState(1);
  const handleSliderChange = value => {
    setAnxietyLevel(value);
  };
  const idealhandleSliderChange = value => {
    setIdealLevel(value);
  };
  const updateValue = () => {
    setValue(value + 1); // Increment the value by 1
  };
  const route = useRoute();
  const id = route.params?.id;
  const sad = anxietyLevel-idealLevel;
  return (
    <View style={styles.container}>
      <Header title="" navigation={navigation} />
      <View style={styles.body}>
        <View style={styles.silderView}>
          <Text style={styles.bodyText}>How {id} you are ?</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 25, marginTop: 5, color: 'black'}}>
              {'1'}
            </Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor="#D2B48C"
              maximumTrackTintColor="black"
              step={1}
              value={anxietyLevel}
              onValueChange={handleSliderChange}
            />
            <Text style={{fontSize: 25, marginTop: 5, color: 'black'}}>
              {'10'}
            </Text>
          </View>
        </View>
        <View style={styles.silderView}>
          <Text style={styles.bodyText}>{'Pick ideal level'}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontSize: 25, marginTop: 5, color: 'black'}}>
              {'1'}
            </Text>
            <Slider
              style={styles.slider}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor="#D2B48C"
              maximumTrackTintColor="black"
              step={1}
              value={idealLevel}
              onValueChange={idealhandleSliderChange}
            />
            <Text style={{fontSize: 25, marginTop: 5, color: 'black'}}>
              {'10'}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{marginTop: '60%', fontSize: 18, color: 'black'}}>
            SAD Coins = {id} level - Ideal level
          </Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ActivityScreen',{coin:sad})}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnxityLevelScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#F5F5DC',
    flex: 1,
  },

  slider: {
    height: 50,
    width: '90%',
  },
  body: {
    margin: 20,
  },
  silderView: {
    marginVertical: 30,
  },
 
  button: {
    width: 200,
    backgroundColor: '#D2B48C',
    height: 33,
    borderRadius: 5,
    margin: 70,
    marginHorizontal: 66,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    padding: 2,
  },
});
