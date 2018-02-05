import React from 'react';
import { storiesOf } from '@storybook/react-native';
import Home from './Component/';

storiesOf('Chat', module)
  .add('Default', () => (
    <Home/>
  ))
