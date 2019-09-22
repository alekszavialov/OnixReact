import React from 'react';
import PropTypes from 'prop-types';

import '../../../scss/components/layout/header/header.scss';

export default function HeaderView({ toggleMenu, menuListClass }) {
  return (
    <header className="bg-dark" id="head">
      <div className="container">
        <div className="navigation-menu bg-dark">
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
          <button type="button">hire me!</button>
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
