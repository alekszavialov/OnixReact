import React from 'react';
import PropTypes from 'prop-types';

import CustomTreeItem from "./components/CustomTreeItem/CustomTreeItem";
import '../../../../../scss/components/pages/Home/components/CustomTable/customTable.scss';

customTable.propTypes = {
    data: PropTypes.objectOf(PropTypes.object).isRequired,
    phone: PropTypes.string,
    name: PropTypes.string,
    sortByFilter: PropTypes.func,
    bubbleSort: PropTypes.func,
    removeItem: PropTypes.func,
    handleActive: PropTypes.func,
    onDragStart: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragEnd: PropTypes.func,
    addToYearsTable: PropTypes.func,
    changeValue: PropTypes.func,
};

export default function customTable(
    {
        data,
        phone,
        name,
        sortByFilter,
        bubbleSort,
        removeItem,
        handleActive,
        onDragStart,
        onDragOver,
        onDragEnd,
        addToYearsTable,
        changeValue
    }) {

    const fillData = () => {
        let dataArray = [];
        for (let key in data) {
            if (data.hasOwnProperty(key)) {
                dataArray = [
                    ...dataArray,
                    <CustomTreeItem
                        key={key}
                        itemKey={key}
                        phone={data[key].phone}
                        name={data[key].name}
                        isActive={data[key].isActive}
                        removeItem={removeItem}
                        handleActive={handleActive}
                        onDragStart={onDragStart}
                        onDragOver={onDragOver}
                        onDragEnd={onDragEnd}
                    />
                ]
            }
        }
        return dataArray;
    };

    return (
        <div className="container">
            <h2>Years</h2>
            <h3>Press CTRL (CMD) + Mouse Left to activate element</h3>
            <h3>Press ALT + Mouse Left to deactivate element</h3>
            <form
                className="addToTree"
                onSubmit={addToYearsTable}
            >
                <input
                    type="text"
                    onChange={(e) => changeValue(e, 'phone')}
                    placeholder='Write some phone number'
                    value={phone}
                />
                <input
                    type="text"
                    onChange={(e) => changeValue(e, 'name')}
                    placeholder='Write some name'
                    value={name}
                />
                <button>Add</button>
            </form>
            <div className="filterTree">
                <button onClick={sortByFilter}>Filter tree by name</button>
            </div>
            <div className="filterTree">
                <button onClick={bubbleSort}>Bubble sort by name</button>
            </div>
            <table className="customTable">
                <tbody>
                {
                    fillData()
                }
                </tbody>
            </table>
        </div>
    )

}