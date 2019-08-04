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
            ]
        };

        this.sortByFilter = this.sortByFilter.bind(this);
        this.sort = this.sort.bind(this);
        this.addToYearsTable = this.addToYearsTable.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.filterElements = this.filterElements.bind(this);
    }

    sortByFilter() {
        const {yearsTable} = this.state;
        const filteredYears = yearsTable.sort((a, b) => {
            if (a[0] === b[0])
                return 0;
            return (a[0] < b[0]) ? -1 : 1;
        });
        this.setState({
            yearsTable: filteredYears
        })
    }

    sort() {
        const {yearsTable} = this.state;
        const filteredYears = yearsTable.sort();
        this.setState({
            yearsTable: filteredYears
        })
    }

    filterElements(year, title) {
        const {yearsTable} = this.state;
        return yearsTable.filter(([itemYear, itemTitle]) => !(itemYear === year && itemTitle === title))
    }

    addToYearsTable([year, title]) {
        const {yearsTable} = this.state;
        if (!year || title.trim() === '' || this.filterElements(year, title).length !== yearsTable.length)
            return;
        this.setState({
            yearsTable: [...yearsTable, [year, title]]
        })
    }

    removeItem([year, title]) {
        if (!year || title.trim() === '')
            return;
        const newArray = this.filterElements(year, title);
        this.setState({
            yearsTable: newArray
        })
    }


    render() {

        const {skills, workExperience, education, yearsTable} = this.state;

        return (
            <HomeComponent
                skills={skills}
                education={education}
                workExperience={workExperience}
                yearsTable={yearsTable}

                sortByFilter={this.sortByFilter}
                addToYearsTable={this.addToYearsTable}
                removeItem={this.removeItem}
            />
        )
    }

}