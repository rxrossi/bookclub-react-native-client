import React from 'react';
import { ActivityIndicator, TouchableOpacity, Text } from 'react-native';

export default ({ working, text }) => working ?
  (
    <ActivityIndicator size="small" color="white" style={styles.buttonWrapper} />
  ) : (
    <TouchableOpacity style={styles.buttonWrapper}>
      <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
  )

const styles = {
  buttonWrapper: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#03A9F4',
    width: '80%',
    marginTop: 30,
    paddingTop: 15,
    paddingBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};
