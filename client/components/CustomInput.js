import React from 'react';

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.textInput2 = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  componentDidMount() {
    console.log(this.textInput.current);
    console.log(this.textInput2.current);
  }

  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();

  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor

    return (
      <div>
        <input
          type="text"
          name="first"
          ref={this.textInput} />

        <input
          type="text"
          name="second"
          ref={this.textInput2} />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
}

export default CustomTextInput;
