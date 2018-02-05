import React from 'react';


export default function withFocusNextField(WrappedComponent, DefaultInput) {
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
      const Input = ImproveImput(DefaultInput, {
        focusNext: this.focusNextField,
        setRef: this.setInputRef,
      })

      return (
        <WrappedComponent
          Input={Input}
          {...this.props}
        />
      );
    }
  }
}

function ImproveImput(Input, focusRelated) {
  return (props) => <Input focusRelated={focusRelated} {...props} />;
}
