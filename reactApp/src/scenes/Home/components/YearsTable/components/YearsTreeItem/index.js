import React from 'react';

import './styles.css';

export default function YearsTreeItem({itemKey, year, title, removeItem}) {

    return (
        <tr>
            <td>{year}</td>
            <td>{title}</td>
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