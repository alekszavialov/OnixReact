import React from 'react';
import PropTypes from 'prop-types';

import '../../../../scss/components/pages/Home/components/customTableItem.scss';

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
      onClick={(e) => handleActive(itemKey, e)}
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
        <button type="button" onClick={() => removeItem(itemKey)}>
                    Click to remove
        </button>
      </td>
    </tr>
  );
}

CustomTableItem.propTypes = {
  itemKey: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  removeItem: PropTypes.func,
  handleActive: PropTypes.func,
  onDragStart: PropTypes.func,
  onDragOver: PropTypes.func,
  onDragEnd: PropTypes.func,
};

CustomTableItem.defaultProps = {
  isActive: undefined,
  removeItem: undefined,
  handleActive: undefined,
  onDragStart: undefined,
  onDragOver: undefined,
  onDragEnd: undefined,
};
