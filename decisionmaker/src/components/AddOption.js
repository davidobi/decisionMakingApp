import React, {Component} from "react";

class AddOption extends Component {
  constructor (props) {
    super(props);
    this.addOptionHandler = this.addOptionHandler.bind(this);
    this.state = {
      error: undefined
    };
  }

  addOptionHandler (e) {
    e.preventDefault();

    const option = (e.target.elements.option.value.trim());
    const error = this.props.addOptionHandler(option);
    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = '';
    }
  }
  render () {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p> }
        <form 
          onSubmit={this.addOptionHandler}
        >
          <input type="text" name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

export default AddOption;