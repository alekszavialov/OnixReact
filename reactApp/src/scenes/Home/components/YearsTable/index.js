import React, {Component, Fragment} from 'react';

import YearsTreeItem from './components/YearsTreeItem'

export default class YearTree extends Component {

    constructor(props) {
        super(props);

        this.state = {
            year: '',
            title: ''
        };

    }

    addToYearsTable = (e) => {
        e.preventDefault();
        const {year, title} = this.state;
        this.props.addToYearsTable([parseInt(year), title]);
    };

    changeYear = (e) => {
        const value = parseInt(e.target.value);
        this.setState({
            year: value
        });
    };

    changeTitle = (title) => {
        this.setState({
            title: title.target.value
        });
    };

    render() {
        const {data, removeItem, sortByFilter, bubbleSort} = this.props;
        const {year, title} = this.state;
        return (
            <Fragment>
                <form
                    className="addToTree"
                    onSubmit={this.addToYearsTable}
                >
                    <input
                        type="text"
                        onChange={this.changeYear}
                        placeholder='Write some year'
                        value={year}
                    />
                    <input
                        type="text"
                        onChange={this.changeTitle}
                        placeholder='Write some title'
                        value={title}
                    />
                    <button>Add</button>
                </form>
                <div className="filterTree">
                    <button onClick={sortByFilter}>Filter tree</button>
                </div>
                <div className="filterTree">
                    <button onClick={bubbleSort}>Bubble sort</button>
                </div>
                <table className="yearsTree">
                    <tbody>
                    {
                        data.map(([year, title]) =>
                            <YearsTreeItem
                                key={year + title}
                                year={year}
                                title={title}
                                removeItem={removeItem}
                            />
                        )
                    }
                    </tbody>
                </table>
            </Fragment>
        )
    }


}