import React, {Component, Fragment} from 'react';

import HomeTree from './homeTree';
import YearsTable from './YearsTable';

export default class HomeComponent extends Component {

    render() {

        const {
            skills,
            workExperience,
            education,
            objectTable,
            sortByFilter,
            addToYearsTable,
            removeItem,
            bubbleSort
        } = this.props;

        return (
            <Fragment>
                <article id="aboutMe">
                    <div className="container">
                        <div className="about-me-block">
                            <div className="about-me-block-info">
                                <h2>About Me</h2>
                                <p>Lorem ipsum dolor sit amet, ectetuer nonummy nibh euismod tincidunt ut laoreet magna
                                    laoreet
                                    aliquam
                                    erat volutpat.</p>
                                <ul>
                                    <li>
                                        <span>Name</span>
                                        <p>Aleksandr Zavyalov</p>
                                    </li>
                                    <li>
                                        <span>Template</span>
                                        <a
                                            href="https://psdboom.com/downloads/free-personal-cvresume-web-template"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            https://psdboom.com/downloads/free-personal-cvresume-web-template
                                        </a>
                                    </li>
                                    <li>
                                        <span>Email</span>
                                        <a href="mailto:avelhar74@gmail.com">avelhar74@gmail.com</a>
                                    </li>
                                    <li>
                                        <span>Github</span>
                                        <a
                                            href="https://github.com/alekszavialov/OnixReact"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            https://github.com/alekszavialov/OnixReact
                                        </a>
                                    </li>
                                    <li>
                                        <span>Age</span>
                                        <p>25</p>
                                    </li>
                                    <li>
                                        <span>I like</span>
                                        <p>Pets, watch TV, sport</p>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-me-block-image">
                                <img src={require("../../../assets/images/about-me-img.png")} alt="me"/>
                            </div>
                        </div>

                    </div>
                </article>
                {
                    objectTable &&
                    (
                        <article id="table">
                            <div className="container">
                                <h2>Years</h2>
                                <YearsTable
                                    data={objectTable}
                                    sortByFilter={sortByFilter}
                                    bubbleSort={bubbleSort}
                                    addToYearsTable={addToYearsTable}
                                    removeItem={removeItem}
                                />
                            </div>
                        </article>
                    )
                }
                <article id="workExperience">
                    <div className="container separator">
                        <h2>Work Experience</h2>
                        <HomeTree data={workExperience}/>
                    </div>
                </article>
                <article id="education">
                    <div className="container">
                        <h2>Education</h2>
                        <HomeTree data={education}/>
                    </div>
                </article>
                <article id="mySkills">
                    <div className="container">
                        <h2>My Skills</h2>
                        <ul className="my-skills-list">
                            {
                                skills.map(item =>
                                    <li key={item.id}>
                                        <p>{item.title}</p>
                                        <div className="my-skills-list-scale">
                                            <div>
                                                <span style={{width: `${item.value}%`}}/>
                                            </div>
                                            <p>{item.value}%</p>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </article>
            </Fragment>
        )
    }

}