import React from 'react';
import PropTypes from 'prop-types';

import '../../../../../../../scss/components/pages/Home/components/CustomTable/components/CustomTableItem/customTableItem.scss';

export default function CustomTableItem(
    {
        itemKey,
        phone,
        name,
        isActive,
        removeItem,
        handleActive,
        onDragStart,
        onDragOver,
        onDragEnd
    }
) {

    return (
        <tr
            className={isActive ? 'active-item' : null}
            onClick={(e) =>
                handleActive(itemKey, e)
            }
            draggable
            onDragStart={(e) => onDragStart(e, itemKey)}
            onDragOver={() => onDragOver(itemKey)}
            onDragEnd={onDragEnd}
        >
            <td>{phone}</td>
            <td>{name}</td>
            <td
                className="remove"
            >
                <button onClick={() => removeItem(itemKey)}>
                    Click to remove
                </button>
            </td>
        </tr>
    )
}

CustomTableItem.propTypes = {
    itemKey: PropTypes.string,
    phone: PropTypes.string,
    name: PropTypes.string,
    isActive: PropTypes.bool,
    removeItem: PropTypes.func,
    handleActive: PropTypes.func,
    onDragStart: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragEnd: PropTypes.func,
};