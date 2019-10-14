import React from 'react';
import PropTypes from 'prop-types';

import { ThemeConsumer } from '../../../context/ThemeContext';

import '../../../scss/components/layout/header/header.scss';

export default function HeaderView({ toggleMenu, menuListClass }) {
  return (
    <header id="head">
      <div className="container">
        <div id="test" className="navigation-menu">
          <div
            id="navigationMenuButton"
            role="button"
            tabIndex="0"
            onClick={toggleMenu}
            onKeyPress={toggleMenu}
            className={menuListClass}
          >
            <span />
            <span />
            <span />
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
          <ThemeConsumer>
            {
              ({ changeThemeColor }) => <button onClick={changeThemeColor} type="button">Change theme color</button>
            }
          </ThemeConsumer>

        </div>
      </div>
    </header>
  );
}

HeaderView.propTypes = {
  toggleMenu: PropTypes.func,
  menuListClass: PropTypes.oneOf(['open', 'hidden']),
};

HeaderView.defaultProps = {
  toggleMenu: undefined,
  menuListClass: 'hidden',
};
