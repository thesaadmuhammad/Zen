import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../../src/components/Header.js';

const SakhaScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="" navigation={'navigation'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#F5F5DC',
    flex: 1,
  },
  Header: {
    height: '12%',
    flexDirection: 'row',
    padding: 18,
    justifyContent: 'space-between',
  },
  HeaderText: {
    flexDirection: 'row',
  },
  selectText: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 3,
    paddingBottom: 2,
    borderBottomWidth: 3,
    borderColor: '#CBA46F',
  },
  HeadText: {
    color: 'black',
    marginHorizontal: 10,
    marginTop: 9,
    fontSize: 20,
    fontWeight: '500',
  },
  Card: {
    alignSelf: 'center',
    height: '35%',
    width: '85%',
    backgroundColor: '#CBA46F',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 25,
    padding: 10,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  text2: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 10,
  },
  text3: {
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
    paddingTop: 4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text4: {
    fontSize: 15,
    color: 'black',
    marginVertical: 10,
    alignSelf: 'center',
  },
  whiteButton: {
    width: '40%',
    height: '20%',
    backgroundColor: '#F5F5DC',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: '10%',
  },
  beigeButton: {
    width: '40%',
    height: '7%',
    backgroundColor: '#D2B48C',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    marginVertical: '10%',
  },
  text5: {
    fontSize: 25,
    color: 'black',
    marginTop: 50,
    fontWeight: '500',
    alignSelf: 'center',
  },
  text6: {
    fontSize: 20,
    color: 'black',
    marginVertical: 10,
    alignSelf: 'center',
    fontWeight: '500',
  },
});

export default SakhaScreen;
