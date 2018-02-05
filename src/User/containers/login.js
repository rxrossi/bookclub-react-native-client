import React from 'react';
import Login from '../components/login';
import Input from '../../Shared/input';
import withFocusNextField from '../../Shared/HOCs/focusNextField';

export default (props) => {
  const LoginWithFocusNextField = withFocusNextField(Login, Input);
  return <LoginWithFocusNextField {...props}/>;
}
