import React from 'react';
import PropTypes from 'prop-types';
import ButtonWithAcitivityIndicator from '../../Shared/buttonWithAcitivityIndicator';
import SwitchLoginRegisterFormsBtn from './switchLoginRegisterFormsBtn';
import KeyboardAvoidingView from '../../Shared/keyboardAvoidingView.js';
import GenericError from './genericError';

class Login extends React.Component {
  render() {
    const { Input, working, errors } = this.props;
    return (
      <KeyboardAvoidingView>
        <Input
          label="Username or email"
          name="login"
          nextField="password"
        />

        <Input
          label="Password"
          secureTextEntry
          name="password"
        />

        { errors && errors.general && <GenericError text={errors.general} /> }

        <ButtonWithAcitivityIndicator
          text="Login"
          working={working}
        />

      <SwitchLoginRegisterFormsBtn text="Dont have an account yet? Register by clicking here" />

      </KeyboardAvoidingView>
    );
  }
}
export default Login;
