import React from 'react';
import PropTypes from 'prop-types';
import { Constants } from 'expo';
import { Text, TouchableOpacity } from 'react-native';
import Input from '../../Shared/input';
import ButtonWithAcitivityIndicator from '../../Shared/buttonWithAcitivityIndicator';
import SwitchLoginRegisterFormsBtn from './switchLoginRegisterFormsBtn';
import KeyboardAvoidingView from '../../Shared/keyboardAvoidingView.js';
import GenericError from './genericError';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.focusNextField = this.focusNextField.bind(this);
    this.setInputRef = this.setInputRef.bind(this);
    this.inputs = {};
  }

  focusNextField(id) {
    this.inputs[id].focus();
  }

  setInputRef(id) {
    return (input) => this.inputs[id] = input;
  }

  render() {
    const { working, errors } = this.props;
    return (
      <KeyboardAvoidingView>
        <Input
          label="Email"
          placeholder="email@mail.com"
          keyboardType="email-address"
          focusNext={() => this.focusNextField('password')}
        />

        <Input
          label="Password"
          placeholder="Pick a good one :)"
          secureTextEntry
          getRef={() => this.setInputRef('password')}
          focusNext={() => this.focusNextField('confirmPassword')}
        />

        <Input
          returnKeyType="done"
          label="Confirm password"
          placeholder="Must be equal to the one before"
          secureTextEntry
          getRef={() => this.setInputRef('confirmPassword')}
        />

        { errors && errors.general && <GenericError text={errors.general} /> }

        <ButtonWithAcitivityIndicator
          text="Register"
          working={working}
        />

      <SwitchLoginRegisterFormsBtn text="Already have an account? Click here to login" />

      </KeyboardAvoidingView>
    );
  }
}

Register.propTypes = {
  working: PropTypes.bool,
  error: PropTypes.objectOf(PropTypes.string)
}

Register.PropTypes = {
  working: false,
  errors: {},
}

export default Register;
