import React from 'react';
import PropTypes from 'prop-types';
import { Constants } from 'expo';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.focusNextField = this.focusNextField.bind(this);
    this.inputs = {};
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  render() {
    const { working, errors } = this.props;
    return (
      <KeyboardAvoidingView style={styles.view} behavior={'padding'} >

      <Text style={styles.label}>Username or Password</Text>
      <TextInput
        placeholder="user@email.com or username"
        underlineColorAndroid={'transparent'}
        autoCapitalize='none'
        style={styles.textInput}
        keyboardType='email-address'
        returnKeyType="next"
        blurOnSubmit={ false }
        onSubmitEditing={() => {
          this.focusNextField('password');
        }}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        underlineColorAndroid={'transparent'}
        placeholder="Your password"
        style={styles.textInput}
        secureTextEntry
        type="password"
        returnKeyType="done"
        blurOnSubmit={ true }
        ref={ input => {
          this.inputs['password'] = input;
        }}
      />
      { errors && errors.general && (
        <Text style={styles.generalErrorTxt}>{errors.general}</Text>)
      }

      { working ?
          (<ActivityIndicator size="small" color="white" style={styles.buttonWrapper} />) :
          (<TouchableOpacity style={styles.buttonWrapper}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>)
      }

      <Text
        style={styles.createAccBtn}
      >Don't have an account yet? REALLY? Create one clicking here</Text>
    </KeyboardAvoidingView>
    );
  }
}

Login.propTypes = {
  working: PropTypes.bool,
  error: PropTypes.objectOf(PropTypes.string)
}

Login.PropTypes = {
  working: false,
  errors: {},
}

export default Login;

const styles = {
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4FC3F7',
  },
  label: {
    color: 'white',
    fontSize: 16,
    margin: 10,
    fontWeight: 'bold',
  },
  textInput: {
    width: '80%',
    padding: 10,
    margin: 0,
    backgroundColor: 'white',
  },
  buttonWrapper: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#03A9F4',
    width: '80%',
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  createAccBtn: {
    color: 'white',
    textDecorationLine: "underline",
    textAlign:'center',
    margin: 30,
  },
  generalErrorTxt: {
    color: '#D50000',
    backgroundColor: 'white',
    fontWeight: 'bold',
    textAlign:'center',
    width: '80%',
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,
  }
};
