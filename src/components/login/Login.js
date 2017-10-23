import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, KeyboardAvoidingView, Button, StatusBar, TouchableOpacity } from 'react-native';
import LoginForm from './LoginForm';
import LinearGradient from 'react-native-linear-gradient';

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;

    return (

      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../images/logo1.png')}
          />
        </View>

          <View style={styles.formContainer}>
            <LoginForm navigate={navigate}/>
              <View style={styles.loginButton}>
                <LinearGradient
                  start={{x: 0, y: 1.0}} end={{x: 1, y: 1.0}}
                  locations={[0.1,0.9]}
                  colors={['#58FFD9', '#40C5F4']}
                  style={styles.linearGradient}>
                  <Text style={styles.buttonText}>
                    Login
                  </Text>
                </LinearGradient>
              </View>

            <TouchableOpacity>
                  <Text style={styles.buttonForrgotPassword}>Forgot Password</Text>
            </TouchableOpacity>

            {/* <Button
                onPress={() => navigate('RegisterStep1')}
                title="Create new account"
                style={styles.buttonNext}
              /> */}
            <TouchableOpacity onPress={() => navigate('RegisterStep1')}>
                  <Text style={styles.buttonNewAccount}>Create new account</Text>
            </TouchableOpacity>
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
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
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
    marginTop: 20,
  },
  buttonForrgotPassword: {
    textAlign: 'right',
    marginBottom:50,
    marginTop: 10,
    color: '#404040',
    fontWeight: 'bold'
  },
  formContainer: {
    marginBottom: 20,
  },
  buttonNext: {
    color: '#404040'
  },
  buttonNewAccount: {
    color: '#404040',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '700',
  }
});


//
//
// export default class Login extends React.Component {
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <View>
//         <Text>Hello, login screen</Text>
//         <Button
//           onPress={() => navigate('test')}
//           title="register"
//         />
//       </View>
//     );
//   }
// }
