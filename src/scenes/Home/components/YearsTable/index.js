import React, {Component, Fragment} from 'react';

import YearsTreeItem from './components/YearsTreeItem'

export default class YearTree extends Component {

    constructor(props) {
        super(props);

        this.state = {
            phone: '',
            name: ''
        };

    }

    addToYearsTable = (e) => {
        e.preventDefault();
        const {phone, name} = this.state;
        this.props.addToYearsTable(phone, name);
    };

    changeYear = (e) => {
        this.setState({
            phone: e.target.value
        });
    };

    changeTitle = (title) => {
        this.setState({
            name: title.target.value
        });
    };

    fillData = () => {
        const {data, removeItem, handleActive, onDragStart, onDragOver, onDragEnd} = this.props;
        let dataArray = [];
        for (let key in data){
            if( data.hasOwnProperty( key ) ) {
                dataArray = [
                    ...dataArray,
                    <YearsTreeItem
                        key={key}
                        itemKey={key}
                        phone={data[key].phone}
                        name={data[key].name}
                        isActive={data[key].isActive}
                        removeItem={removeItem}
                        handleActive={handleActive}
                        onDragStart={onDragStart}
                        onDragOver={onDragOver}
                        onDragEnd={onDragEnd}
                    />
                ]
            }
        }
        return dataArray;
    };

    render() {
        const {sortByFilter, bubbleSort} = this.props;
        const {name, phone} = this.state;
        return (
            <Fragment>
                <form
                    className="addToTree"
                    onSubmit={this.addToYearsTable}
                >
                    <input
                        type="text"
                        onChange={this.changeYear}
                        placeholder='Write some phone number'
                        value={phone}
                    />
                    <input
                        type="text"
                        onChange={this.changeTitle}
                        placeholder='Write some name'
                        value={name}
                    />
                    <button>Add</button>
                </form>
                <div className="filterTree">
                    <button onClick={sortByFilter}>Filter tree by name</button>
                </div>
                <div className="filterTree">
                    <button onClick={bubbleSort}>Bubble sort by name</button>
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