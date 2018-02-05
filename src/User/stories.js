import React from 'react';
import { Constants } from 'expo';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import Login from './components/login.js';

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
