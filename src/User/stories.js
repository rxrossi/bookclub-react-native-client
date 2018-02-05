import React from 'react';
import { Constants } from 'expo';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Login from './components/login.js';
import Register from './components/register.js';

storiesOf('Login', module)
  // .addDecorator(getStory =>
  //   <View style={{ paddingTop: Constants.statusBarHeight }}>{getStory()}</View>)
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
      confirmPassword: 'NOT_MATCHING_PASSWORD',
    }}/>
  ))
