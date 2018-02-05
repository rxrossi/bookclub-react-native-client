import React from 'react';
import Register from '../components/register';
import Input from '../../Shared/input';
import withFocusNextField from '../../Shared/HOCs/focusNextField';

export default (props) => {
  const RegisterWithFocusNextField = withFocusNextField(Register, Input);
  return (
    <RegisterWithFocusNextField {...props}/>
  )
}
