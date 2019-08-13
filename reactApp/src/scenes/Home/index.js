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
            yearsTable: [
                [1993, 'Birth'],
                [2000, 'Elementary school'],
                [2004, 'Middle school'],
                [2009, 'Kirovograd Cybernetics and Technology College'],
                [2016, 'Central Ukrainian National Technical University'],
                [2011, 'Started work in VCTService']
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
        console.log(objectTable);
        console.log(Object.keys(objectTable));
        console.log(Object.keys(objectTable).map(parseFloat));
        const filteredYears = Object.entries(objectTable).sort(([aKey, {year : aYear}],[bKey, {year : bYear}]) => {
            return aYear - bYear;
        });
        console.log(filteredYears);
        let newArray = filteredYears.reduce( (acc, [key, value]) => {
            console.log(key);
            return {
                ...acc,
                [key] : {
                    ...value
                }
            }
        }, {});
        console.log(newArray);


        //     .reduceRight((acc,key) => {
        //     console.log(key);
        //     return {
        //         ...acc,
        //         [key] : {
        //             ...objectTable[key]
        //         }
        //     }
        // }, {});
        // console.log(filteredYears);
        // this.setState({
        //     yearsTable: filteredYears
        // })
    };

    bubbleSort = () => {
        const {yearsTable} = this.state;
        let temp = true;
        while (temp) {
            temp = false;
            for (let i = 0; i < yearsTable.length - 1; i++) {
                if (yearsTable[i][0] > yearsTable[i + 1][0]) {
                    temp = yearsTable[i];
                    yearsTable[i] = yearsTable[i + 1];
                    yearsTable[i + 1] = temp;
                }
            }
        }
        this.setState({
            yearsTable
        })
    };

    sort = () => {
        const {objectTable} = this.state;
        const filteredYears = Object.keys(objectTable).reduceRight((acc,key) => {
            return {
                ...acc,
                [key] : {
                    ...objectTable[key]
                }
            }
        }, {});
        console.log(filteredYears);
        this.setState({
            yearsTable: filteredYears
        })
    };

    filterElements = (year, title) => {
        const {yearsTable} = this.state;
        return yearsTable.filter(([itemYear, itemTitle]) => !(itemYear === year && itemTitle === title))
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
        }, () => console.log(this.state.objectTable))
    };

    removeItem = (itemsKey) => {
        const {objectTable} = this.state;
        const {[itemsKey]: deletedKey, ...newArray} = objectTable;
        this.setState({
            objectTable: newArray
        })
    };


    render() {

        const {skills, workExperience, education, yearsTable, objectTable} = this.state;

        return (
            <HomeComponent
                skills={skills}
                education={education}
                workExperience={workExperience}
                yearsTable={yearsTable}
                objectTable={objectTable}

                sortByFilter={this.sortByFilter}
                bubbleSort={this.bubbleSort}
                addToYearsTable={this.addToYearsTable}
                removeItem={this.removeItem}
            />
        )
    }

}