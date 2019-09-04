import React from 'react';

export default function HomeTree(props) {

    const {data} = props;

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