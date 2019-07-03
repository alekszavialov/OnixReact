import React, {Component} from 'react';

export default class HomeTree extends Component {

    render() {

        const {data} = this.props;

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

}