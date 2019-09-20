import React, {Component} from 'react';

import HomeView from './HomeView';
import CustomTableItem from './components/CustomTableItem';

export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            skills: [
                {
                    id: 1,
                    value: 90,
                    title: "user experience"
                },
                {
                    id: 2,
                    value: 90,
                    title: "user experience"
                },
                {
                    id: 3,
                    value: 90,
                    title: "communication"
                },
                {
                    id: 4,
                    value: 98,
                    title: "user interface"
                },
                {
                    id: 5,
                    value: 80,
                    title: "user interface"
                },
                {
                    id: 6,
                    value: 80,
                    title: "team work"
                },
                {
                    id: 7,
                    value: 70,
                    title: "web design"
                },
                {
                    id: 8,
                    value: 96,
                    title: "web design"
                },
                {
                    id: 9,
                    value: 96,
                    title: "dedication"
                },
            ],
            workExperience: [
                {
                    title: "UI/UX Designer",
                    place: "@Academy",
                    date: "jan 2013- dec 2014",
                    description: "Lorem ipsum dolor sit amet, consectetur et incididunt ut labore et dolorea."
                },
                {
                    title: "Creative Director",
                    place: "@deviserweb",
                    date: "jan 2013- dec 2014",
                    description: "Lorem ipsum dolor sit amet, consectetur et incididunt ut labore et dolorea."
                },
                {
                    title: "Managing Director",
                    place: "@Academy",
                    date: "jan 2013- dec 20145",
                    description: "Lorem ipsum dolor sit amet, consectetur et incididunt ut labore et dolorea."
                },
                {
                    title: "Ceo & Forunder",
                    place: "@Starlab",
                    date: "jan 2013- dec 2014",
                    description: "Lorem ipsum dolor sit amet, consectetur et incididunt ut labore et dolorea."
                },
            ],
            education: [
                {
                    title: "Graduation",
                    place: "@Oxford University",
                    date: "jan 2013- dec 2014",
                    description: "Lorem ipsum dolor sit amet, consectetur et incididunt ut labore et dolorea."
                },
                {
                    title: "Bsc in Art Direction",
                    place: "@Sussex University",
                    date: "jan 2013- dec 2014",
                    description: "Lorem ipsum dolor sit amet, consectetur et incididunt ut labore et dolorea."
                },
                {
                    title: "High School",
                    place: "@IT Academy",
                    date: "jan 2013- dec 20145",
                    description: "Lorem ipsum dolor sit amet, consectetur et incididunt ut labore et dolorea."
                },
                {
                    title: "Bachelor Dergree",
                    place: "@Lusofona University",
                    date: "jan 2013- dec 2014",
                    description: "Lorem ipsum dolor sit amet, consectetur et incididunt ut labore et dolorea."
                },
            ],
            objectTable: null,
            errorLoadingData: null,
            dragged: {
                itemID: null,
                overItemID: null
            },
            customTableFields: {
                phone: "",
                name: "",
            }
        };

    }

    componentDidMount() {
        this.fetchData(process.env.REACT_APP_API_URL);
    }

    fetchData = (url) => {
        fetch(url)
            .then((response) => {
                if (response.ok) {
                    return response.json()
                }
                throw Error("Oops, try again later")
            })
            .then(data => this.mutateAndSetData(data))
            .catch(error =>
                this.setState({
                    errorLoadingData: error.message
                })
            )
    };

    mutateAndSetData = (data) => {
        const mutatedData = data.reduce((acc, item) => {
            return {
                ...acc,
                [item.id]: {
                    phone: item.phone,
                    name: item.name,
                    isActive: false
                }
            }
        }, {});
        this.setState({
            objectTable: mutatedData
        })
    };

    sortByFilter = () => {
        const {objectTable} = this.state;
        const filteredYears = Object.entries(objectTable).sort(([aKey, {name: aName}], [bKey, {name: bName}]) => {
            return this.stringCharCodeValue(aName) - this.stringCharCodeValue(bName);
        });
        this.setFilteredItems(filteredYears);
    };

    stringCharCodeValue = (line) => {
        return line.split().reduce((acc, item) => acc + item.charCodeAt(0), 0);
    };

    bubbleSort = () => {
        const {objectTable} = this.state;
        const filteredYears = Object.entries(objectTable);
        this.setFilteredItems(
            this.bubbleSortFunction(
                filteredYears,
                (array, variable) => this.stringCharCodeValue(array[variable][1].name)
            )
        );
    };

    bubbleSortFunction = (data, condition) => {
        const sortedData = data;
        let temp = true;
        while (temp) {
            temp = false;
            for (let i = 0; i < sortedData.length - 1; i++) {
                if (condition(sortedData, i) > condition(sortedData, i + 1)) {
                    temp = sortedData[i];
                    sortedData[i] = sortedData[i + 1];
                    sortedData[i + 1] = temp;
                }
            }
        }
        return sortedData;
    };

    setFilteredItems = (array) => {
        const {objectTable} = this.state;
        const keys = Object.keys(objectTable);
        const filteredYears = array.reduce((acc, [key, value], index) => {
            return {
                ...acc,
                [keys[index]]: {
                    ...value
                }
            }
        }, {});
        this.setState({
            objectTable: filteredYears
        })
    };

    changeValue = (e, field) => {
        this.setState(
            {
                customTableFields: {
                    ...this.state.customTableFields,
                    [field]: e.target.value
                }
            }
        );
    };

    addToYearsTable = (e) => {
        e.preventDefault();
        const {phone, name} = this.state.customTableFields;
        if (phone.trim() === '' || name.trim() === '') {
            return;
        }
        const {objectTable} = this.state;
        const objectTableKeys = Object.keys(objectTable);
        const id = Math.max(...objectTableKeys) + 1;
        this.setState({
            objectTable: {
                ...objectTable,
                [id]: {
                    phone,
                    name,
                    isActive: true
                }
            },
            customTableFields: {
                phone: "",
                name: ""
            }
        });
    };

    removeItem = (itemsKey) => {
        const {objectTable} = this.state;
        const {[itemsKey]: deletedKey, ...newArray} = objectTable;
        this.setState({
            objectTable: newArray
        })
    };

    handleActive = (itemKey, e) => {
        if (e.ctrlKey || e.altKey || e.metaKey) {
            const {objectTable} = this.state;
            const {[itemKey]: item} = objectTable;
            if (
                ((e.ctrlKey || e.metaKey) && !item.isActive) ||
                (e.altKey && item.isActive)
            ) {
                this.setState({
                    objectTable: {
                        ...objectTable,
                        [itemKey]: {
                            ...item,
                            isActive: !item.isActive
                        }
                    }
                })
            }
        }
    };

    onDragStart = (e, itemID) => {
        const {dragged} = this.state;
        this.setState({
            dragged: {
                ...dragged,
                itemID
            }
        });
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target);
    };

    onDragOver = (overItemID) => {
        const {dragged} = this.state;
        this.setState(
            {
                dragged: {
                    ...dragged,
                    overItemID
                }
            }
        )
    };

    onDragEnd = () => {
        const {dragged} = this.state;
        if (dragged.itemID === dragged.overItemID) {
            return;
        }
        const {objectTable} = this.state;
        const newDraggedItem = {[dragged.itemID]: {...objectTable[dragged.overItemID]}};
        const newDraggedOverItem = {[dragged.overItemID]: {...objectTable[dragged.itemID]}};
        this.setState({
            objectTable: {
                ...objectTable,
                ...newDraggedItem,
                ...newDraggedOverItem
            },
            dragged: {
                overItemID: null,
                itemID: null
            }
        });
    };

    createCustomTableItems = (data) => {
            let dataArray = [];
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    dataArray = [
                        ...dataArray,
                        <CustomTableItem
                            key={key}
                            itemKey={key}
                            phone={data[key].phone}
                            name={data[key].name}
                            isActive={data[key].isActive}
                            removeItem={this.removeItem}
                            handleActive={this.handleActive}
                            onDragStart={this.onDragStart}
                            onDragOver={this.onDragOver}
                            onDragEnd={this.onDragEnd}
                        />
                    ]
                }
            }
            return dataArray;
    };

    render() {
        const {
            skills,
            workExperience,
            education,
            objectTable,
            errorLoadingData,
            customTableFields : {phone,name}
        } = this.state;
        const customTableItems = objectTable ? this.createCustomTableItems(objectTable) : null;
        return (
            <HomeView
                skills={skills}
                education={education}
                workExperience={workExperience}
                objectTable={customTableItems}
                errorLoadingData={errorLoadingData}
                phone={phone}
                name={name}

                sortByFilter={this.sortByFilter}
                bubbleSort={this.bubbleSort}
                changeValue={this.changeValue}
                addToYearsTable={this.addToYearsTable}
            />
        )
    }

}