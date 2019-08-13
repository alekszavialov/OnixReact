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
        this.props.addToYearsTable(year, title);
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

    fillData = () => {
        const {data, removeItem} = this.props;
        let dataArray = [];
        for (let key in data){
            if( data.hasOwnProperty( key ) ) {
                dataArray = [
                    ...dataArray,
                    <YearsTreeItem
                        key={key}
                        itemKey={key}
                        year={data[key].year}
                        title={data[key].title}
                        removeItem={removeItem}
                    />
                ]
            }
        }
        return dataArray;
    };

    render() {
        const {sortByFilter, bubbleSort} = this.props;
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
                        this.fillData()
                    }
                    </tbody>
                </table>
            </Fragment>
        )
    }


}