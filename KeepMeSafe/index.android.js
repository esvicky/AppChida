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
  Button,
  TextInput,
  Image
} from 'react-native';
import firebase from 'firebase'
import TextoPrueba from './components/TextoPrueba'
import Persona from './components/Persona'

const firebaseConfig = {
  apiKey: "AIzaSyAjcTEES1yLGNyW1keIoWvSPesIpqHofbA",
  authDomain: "datausers-432fe.firebaseapp.com",
  databaseURL: "https://datausers-432fe.firebaseio.com",
  storageBucket: "datausers-432fe.appspot.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

function message(){
  firebaseApp.database().ref('/usuario/user1').once('value').then((snap)=>alert(JSON.stringify(snap)));
}

export default class KeepMeSafe extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.state = {p1: ''}
  }

  render() {
    return (
      <Image source={require('./components/city.png')}
            style={styles.imageBackground}>
        <View style={styles.container}>
          <Text style={styles.logo}>
            KMS
          </Text>
          <Text style={styles.welcome}>
            Regístrate
            <Persona name={this.state.p1}/>
          </Text>
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Change Anything"
            onChangeText={(p1) => this.setState({p1})} 
          />
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Nombre(s)"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Apellidos"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Correo Electronico"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Usuario"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Contraseña"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Verifica Contraseña"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={{height: 40, width: 200}}
            placeholder="Telefono"
            onChangeText={(text) => this.setState({text})}
          />
          <Button style={styles.button}
            title="Registrar" 
            onPress={message}/>
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: undefined,
    height: undefined,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 25, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(245,255,250,0.5)',
  },
  logo: {
    fontSize:30,
    margin: 10,
    color: '#8B008B',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 5,
    color: '#333333',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('KeepMeSafe', () => KeepMeSafe);
