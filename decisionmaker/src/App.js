import React, { Component } from 'react';

class IndecisonApp extends Component {
  render() {
    const title = 'Indecision App';
    const subtitle = 'Put your life ib the hands of a computer';
    const options = ['Thing one', 'Thing two', 'Thing three'];
    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    );
  }
}

class Header extends Component {
  render () {
    return (
      <div>
        <h1>{this.props.title} </h1>
        <h2>{this.props.subtitle}</h2>       
      </div>
    )
  }
}


class Action extends Component {
  selectDecisionHandler () {
    alert('Clicked me');
  }
  render () {
    return (
      <div>
        <button onClick={this.selectDecisionHandler}>What should I do?</button>
      </div>
    )
  }
}

class Options extends Component {
  clearOptionshandler () {
    alert('all options cleared')
  }
  render () {
    return (
      <div>
        <button onClick={this.clearOptionshandler}>Remove all</button>
        {this.props.options.length}
        {
          this.props.options.map((option) => <Option key={option} optionText={option} /> )
        }
        
        </div>
    )
  }
}

class Option extends Component {
  render () {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}

class AddOption extends Component {
  addOptionHandler (e) {
    e.preventDefault();

    const option = (e.target.elements.option.value.trim());
    if (option) {
      alert(option);
    }
  }
  render () {
    return (
      <div>
        <form onSubmit={this.addOptionHandler}>
          <input type="text" name='option' />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

export default IndecisonApp;