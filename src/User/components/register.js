import React from 'react';
import PropTypes from 'prop-types';
import ButtonWithAcitivityIndicator from '../../Shared/buttonWithAcitivityIndicator';
import SwitchLoginRegisterFormsBtn from './switchLoginRegisterFormsBtn';
import KeyboardAvoidingView from '../../Shared/keyboardAvoidingView.js';
import GenericError from './genericError';

class Register extends React.Component {
  render() {
    const { Input, working, errors } = this.props;
    return (
      <KeyboardAvoidingView>
        <Input
          label="Email"
          placeholder="email@mail.com"
          keyboardType="email-address"
          name="email"
          nextField="password"
        />

        <Input
          label="Password"
          placeholder="Pick a good one :)"
          secureTextEntry
          name="password"
          nextField="confirmPassword"
        />

        <Input
          returnKeyType="done"
          label="Confirm password"
          placeholder="Must be equal to the one before"
          secureTextEntry
          name="confirmPassword"
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
