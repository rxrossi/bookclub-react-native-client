import React from 'react';
import { Text } from 'react-native';

export default ({ text }) => (
  <Text style={style}>
    {text}
  </Text>
)

const style = {
  color: '#D50000',
  backgroundColor: 'white',
  fontWeight: 'bold',
  textAlign:'center',
  width: '80%',
  marginTop: 30,
  paddingTop: 15,
  paddingBottom: 15,
};
