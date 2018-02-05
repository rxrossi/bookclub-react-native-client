import React from 'react';
import Register from '../components/register';
import withFocusNextField from '../../Shared/HOCs/focusNextField';

export default (props) => {
  const RegisterWithFocusNextField = withFocusNextField(Register);
  return (
    <RegisterWithFocusNextField {...props}/>
  )
}
