import React from 'react';
import { Constants } from 'expo';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Login from './containers/login.js';
import Register from './containers/register.js';
import withFocusNextField from '../Shared/HOCs/focusNextField';

storiesOf('Login', module)
  .add('Ready', () => (
    <Login />
  ))
  .add('Working', () => (
    <Login working/>
  ))
  .add('With errors', () => (
    <Login errors={{ general: 'Invalid credentials' }}/>
  ))

storiesOf('Register', module)
  .add('Ready', () => (
    <Register />
  ))
  .add('Working', () => (
    <Register working/>
  ))
  .add('With generic error', () => (
    <Register errors={{ general: 'Server error (500)' }}/>
  ))
  .add('With input errors', () => (
    <Register errors={{
      email: 'NOT_UNIQUE',
      password: 'TOO_SHORT',
      confirmPassword: 'NOT_MATCHING_PASSWORD',
    }}/>
  ))
