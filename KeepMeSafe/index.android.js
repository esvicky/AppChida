/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View, 
  Button
} from 'react-native';
import firebase from 'firebase'
import TextoPrueba from './components/TextoPrueba'

const firebaseConfig = {
  apiKey: "AIzaSyAjcTEES1yLGNyW1keIoWvSPesIpqHofbA",
  authDomain: "datausers-432fe.firebaseapp.com",
  databaseURL: "https://datausers-432fe.firebaseio.com",
  storageBucket: "datausers-432fe.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

function message(){
  firebaseApp.database().ref('/comunidad/vicky').once('value').then((snap)=>alert(JSON.stringify(snap)));
}

export default class KeepMeSafe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to la AppCHIDA!
          <TextoPrueba name="german"/>
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <Button title="hola mundo" onPress={message}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('KeepMeSafe', () => KeepMeSafe);
