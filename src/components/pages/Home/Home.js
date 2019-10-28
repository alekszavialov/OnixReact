import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import HomeView from './HomeView';
import withAPIData from '../../../hoc/withAPIData';

import homeData from '../../../mock/homeData';

function Home({ apiData, errorLoadingData }) {
  const [skills] = useState(homeData.skills);
  const [workExperience] = useState(homeData.workExperience);
  const [education] = useState(homeData.education);
  const [objectTable, setObjectTable] = useState(undefined);
  const [dragged, setDragged] = useState({ itemID: undefined, overItemID: undefined });
  const [customTableFields, setCustomTableFields] = useState({ phone: '', name: '' });
  const [scrollToBottom, setScrollToBottom] = useState(true);

  const mutateAndSetData = (data) => {
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
    setObjectTable(mutatedData);
  };

  const stringCharCodeValue = (line) => {
    return line.split().reduce((acc, item) => acc + item.charCodeAt(0), 0);
  };

  const setFilteredItems = (array) => {
    const keys = Object.keys(objectTable);
    const filteredYears = array.reduce((acc, [, value], index) => {
      return {
        ...acc,
        [keys[index]]: {
          ...value
        }
      };
    }, {});
    setObjectTable(filteredYears);
  };

  const sortByFilter = () => {
    const filteredYears = Object.entries(objectTable).sort(([, { name: aName }], [, { name: bName }]) => {
      return stringCharCodeValue(aName) - stringCharCodeValue(bName);
    });
    setFilteredItems(filteredYears);
  };

  const bubbleSortFunction = (data, condition) => {
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

  const bubbleSort = () => {
    const filteredYears = Object.entries(objectTable);
    setFilteredItems(
      bubbleSortFunction(
        filteredYears,
        (array, variable) => stringCharCodeValue(array[variable][1].name)
      )
    );
  };

  const changeValue = (e, field) => {
    setCustomTableFields({
      ...customTableFields,
      [field]: e.target.value
    });
  };

  const addToYearsTable = (e) => {
    e.preventDefault();
    const { phone, name } = customTableFields;
    if (phone.trim() === '' || name.trim() === '') {
      return;
    }
    const objectTableKeys = Object.keys(objectTable).map(Number);
    const id = Math.max(...objectTableKeys) + 1;
    const table = document.getElementById('customTableWrapper');
    setScrollToBottom(table.scrollHeight === table.offsetHeight + table.scrollTop);
    setObjectTable({
      ...objectTable,
      [id]: {
        phone,
        name,
        isActive: true
      }
    });
    setCustomTableFields({ phone: '', name: '' });
  };

  const removeItem = (itemsKey) => {
    const { [itemsKey]: deletedKey, ...newArray } = objectTable;
    setObjectTable(newArray);
  };

  const handleActive = (itemKey, e) => {
    if (e.ctrlKey || e.altKey || e.metaKey) {
      const { [itemKey]: item } = objectTable;
      if (
        ((e.ctrlKey || e.metaKey) && !item.isActive)
        || (e.altKey && item.isActive)
      ) {
        setObjectTable({
          ...objectTable,
          [itemKey]: {
            ...item,
            isActive: !item.isActive
          }
        });
      }
    }
  };

  const onDragStart = (e, itemID) => {
    setDragged({ ...dragged, itemID });
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target);
  };

  const onDragOver = (newOverItemID) => {
    const { itemID, overItemID } = dragged;
    if (itemID === newOverItemID || overItemID === newOverItemID) {
      return;
    }
    setDragged({ ...dragged, overItemID: newOverItemID });
  };

  const onDragEnd = () => {
    const { itemID, overItemID } = dragged;
    if (itemID === overItemID) {
      return;
    }
    const newDraggedItem = { [itemID]: { ...objectTable[overItemID] } };
    const newDraggedOverItem = { [overItemID]: { ...objectTable[itemID] } };
    setObjectTable({
      ...objectTable,
      ...newDraggedItem,
      ...newDraggedOverItem
    });
    setDragged({ overItemID: null, itemID: null });
  };

  useEffect(() => {
    const table = document.getElementById('customTableWrapper');

    if (table && scrollToBottom) {
      table.scrollTop = table.scrollHeight;
    }
  }, [objectTable]);

  useEffect(() => {
    if (apiData !== null) {
      mutateAndSetData(apiData);
    }
  }, [apiData]);

  const { phone, name } = customTableFields;
  return (
    <HomeView
      skills={skills}
      education={education}
      workExperience={workExperience}
      objectTable={objectTable}
      errorLoadingData={errorLoadingData}
      phone={phone}
      name={name}

      sortByFilter={sortByFilter}
      bubbleSort={bubbleSort}
      changeValue={changeValue}
      addToYearsTable={addToYearsTable}
      removeItem={removeItem}
      handleActive={handleActive}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    />
  );
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
