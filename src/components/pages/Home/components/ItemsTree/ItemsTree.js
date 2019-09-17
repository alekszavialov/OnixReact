import React from 'react';

import '../../../../../scss/components/pages/Home/components/ItemsTree/itemsTree.scss';

export default function HomeTree({data}) {
    return (
        <ul className="tree">
            {
                data.map(item =>
                    <li key={item.title}>
                        <span/>
                        <div className="tree-item">
                            <h3>{item.title}</h3>
                            <span>{item.place}</span>
                            <span className="tree-item-date">{item.date}</span>
                            <p>{item.description}</p>
                        </div>
                    </li>
                )
            }
        </ul>
    )
}