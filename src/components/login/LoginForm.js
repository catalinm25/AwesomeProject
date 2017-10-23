import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, StatusBar, Button, Image, Picker, DatePickerIOS } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { StackNavigator } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';


export default class LoginForm extends Component {
  state = {
   phone: '',
 };
  render() {
    let { phone } = this.state;

    return (
      <View style={styles.container}>


        <TextField
          label="E-mail"
          textColor= 'rgba(90, 90, 90, 100)'
          tintColor= 'rgba(27, 188, 215, 100)'
          returnKeyType="next"
          keyboardType="email-address"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCapitalize="none"
          autoCorrrect={false}
          style={styles.inputField}
        />
        <TextField
          label="Password"
          textColor= 'rgba(90, 90, 90, 100)'
          tintColor= 'rgba(27, 188, 215, 100)'
          secureTextEntry
          returnKeyType="go"
          style={styles.input}
          ref={(input) => this.passwordInput = input}
        />

        {/* <TouchableOpacity style={styles.buttonConainter}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonConainterFP}>
            <Text style={styles.buttonForrgotPassword}>Forgot Password</Text>
        </TouchableOpacity>
        <Button
          onPress={() => this.props.navigate('RegisterStep1')}
          title="Create new account"
          style={styles.buttonNext}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    fontWeight: 'bold',
  },

  inputField: {
    fontWeight: 'bold',
  },

  TextField: {
    fontWeight: 'bold',
  },

});
