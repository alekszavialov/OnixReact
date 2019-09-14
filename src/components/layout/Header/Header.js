import React, {Component} from 'react';
import HeaderView from './HeaderView';

import '../../../scss/components/layout/header/header.scss';

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            menuIsOpen: false
        };
    }

    toggleMenu = () => {
        this.setState({
            menuIsOpen: !this.state.menuIsOpen
        })
    };

    render() {
        const {menuIsOpen} = this.state;
        const menuListClass = menuIsOpen ? "open" : "hidden";
        return (
            <HeaderView
                toggleMenu={this.toggleMenu}
                menuListClass={menuListClass}
            />
        )
    }

}