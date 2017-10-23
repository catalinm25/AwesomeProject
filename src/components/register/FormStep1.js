import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, Button, TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-material-textfield';


export default class FormStep1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          CREATE NEW ACCOUNT
        </Text>
        <TextField
          label="E-mail"
          textColor= 'rgba(90, 90, 90, 100)'
          tintColor= 'rgba(27, 188, 215, 100)'
          returnKeyType="next"
          keyboardType="email-address"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCapitalize="none"
          autoCorrrect={false}
          style={styles.input}
        />
        <TextField
          label="Password"
          textColor= 'rgba(90, 90, 90, 100)'
          tintColor= 'rgba(27, 188, 215, 100)'
          secureTextEntry
          returnKeyType="next"
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />
        {/* <Text style={styles.p}>
          You are a:
        </Text>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={() => { Alert.alert('You tapped the button!')}}
            title="Doctor"
          />
          <Button
            onPress={() => { Alert.alert('You tapped the button!')}}
            title="Pacient!"
            color="#841584"
          />
        </View> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom:10,
  },
  h1: {
    fontWeight:'bold',
    fontSize: 38,
    color: '#5A5A5A',
    lineHeight: 38,
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonConainter: {
    backgroundColor: '#3498db',
    paddingVertical: 16,
    marginTop: 20,
    borderRadius: 8,
    height: 52,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
  },

});
