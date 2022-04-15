import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div>
        <h1>Indecision </h1>
        <h2>Put your life ib the hands of a computer</h2>
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}


class Action extends Component {
  render () {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    )
  }
}

class Options extends Component {
  render () {
    return (
      <div>
        Options component here
      </div>
    )
  }
}

class AddOption extends Component {
  render () {
    return (
      <div>
        Add Option component here
      </div>
    )
  }
}

export default Header;