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
  render() {
    const { working, errors, setInputRef, focusNextField } = this.props;
    return (
      <KeyboardAvoidingView>
        <Input
          label="Email"
          placeholder="email@mail.com"
          keyboardType="email-address"
          focusNext={() => focusNextField('password')}
        />

        <Input
          label="Password"
          placeholder="Pick a good one :)"
          secureTextEntry
          setRef={() => setInputRef('password')}
          focusNext={() => focusNextField('confirmPassword')}
        />

        <Input
          returnKeyType="done"
          label="Confirm password"
          placeholder="Must be equal to the one before"
          secureTextEntry
          setRef={() => setInputRef('confirmPassword')}
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
export default Register;
