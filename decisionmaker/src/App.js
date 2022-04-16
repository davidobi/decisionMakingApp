import React, { Component } from 'react';
import AddOption from './components/AddOption';
import Options from './components/Options/Options';
import Action from './components/Action';
import Header from './components/Header';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

class IndecisionApp extends Component {
  state = {
      options: []
    }

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
       this.setState(() => ({ options }));
      }
    } catch (e) {
      // Do nothing
    }
    
  }

  componentDidUpdate(prefProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    } 
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  deleteOptionshandler = () => {
    this.setState (() => ({ options: [] }));
  }
 
  deleteOptionHandler = (optionToRemove) => {
    this.setState((prevState)=> ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }))
  };

  selectDecisionHandler = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  addOptionHandler = (option) => {
    if(!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState((prevState)=>({
        options: prevState.options.concat([option])
    }));
  }

  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <div className='container'>
          <Action 
            hasOptions={this.state.options.length > 0}
            selectDecisionHandler = {this.selectDecisionHandler} 
          />
          <div className='widget'>
            <Options 
              options={this.state.options}
              deleteOptionshandler = {this.deleteOptionshandler}
              deleteOptionHandler = {this.deleteOptionHandler}
            />
            <AddOption addOptionHandler={this.addOptionHandler}/>
          </div>
          
        </div>
        
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;