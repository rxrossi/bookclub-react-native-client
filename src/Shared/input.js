import React from 'react';

import { View, Text, TextInput } from 'react-native';

class Input extends React.Component {
  render () {
    const {
      goNextField,
      placeholder,
      label,
      getRef,
      focusNext,
      ...rest,
    } = this.props;

    let restOfProps = {
      ...rest,
    }

    if (focusNext) {
      restOfProps = {
        ...restOfProps,
        blurOnSubmit: false,
        returnKeyType: "next",
        onSubmitEditing: focusNext,
      }
    }
    return (
      <View style={{
        alignItems: 'center',
        width: '100%',
      }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        underlineColorAndroid={'transparent'}
        autoCapitalize='none'
        style={styles.textInput}
        ref={getRef && getRef()}
        {...restOfProps}

      />
    </View>
    );
  }
}

export default Input;

const styles = {
  label: {
    color: 'white',
    fontSize: 16,
    margin: 10,
    fontWeight: 'bold',
  },
  textInput: {
    width: '80%',
    padding: 10,
    margin: 0,
    backgroundColor: 'white',
  },
};