import React from 'react';

import './styles.css';

export default function YearsTreeItem({itemKey, phone, name, removeItem}) {

    return (
        <tr>
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