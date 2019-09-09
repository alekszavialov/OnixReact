import React, {Component} from 'react';
import HeaderComponent from './components';

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
            <HeaderComponent
                toggleMenu={this.toggleMenu}
                menuListClass={menuListClass}
            />
        )
    }

}