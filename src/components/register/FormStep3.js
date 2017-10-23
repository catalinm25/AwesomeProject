import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, Button, TouchableOpacity, ActionSheetIOS, TouchableHighlight, TextInput } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import DatePicker from 'react-native-datepicker'

 // <Button onPress={() => {
 //
 //
 //              ActionSheetIOS.showActionSheetWithOptions({
 //                  options: [
 //                      'button1',
 //                      'button2',
 //                      'Cancel',
 //                  ],
 //                  cancelButtonIndex: 2,
 //                  destructiveButtonIndex: 0
 //              },
 //
 //  }} />

// ActionSheetIOS.showActionSheetWithOptions({
//     options: [
//         'button1',
//         'button2',
//         'Cancel',
//     ],
//     cancelButtonIndex: 2,
//     destructiveButtonIndex: 0
// }, (buttonIndex) => {
//     if (buttonIndex === 0) {
//         // do something...
//     } else if (buttonIndex === 1) {
//         // do something...
//     }
// })

export default class FormStep3 extends Component {
  state = {
    date: '2017-02-13'
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          Treatment
        </Text>

        <Button  onPress={() => {
             ActionSheetIOS.showActionSheetWithOptions({
               options: ['one', 'two', 'three', 'four', 'cancel', 'exit'],
               cancelButtonIndex: 4,
               destructiveButtonIndex: 5,
               title: 'Show case Action sheet',
               message: 'This is a simple action sheet show case'
             },
             (args) => console.log(args)) }}
             title="Your diabet type"
        > TDSAD
      </Button>

        {/* <TextField
          label="First Name"
          textColor= 'rgba(90, 90, 90, 100)'
          tintColor= 'rgba(27, 188, 215, 100)'
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrrect={false}
          style={styles.input}
        /> */}
        {/* <showActionSheetWithOptions
          options=['option1','option2','option3']
          title="test"
          message="message"
        /> */}

        {/* <Button  onPress={() => {     ActionSheetIOS.showActionSheetWithOptions({
           options: ['one', 'two', 'three', 'four', 'cancel', 'exit'],
             cancelButtonIndex: 4,
                 destructiveButtonIndex: 5,
               title: 'Show case Action sheet'
                    message: 'This is a simple action sheet show case'
                      }, (args) => console.log(args)) }} /> */}


      <View style={{ flex: 1, flexDirection: 'row',  }}>
        <Image
          source={require('../../images/glucose.png')}
        />
        <Text>
          Glucoza
        </Text>
        <View style={{width: 100, height: 50, }}>
          {/* <TextField
            label="First Name"
            textColor= 'rgba(90, 90, 90, 100)'
            tintColor= 'rgba(27, 188, 215, 100)'
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrrect={false}
            style={styles.input}
          /> */}

          <TextInput
    style={{height: 40, borderColor: 'gray', borderBottomWidth: 5}}
    onChangeText={(text) => this.setState({text})}
    value={this.state.text}
    placeholder="000"
  />
        </View>
        <Text>
          mg/dl
        </Text>

      </View>

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
  input: {
    width: 200,
  }

});
