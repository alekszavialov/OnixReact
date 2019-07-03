import React, {Component} from 'react';
import HeaderComponent from './components';

export default class Header extends Component {

    constructor(props){
        super(props);

        this.state = {
            menuIsOpen: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.setState({
            menuIsOpen: !this.state.menuIsOpen
        })
    }

    render() {

        const {menuIsOpen} = this.state;

        return (
            <HeaderComponent toggleMenu={this.toggleMenu} menuIsOpen={menuIsOpen}/>
        )
    }

}