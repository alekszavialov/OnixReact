import React, { Component } from 'react';
import HeaderView from './HeaderView';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsOpen: false
    };
  }

  toggleMenu = () => {
    const { menuIsOpen } = this.state;
    this.setState({
      menuIsOpen: !menuIsOpen
    });
  };

  render() {
    const { menuIsOpen } = this.state;
    const menuListClass = menuIsOpen ? 'open' : 'hidden';
    return (
      <HeaderView
        toggleMenu={this.toggleMenu}
        menuListClass={menuListClass}
      />
    );
  }
}
