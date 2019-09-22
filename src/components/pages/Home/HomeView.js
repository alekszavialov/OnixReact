import React from 'react';
import PropTypes from 'prop-types';

import ItemsTree from './components/ItemsTree';
import CustomTable from './components/CustomTable';
import SkillsBlock from './components/SkillsBlock';

import '../../../scss/components/pages/Home/home.scss';

import aboutMeImage from '../../../assets/images/about-me-img.png';

export default function HomeView({
  skills,
  workExperience,
  education,
  objectTable,
  errorLoadingData,
  phone,
  name,
  sortByFilter,
  bubbleSort,
  changeValue,
  addToYearsTable
}) {
  return (
    <>
      <article id="aboutMe">
        <div className="container">
          <div className="about-me-block">
            <div className="about-me-block-info">
              <h2>About Me</h2>
              <p>
                Lorem ipsum dolor sit amet, ectetuer nonummy nibh euismod tincidunt ut laoreet magna
                laoreet
                aliquam
                erat volutpat.
              </p>
              <ul>
                <li>
                  <span>Name</span>
                  <p>Aleksandr Zavyalov</p>
                </li>
                <li>
                  <span>Template</span>
                  <a
                    href="https://psdboom.com/downloads/free-personal-cvresume-web-template"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://psdboom.com/downloads/free-personal-cvresume-web-template
                  </a>
                </li>
                <li>
                  <span>Email</span>
                  <a href="mailto:avelhar74@gmail.com">avelhar74@gmail.com</a>
                </li>
                <li>
                  <span>Github</span>
                  <a
                    href="https://github.com/alekszavialov/OnixReact"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    https://github.com/alekszavialov/OnixReact
                  </a>
                </li>
                <li>
                  <span>Age</span>
                  <p>25</p>
                </li>
                <li>
                  <span>I like</span>
                  <p>Pets, watch TV, sport</p>
                </li>
              </ul>
            </div>
            <div className="about-me-block-image">
              <img src={aboutMeImage} alt="me" />
            </div>
          </div>

        </div>
      </article>
      <CustomTable
        data={objectTable}
        phone={phone}
        name={name}
        errorLoadingData={errorLoadingData}
        sortByFilter={sortByFilter}
        bubbleSort={bubbleSort}
        addToYearsTable={addToYearsTable}
        changeValue={changeValue}
      />
      <ItemsTree data={workExperience} id="workExperience" title="Work Experience" />
      <ItemsTree data={education} id="education" title="Education" />
      <SkillsBlock skills={skills} />
    </>
  );
}

HomeView.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape(
      {
        id: PropTypes.number,
        value: PropTypes.number,
        title: PropTypes.string
      }
    )
  ).isRequired,
  workExperience: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string
    )
  ).isRequired,
  education: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.string
    )
  ).isRequired,
  objectTable: (props, propName, componentName) => {
    const propValue = props[propName];
    const typeOfPropValue = typeof propValue;
    if (propValue === null) {
      return null;
    }
    if (
      Array.isArray(propValue)
      && propValue.filter((item) => !(item.type && item.type.name === 'CustomTableItem')).length === 0
    ) {
      return null;
    }
    return new Error(`Invalid prop '${propName}' of type '${typeOfPropValue}' supplied to '${componentName}',`
      + 'expected \'null\' or \'CustomTableItem\'');
  },
  errorLoadingData: (props, propName, componentName) => {
    const propValue = props[propName];
    const typeOfPropValue = typeof propValue;
    if (propValue === null || typeOfPropValue === 'string') {
      return false;
    }
    return new Error(`Invalid prop '${propName}' of type '${typeOfPropValue}' supplied to '${componentName}',`
      + 'expected \'null\' or \'string\'');
  },
  phone: PropTypes.string,
  name: PropTypes.string,
  sortByFilter: PropTypes.func,
  bubbleSort: PropTypes.func,
  changeValue: PropTypes.func,
  addToYearsTable: PropTypes.func
};

HomeView.defaultProps = {
  objectTable: null,
  errorLoadingData: null,
  phone: '',
  name: '',
  sortByFilter: undefined,
  bubbleSort: undefined,
  changeValue: undefined,
  addToYearsTable: undefined
};
