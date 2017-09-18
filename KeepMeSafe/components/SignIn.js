/*import React, { Component } from 'react';
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
import Persona from './components/Persona'


export default class SignIn extends Component{
   render() {
    var limit = 16;
    var remainder = limit - this.state.text.length;
    return (
      <Image 
        source={require('./city.png')} 
        style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            KEEP ME SAFE
          </Text>
          <View style={{padding: 15}}>
            <Text style={styles.instructions}>
            Usuario: 
            </Text>
            <TextInput
              style={{height: 40}}
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            /> 
            <Text style={styles.instructions}>
            Contraseña: 
            </Text>
            <TextInput 
              secureTextEntry={true} 
              style={{height: 40}} 
              multiline={false}
              maxLength={limit}
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}ue={this.state.text}
            />
          </View>
          
          <Button
            onPress={() => {
              //alert(JSON.stringify(this.state));
              firebaseApp.database().ref.on('comunidad/vicky',(snap) => {alert(snap)});

            }} 
            style={styles.button}
            title="Inicia Sesión"
            color="#E598F8"
            accessibilityLabel="This sounds great!"
          />
          
        </View>
      </Image>
    );
  }
}*/