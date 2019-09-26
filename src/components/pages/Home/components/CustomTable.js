import React from 'react';
import PropTypes from 'prop-types';

import '../../../../scss/components/pages/Home/components/customTable.scss';

import Spinner from '../../../elements/Spinner/Spinner';
import ErrorMessage from '../../../elements/ErrorMessage/ErrorMessage';
import CustomTableItem from './CustomTableItem';

export default function CustomTable(
  {
    data,
    phone,
    name,
    errorLoadingData,
    sortByFilter,
    bubbleSort,
    addToYearsTable,
    changeValue,
    handleActive,
    removeItem,
    onDragStart,
    onDragOver,
    onDragEnd
  }
) {
  const loadingOrErrorData = errorLoadingData
    ? <ErrorMessage message={errorLoadingData} />
    : <Spinner />;
  return (
    <article id="table">
      <div className="container">
        {data
          ? (
            <>
              <h2>Years</h2>
              <h3> Press CTRL(CMD) + Mouse Left to activate element</h3>
              <h3>Press ALT + Mouse Left to deactivate element</h3>
              <form
                className="addToTree"
                onSubmit={addToYearsTable}
              >
                <input
                  type="text"
                  onChange={(e) => changeValue(e, 'phone')}
                  placeholder="Write some phone number"
                  value={phone}
                />
                <input
                  type="text"
                  onChange={(e) => changeValue(e, 'name')}
                  placeholder="Write some name"
                  value={name}
                />
                <button type="submit">Add</button>
              </form>
              <div className="filterTree">
                <button type="button" onClick={sortByFilter}>Filter tree by name</button>
              </div>
              <div className="filterTree">
                <button type="button" onClick={bubbleSort}>Bubble sort by name</button>
              </div>
              <div className="customTableAnimation" id="customTableAnimation"/>
              <div className="customTableWrapper" id="customTableWrapper">
                <table className="customTable">
                  <tbody>
                  {
                    Object.keys(data).map((key) => (
                      <CustomTableItem
                        key={key}
                        itemKey={key}
                        phone={data[key].phone}
                        name={data[key].name}
                        isActive={data[key].isActive}
                        handleActive={handleActive}
                        removeItem={removeItem}
                        onDragStart={onDragStart}
                        onDragOver={onDragOver}
                        onDragEnd={onDragEnd}
                      />
                    ))
                  }
                  </tbody>
                </table>
              </div>
            </>
          )
          : loadingOrErrorData}
      </div>
    </article>
  );
}

CustomTable.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
      ])
    )
  ),
  phone: PropTypes.string,
  name: PropTypes.string,
  errorLoadingData: PropTypes.string,
  sortByFilter: PropTypes.func,
  bubbleSort: PropTypes.func,
  addToYearsTable: PropTypes.func,
  changeValue: PropTypes.func,
  removeItem: PropTypes.func,
  handleActive: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragEnd: PropTypes.func
};

CustomTable.defaultProps = {
  data: undefined,
  phone: '',
  name: '',
  errorLoadingData: null,
  sortByFilter: undefined,
  bubbleSort: undefined,
  addToYearsTable: undefined,
  changeValue: undefined,
  handleActive: undefined,
  removeItem: undefined,
  onDragStart: undefined,
  onDragOver: undefined,
  onDragEnd: undefined
};
