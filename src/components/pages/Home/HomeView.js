import React from 'react';
import PropTypes from 'prop-types';

import AboutMe from './components/AboutMe';
import ItemsTree from './components/ItemsTree';
import CustomTable from './components/CustomTable';
import SkillsBlock from './components/SkillsBlock';

import '../../../scss/components/pages/Home/home.scss';

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
  addToYearsTable,
  removeItem,
  handleActive,
  onDragStart,
  onDragOver,
  onDragEnd,
}) {
  return (
    <>
      <AboutMe />
      <CustomTable
        data={objectTable}
        phone={phone}
        name={name}
        errorLoadingData={errorLoadingData}
        sortByFilter={sortByFilter}
        bubbleSort={bubbleSort}
        addToYearsTable={addToYearsTable}
        changeValue={changeValue}
        removeItem={removeItem}
        handleActive={handleActive}
        onDragStart={onDragStart}
        onDragOver={onDragOver}
        onDragEnd={onDragEnd}
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
  objectTable: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
      ])
    )
  ),
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
  addToYearsTable: PropTypes.func,
  removeItem: PropTypes.func,
  handleActive: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragEnd: PropTypes.func
};

HomeView.defaultProps = {
  objectTable: undefined,
  errorLoadingData: null,
  phone: '',
  name: '',
  sortByFilter: undefined,
  bubbleSort: undefined,
  changeValue: undefined,
  addToYearsTable: undefined,
  removeItem: undefined,
  handleActive: undefined,
  onDragStart: undefined,
  onDragOver: undefined,
  onDragEnd: undefined
};
