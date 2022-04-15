import React, { Component } from 'react';

class IndecisionApp extends Component {
  constructor (props) {
    super (props);
    this.deleteOptionshandler = this.deleteOptionshandler.bind(this);
    this.selectDecisionHandler = this.selectDecisionHandler.bind(this);
    this.addOptionHandler = this.addOptionHandler.bind(this);
    this.state = {
      options: props.options
    }
  }

  deleteOptionshandler () {
    this.setState ((prevState) => {
      return {
        options: []
      };
    });
  }

  selectDecisionHandler () {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  addOptionHandler (option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState((prevState)=>{
      return {
        options: prevState.options.concat([option])
      };
    });
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          selectDecisionHandler = {this.selectDecisionHandler} 
        />
        <Options 
          options={this.state.options}
          deleteOptionshandler = {this.deleteOptionshandler}
        />
        <AddOption addOptionHandler={this.addOptionHandler}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
      <div>
        <h1>{props.title} </h1>
        {props.subtitle && <h2>{props.subtitle}</h2> }      
      </div>
    )
};

Header.defaultProps = {
  title: 'Indecision App'
};


const Action = (props) => {
  return (
      <div>
        <button 
          onClick={props.selectDecisionHandler}
          disabled={!props.hasOptions}    
      >
          What should I do?</button>
      </div>
    )
}

const Options = (props) => {
  return (
      <div>
        <button onClick={props.deleteOptionshandler}>Remove all</button>
        {props.options.length}
        {
          props.options.map((option) => <Option key={option} optionText={option} /> )
        }
        
        </div>
    )
}

const Option = (props) => {
  return (
      <div>
        {props.optionText}
      </div>
    )
}

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
    this.setState(() => {
      return { error };
    });
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
  
export default IndecisionApp;