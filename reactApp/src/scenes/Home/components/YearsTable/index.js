import React, {Component, Fragment} from 'react';

import YearsTreeItem from './components/YearsTreeItem'

export default class YearTree extends Component {

    constructor(props) {
        super(props);

        this.state = {
            year: '',
            title: ''
        };

        this.changeYear = this.changeYear.bind(this);
        this.changeTitle = this.changeTitle.bind(this);

        this.sortByFilter = this.sortByFilter.bind(this);
        this.addToYearsTable = this.addToYearsTable.bind(this);
        this.removeItem = this.removeItem.bind(this);

    }

    sortByFilter() {
        this.props.sortByFilter();
    }

    addToYearsTable(e) {
        e.preventDefault();
        const {year, title} = this.state;
        this.props.addToYearsTable([parseInt(year), title]);
    }

    removeItem(data) {
        this.props.removeItem(data);
    }

    changeYear(event) {
        const value = parseInt(event.target.value);
        this.setState({
            year: value
        });
    }

    changeTitle(title) {
        this.setState({
            title: title.target.value
        });
    }

    render() {
        const {data} = this.props;
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
                    <button onClick={this.sortByFilter}>Filter tree</button>
                </div>
                <table className="yearsTree">
                    <tbody>
                    {
                        data.map((item, id) =>
                            <YearsTreeItem
                                key={item[0] + id}
                                data={item}
                                removeItem={this.removeItem}
                            />
                        )
                    }
                    </tbody>
                </table>
            </Fragment>
        )
    }


}