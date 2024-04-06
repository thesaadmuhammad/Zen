import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import Slider from '@react-native-community/slider';

Header;
const AnxityLevelScreen = ({navigation}) => {
  const [anxietyLevel, setAnxietyLevel] = useState(0);
  const [idealLevel, setIdealLevel] = useState(0);
  const handleSliderChange = value => {
    setAnxietyLevel(value);
  };
  const idealhandleSliderChange = value => {
    setIdealLevel(value);
  };
  return (
    <View style={styles.container}>
      <Header title="" navigation={navigation} />
      <View style={styles.body}>
        <View style={styles.silderView}>
          <Text style={styles.bodyText}>{'How Anxious you are ?'}</Text>
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
            {'SAD Coins = Anxious level - Ideal level'}
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
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
  bodyText: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
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
