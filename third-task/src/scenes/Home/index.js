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
            ]
        };
    }


    render() {

        const {skills, workExperience, education} = this.state;

        return (
            <HomeComponent skills={skills} education={education} workExperience={workExperience}/>
        )
    }

}