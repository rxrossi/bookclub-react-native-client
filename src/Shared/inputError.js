import React from 'react';
import { Text } from 'react-native';


export default ({text, fieldName}) => (
  <Text style={style}>{getErrorString(fieldName, text)}</Text>
);

const style = {
  color: '#F44336',
  backgroundColor: '#E3F2FD',
  textAlign: 'center',
  padding: 5,
  width: '80%',
};

function getErrorString(fieldName, text) {
  const capitalized = fieldName.charAt(0).toUpperCase() + fieldName.slice(1).toLowerCase();
  const errors = {
    'NOT_UNIQUE': `${capitalized} is being used already`,
    'TOO_SHORT': `${capitalized} is not long enough`,
    'NOT_MATCHING_PASSWORD': `Does not match the password`,
  };

  return errors[text];
}
