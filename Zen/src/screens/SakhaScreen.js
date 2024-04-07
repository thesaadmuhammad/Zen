import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
} from 'react-native';
import Header from '../../src/components/Header.js';
import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GoogleGenerativeAI} from '@google/generative-ai';
import Icon from 'react-native-vector-icons/FontAwesome';

const genAI = new GoogleGenerativeAI('AIzaSyCXH0pDnwUA_7MS2134pPqDtojnJMDYfLA');

const SakhaScreen = ({navigation}) => {
  const [text, setText] = useState('');

  const [messages, setMessages] = useState([]);

  const Card = ({message}) => {
    return (
      <View style={styles.card}>
        <Text>{message}</Text>
      </View>
    );
  };

  async function handleSendPress(message) {
    console.log(message);
    setMessages(prevMessages => [...prevMessages, message]);
    const chatbotResponse = await chatbotInteraction(message);
    console.log(chatbotResponse.text());
    setMessages(prevMessages => [...prevMessages, chatbotResponse.text()]);
  }

  async function chatbotInteraction(userInput) {
    let counter = 5;
    try {
      const model = genAI.getGenerativeModel({model: 'gemini-pro'});
      const chat = model.startChat({
        history: [
          {
            role: 'user',
            parts: [
              {
                text: 'Hello, You are my Stress, anxiety and depression therapist.',
              },
            ],
          },
          {
            role: 'model',
            parts: [{text: 'Great to meet you. How are you feeling today?'}],
          },
        ],
        generationConfig: {
          maxOutputTokens: 100,
        },
      });
      const result = await chat.sendMessage(userInput);
      let response = await result.response;
      if (!response.text() && counter > 0) {
        response = chatbotInteraction(userInput);
        counter--;
      }

      return response || 'Okay I am listening you tell me more about it..';
    } catch (error) {
      return error;
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaProvider>
        <Header title="सखा🫂" navigation={'navigation'} />

        <ScrollView style={styles.scrollView}>
          {messages.map((message, index) => (
            <Card key={index} message={message} />
          ))}
        </ScrollView>
        <View style={styles.row}>
          <TextInput
            style={{height: 40, paddingTop: 10}}
            placeholder="Type your message here.."
            onChangeText={newText => setText(newText)}
            value={text}
          />

          <Pressable
            style={styles.send}
            onPress={() => {
              handleSendPress(text);
              setText('');
            }}>
            <Icon name="send" size={20} color="#000" />
          </Pressable>
        </View>
      </SafeAreaProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#F5F5DC',
    flex: 1,
  },
  card: {
    alignSelf: 'flex-end',
    width: '50%',
    backgroundColor: '#CBA46F',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 25,
    padding: 10,
  },
  row: {
    height: 60,
    borderTopWidth: 1,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },

  scrollView: {
    height: '100%',
    marginBottom: 60,
  },
  send: {
    paddingTop: 10,
  },
});

export default SakhaScreen;
