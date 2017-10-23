import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, Button, TouchableOpacity, DatePickerIOS, Picker, SegmentedControlIOS } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import DatePicker from 'react-native-datepicker'

export default class FormStep2 extends Component {
  state = {
    date: '2017-02-13'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>
          PERSONAL DETAILS
        </Text>

        <TextField
          label="First Name"
          textColor= 'rgba(90, 90, 90, 100)'
          tintColor= 'rgba(27, 188, 215, 100)'
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrrect={false}
          style={styles.input}
        />
        <TextField
          label="Last Name"
          textColor= 'rgba(90, 90, 90, 100)'
          tintColor= 'rgba(27, 188, 215, 100)'
          returnKeyType="next"
          autoCapitalize="none"
          autoCorrrect={false}
          style={styles.input}
        />

        <TextField
          label="Weight (kg)"
          textColor= 'rgba(90, 90, 90, 100)'
          tintColor= 'rgba(27, 188, 215, 100)'
          returnKeyType="next"
          autoCapitalize="none"
          keyboardType="numeric"
          autoCorrrect={false}
          style={styles.input2}
        />

        <TextField
          label="Height (cm)"
          textColor= 'rgba(90, 90, 90, 100)'
          tintColor= 'rgba(27, 188, 215, 100)'
          returnKeyType="next"
          autoCapitalize="none"
          keyboardType="numeric"
          autoCorrrect={false}
          style={styles.input2}
        />


        {/* <View style={styles.alternativeLayoutButtonContainer}>
          <TextField
            label="Weight"
            textColor= 'rgba(90, 90, 90, 100)'
            tintColor= 'rgba(27, 188, 215, 100)'
            returnKeyType="next"
            autoCapitalize="none"
            keyboardType="numeric"
            autoCorrrect={false}
            style={styles.input2}
          />
          <TextField
            label="Height"
            textColor= 'rgba(90, 90, 90, 100)'
            tintColor= 'rgba(27, 188, 215, 100)'
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrrect={false}
            multiline={true}
            style={styles.input2}
          />
        </View> */}
        {/* <DatePicker
                style={{width: 200}}
                date={this.state.date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                showIcon={false}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateInput:{
              borderWidth: 0,
              borderBottomWidth: 1,
              borderBottomColor: '#00c5fb',
            },
            dateText:{
              color: '#c7c8ca',
              justifyContent: 'flex-start'
            }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => {this.setState({date: date})}}
              /> */}



        <Text style={styles.p}>
          Gender:
        </Text>
        <SegmentedControlIOS
          values={['Masculin', 'Feminin']}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
          }}
        />
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
