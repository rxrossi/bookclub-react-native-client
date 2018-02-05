import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Home from './Component/';

storiesOf('Home', module)
  .add('Default', () => (
    <Home/>
  ))
