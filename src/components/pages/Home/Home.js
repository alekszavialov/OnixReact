import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HomeView from './HomeView';
import withAPIData from '../../../hoc/withAPIData';

import homeData from '../../../mock/homeData';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skills: homeData.skills,
      workExperience: homeData.workExperience,
      education: homeData.education,
      objectTable: undefined,
      dragged: {
        itemID: undefined,
        overItemID: undefined
      },
      customTableFields: {
        phone: '',
        name: '',
      }
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { dragged: { itemID, overItemID } } = nextState;
    return !(itemID || overItemID);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    const { objectTable } = this.state;
    if (prevState.objectTable
        && objectTable
        && Object.keys(prevState.objectTable).length < Object.keys(objectTable).length) {
      const item = document.getElementById('customTableWrapper');
      if (item.scrollHeight === item.offsetHeight + item.scrollTop) {
        return {
          scroll: item.scrollHeight - item.scrollTop
        };
      }
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { apiData: prevApiData } = prevProps;
    const { apiData } = this.props;
    if (snapshot !== null && snapshot.scroll) {
      const item = document.getElementById('customTableWrapper');
      item.scrollTop = item.scrollHeight - snapshot.scroll;
    }
    if (prevApiData === null && apiData !== null) {
      this.mutateAndSetData(apiData);
    }
  }

  mutateAndSetData = (data) => {
    const mutatedData = data.reduce((acc, item) => {
      return {
        ...acc,
        [item.id]: {
          phone: item.phone,
          name: item.name,
          isActive: false
        }
      };
    }, {});
    this.setState({
      objectTable: mutatedData
    });
  };

  sortByFilter = () => {
    const { objectTable } = this.state;
    const filteredYears = Object.entries(objectTable).sort(([, { name: aName }], [, { name: bName }]) => {
      return this.stringCharCodeValue(aName) - this.stringCharCodeValue(bName);
    });
    this.setFilteredItems(filteredYears);
  };

  stringCharCodeValue = (line) => {
    return line.split().reduce((acc, item) => acc + item.charCodeAt(0), 0);
  };

  bubbleSort = () => {
    const { objectTable } = this.state;
    const filteredYears = Object.entries(objectTable);
    this.setFilteredItems(
      this.bubbleSortFunction(
        filteredYears,
        (array, variable) => this.stringCharCodeValue(array[variable][1].name)
      )
    );
  };

  bubbleSortFunction = (data, condition) => {
    const sortedData = data;
    let temp = true;
    while (temp) {
      temp = false;
      for (let i = 0; i < sortedData.length - 1; i += 1) {
        if (condition(sortedData, i) > condition(sortedData, i + 1)) {
          temp = sortedData[i];
          sortedData[i] = sortedData[i + 1];
          sortedData[i + 1] = temp;
        }
      }
    }
    return sortedData;
  };

  setFilteredItems = (array) => {
    const { objectTable } = this.state;
    const keys = Object.keys(objectTable);
    const filteredYears = array.reduce((acc, [, value], index) => {
      return {
        ...acc,
        [keys[index]]: {
          ...value
        }
      };
    }, {});
    this.setState({
      objectTable: filteredYears
    });
  };

  changeValue = (e, field) => {
    const { customTableFields } = this.state;
    this.setState(
      {
        customTableFields: {
          ...customTableFields,
          [field]: e.target.value
        }
      }
    );
  };

  addToYearsTable = (e) => {
    e.preventDefault();
    const { customTableFields } = this.state;
    const { phone, name } = customTableFields;
    if (phone.trim() === '' || name.trim() === '') {
      return;
    }
    const { objectTable } = this.state;
    const objectTableKeys = Object.keys(objectTable).map(Number);
    const id = Math.max(...objectTableKeys) + 1;
    this.setState({
      objectTable: {
        ...objectTable,
        [id]: {
          phone,
          name,
          isActive: true
        }
      },
      customTableFields: {
        phone: '',
        name: ''
      }
    });
  };

  removeItem = (itemsKey) => {
    const { objectTable } = this.state;
    const { [itemsKey]: deletedKey, ...newArray } = objectTable;
    this.setState({
      objectTable: newArray
    });
  };

  handleActive = (itemKey, e) => {
    if (e.ctrlKey || e.altKey || e.metaKey) {
      const { objectTable } = this.state;
      const { [itemKey]: item } = objectTable;
      if (
        ((e.ctrlKey || e.metaKey) && !item.isActive)
        || (e.altKey && item.isActive)
      ) {
        this.setState({
          objectTable: {
            ...objectTable,
            [itemKey]: {
              ...item,
              isActive: !item.isActive
            }
          }
        });
      }
    }
  };

  onDragStart = (e, itemID) => {
    const { dragged } = this.state;
    this.setState({
      dragged: {
        ...dragged,
        itemID
      }
    });
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target);
  };

  onDragOver = (overItemID) => {
    const { dragged } = this.state;
    if (dragged.itemID === overItemID || dragged.overItemID === overItemID) {
      return;
    }
    this.setState(
      {
        dragged: {
          ...dragged,
          overItemID
        }
      }
    );
  };

  onDragEnd = () => {
    const { dragged } = this.state;
    if (dragged.itemID === dragged.overItemID) {
      return;
    }
    const { objectTable } = this.state;
    const newDraggedItem = { [dragged.itemID]: { ...objectTable[dragged.overItemID] } };
    const newDraggedOverItem = { [dragged.overItemID]: { ...objectTable[dragged.itemID] } };
    this.setState({
      objectTable: {
        ...objectTable,
        ...newDraggedItem,
        ...newDraggedOverItem
      },
      dragged: {
        overItemID: null,
        itemID: null
      }
    });
  };

  render() {
    const {
      skills,
      workExperience,
      education,
      objectTable,
      customTableFields: { phone, name }
    } = this.state;
    const { errorLoadingData } = this.props;
    return (
      <HomeView
        skills={skills}
        education={education}
        workExperience={workExperience}
        objectTable={objectTable}
        errorLoadingData={errorLoadingData}
        phone={phone}
        name={name}

        sortByFilter={this.sortByFilter}
        bubbleSort={this.bubbleSort}
        changeValue={this.changeValue}
        addToYearsTable={this.addToYearsTable}
        removeItem={this.removeItem}
        handleActive={this.handleActive}
        onDragStart={this.onDragStart}
        onDragOver={this.onDragOver}
        onDragEnd={this.onDragEnd}
      />
    );
  }
}

Home.propTypes = {
  apiData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  errorLoadingData: PropTypes.string,
};

Home.defaultProps = {
  apiData: null,
  errorLoadingData: null,
};

export default withAPIData(Home, process.env.REACT_APP_API_URL);
