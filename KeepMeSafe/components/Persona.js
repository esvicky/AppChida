import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


var user;
var password;
var name;
var lastName;
var email;
var phone;

//function validateForm(){}

export default class Persona extends Component{
	render(){
		console.log(this.props.people);
		return(
			<ul>
				this.props.people.map((person) => <li>person.name</li>)
			</ul>
		);
	}
}