import React, { Component } from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text, KeyboardAvoidingView } from 'react-native';
import FormStep1 from './FormStep1';
import LinearGradient from 'react-native-linear-gradient';

export default class RegisterStep1 extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: 'white',
                   shadowColor: 'transparent',
                   borderBottomWidth: 0,
                   },
    headerTitleStyle: { color: 'green' },
    headerTintColor: '#5A5A5A',
  };
  render() {
    const { navigate } = this.props.navigation;

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.FormContainer}>
          <FormStep1 />
          <View style={styles.loginButton}>
            <LinearGradient
              start={{x: 0, y: 1.0}} end={{x: 1, y: 1.0}}
              locations={[0.1,0.9]}
              colors={['#58FFD9', '#40C5F4']}
              style={styles.linearGradient}>
              <Text style={styles.buttonText}
                onPress={() => navigate('RegisterStep2')}>
                Next Step
              </Text>
            </LinearGradient>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  linearGradient: {
      borderRadius: 8,
      height: 52,
    },
    buttonText: {
      fontSize: 18,
      margin: 13,
      color: '#000000',
      backgroundColor: 'transparent',
      textAlign: 'center',
      fontWeight: '700',
    },
    loginButton: {
      marginBottom: 20,
    },
    formContainer: {
      marginBottom: 20,
    },
});
