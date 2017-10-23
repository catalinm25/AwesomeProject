import React, { Component } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';
 

export default class test extends Component {
  static navigationOptions = {
    title: 'Title',
  };
  // componentWillMount() {
  //   console.log(this.props);
  // }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.formContainer}>
        <RegisterStep1/>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
