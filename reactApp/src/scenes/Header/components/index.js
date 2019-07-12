import React, {Component} from 'react';

export default class HeaderComponent extends Component{

    constructor(props){
        super(props);

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu(){
        this.props.toggleMenu();
    }

    render(){

        const {menuIsOpen} = this.props;
        const menuListClass = menuIsOpen ? "open" : "hidden";

        return (
            <header className="bg-dark" id="head">
                <div className="container">
                    <div className="navigation-menu bg-dark">
                        <div id="navigationMenuButton" onClick={this.toggleMenu} className={menuListClass}>
                            <span/>
                            <span/>
                            <span/>
                        </div>
                        <ul id="navigationMenuList" className={menuListClass}>
                            <li><a href="#head">Head</a></li>
                            <li><a href="#aboutMe">About Me</a></li>
                            <li><a href="#workExperience">Work Experience</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#mySkills">My Skills</a></li>
                            <li><a href="#leaveAmessage">Leave a Message</a></li>
                        </ul>
                    </div>
                    <div className="header-block">
                        <h1>Al Rayhan</h1>
                        <ul>
                            <li>
                                <p>#Ui/UX Expert</p>
                            </li>
                            <li>
                                <p>#Graphic Designer</p>
                            </li>
                        </ul>
                        <button>hire me!</button>
                    </div>
                </div>
            </header>
        )
    }

}