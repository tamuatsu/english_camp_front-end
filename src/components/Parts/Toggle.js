import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
    
    render() {
      return (
        <button id="menu-icon" onClick={this.handleClick} className={this.state.isToggleOn ? 'ON icon sp' : 'OFF icon sp'}>
            <span></span>
            <span></span>
            <span></span>
        </button>
      )
    }
}

export default Toggle;