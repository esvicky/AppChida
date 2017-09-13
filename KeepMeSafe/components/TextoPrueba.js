import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class TextoPrueba extends Component{
	render(){
		return(
			<Text>{this.props.name}</Text>
			);
	}
}