import React from 'react';

export default function withFocusNextField(WrappedComponent) {
  return class WithFocusNextField extends React.Component {
    constructor(props) {
      super(props);
      this.focusNextField = this.focusNextField.bind(this);
      this.setInputRef = this.setInputRef.bind(this);
      this.inputs = {};
    }

    focusNextField(id) {
      this.inputs[id].focus();
    }

    setInputRef(id) {
      return (input) => this.inputs[id] = input;
    }

    render() {
      return (
        <WrappedComponent
          setInputRef={this.setInputRef}
          focusNextField={this.focusNextField}
          {...this.props}
        />
      );
    }
  }
}
