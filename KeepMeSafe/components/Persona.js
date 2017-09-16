import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

/*var user;
var password;
var name;
var lastName;
var momLastName;
var email;
var phone;

function validateForm(){

}*/

export default class Persona extends Component{
	render(){
		return(
			//<Text>{this.props.user}</Text>
			//<Text>{this.props.password}</Text>
			<Text>{this.props.name}</Text>
			/*<Text>{this.props.lastName}</Text>
			<Text>{this.props.momLastName}</Text>
			<Text>{this.props.email}</Text>
			<Text>{this.props.phone}</Text>*/
		);
	}
}