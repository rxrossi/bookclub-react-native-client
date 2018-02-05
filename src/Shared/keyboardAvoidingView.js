import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

export default ({ children }) => (
  <KeyboardAvoidingView style={style} behavior={'padding'} >
    {children}
  </KeyboardAvoidingView>
)

const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#4FC3F7',
};
