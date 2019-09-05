import React from 'react';

import './styles.css';

export default function YearsTreeItem(
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
            onClick={(event) =>
                handleActive(itemKey,event)
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