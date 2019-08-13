import React, {Component} from 'react';

import HomeComponent from './components';

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
            objectTable: {
                1: {
                    year: "1993",
                    title: "Birth"
                },
                2: {
                    year: "2000",
                    title: "Elementary school"
                },
                3: {
                    year: "2004",
                    title: "Middle school"
                },
                4: {
                    year: "2009",
                    title: "Kirovograd Cybernetics and Technology College"
                },
                5: {
                    year: "2016",
                    title: "Central Ukrainian National Technical University"
                },
                6: {
                    year: "2011",
                    title: "Started work in VCTService"
                }
            }
        };

    }

    sortByFilter = () => {
        const {objectTable} = this.state;
        const filteredYears = Object.entries(objectTable).sort(([aKey, {year : aYear}],[bKey, {year : bYear}]) => {
            return aYear - bYear;
        });
        this.setFilteredItems(filteredYears);
    };

    bubbleSort = () => {
        const {objectTable} = this.state;
        const filteredYears = Object.entries(objectTable);
        let temp = true;
        while (temp) {
            temp = false;
            for (let i = 0; i < filteredYears.length - 1; i++) {
                if (filteredYears[i][1].year > filteredYears[i + 1][1].year) {
                    temp = filteredYears[i];
                    filteredYears[i] = filteredYears[i + 1];
                    filteredYears[i + 1] = temp;
                }
            }
        }
        this.setFilteredItems(filteredYears);
    };

    setFilteredItems = (array) => {
        const {objectTable} = this.state;
        const keys = Object.keys(objectTable);
        const filteredYears = array.reduce( (acc, [key, value], index) => {
            return {
                ...acc,
                [keys[index]] : {
                    ...value
                }
            }
        }, {});
        this.setState({
            objectTable: filteredYears
        })
    };

    addToYearsTable = (year, title) => {
        if (!year || title.trim() === '') {
            return;
        }
        const {objectTable} = this.state;
        const objectTableKeys = Object.keys(objectTable);
        const id = Math.max(...objectTableKeys) + 1;
        this.setState({
            objectTable: {
                ...objectTable,
                [id]: {
                    year: year.toString(),
                    title: title
                }
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


    render() {

        const {skills, workExperience, education, objectTable} = this.state;

        return (
            <HomeComponent
                skills={skills}
                education={education}
                workExperience={workExperience}
                objectTable={objectTable}

                sortByFilter={this.sortByFilter}
                bubbleSort={this.bubbleSort}
                addToYearsTable={this.addToYearsTable}
                removeItem={this.removeItem}
            />
        )
    }

}