import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default ({ text }) => (
  <TouchableOpacity>
    <Text
      style={style}
    >{text}</Text>
  </TouchableOpacity>
)

const style = {
  color: 'white',
  textDecorationLine: "underline",
  textAlign:'center',
  margin: 30,
};
