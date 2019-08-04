import React, {Component} from 'react';

import './styles.css';

export default class YearsTreeItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            year: props.data[0],
            title: props.data[1]
        };
        this.removeItem = this.removeItem.bind(this);
    }

    removeItem(){
        const {year, title} = this.state;
        this.props.removeItem([year, title])
    }


    render() {
        const {year, title} = this.state;
        return (
            <tr>
                    <td>{year}</td>
                    <td>{title}</td>
                    <td
                        className="remove"
                    >
                        <button onClick={this.removeItem}>
                            Click to remove
                        </button>
                    </td>

            </tr>
        )
    }


}