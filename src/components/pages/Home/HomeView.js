import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import ItemsTree from "./components/ItemsTree/ItemsTree";
import CustomTable from "./components/CustomTable/CustomTable";
import SkillsBlock from "./components/SkillsBlock/SkillsBlock";

import '../../../scss/components/pages/Home/home.scss';

export default function HomeView
    ({
         skills,
         workExperience,
         education,
         objectTable,
         errorLoadingData,
         phone,
         name,
         sortByFilter,
         removeItem,
         bubbleSort,
         handleActive,
         onDragStart,
         onDragOver,
         onDragEnd,
         changeValue,
         addToYearsTable
     }) {

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
            <CustomTable
                data={objectTable}
                phone={phone}
                name={name}
                sortByFilter={sortByFilter}
                bubbleSort={bubbleSort}
                removeItem={removeItem}
                handleActive={handleActive}
                onDragStart={onDragStart}
                onDragOver={onDragOver}
                onDragEnd={onDragEnd}
                addToYearsTable={addToYearsTable}
                changeValue={changeValue}
            />
            <ItemsTree data={workExperience} id="workExperience" title="Work Experience"/>
            <ItemsTree data={education} id="education" title="Education"/>
            <SkillsBlock skills={skills}/>
        </Fragment>
    )
}

HomeView.propTypes = {
    skills: PropTypes.array.isRequired,
    workExperience: PropTypes.array.isRequired,
    education: PropTypes.array.isRequired,
    objectTable: PropTypes.object,
    errorLoadingData: PropTypes.any,
    phone: PropTypes.string,
    name: PropTypes.string,
    sortByFilter: PropTypes.func,
    removeItem: PropTypes.func,
    bubbleSort: PropTypes.func,
    handleActive: PropTypes.func,
    onDragStart: PropTypes.func,
    onDragOver: PropTypes.func,
    onDragEnd: PropTypes.func,
    changeValue: PropTypes.func,
    addToYearsTable: PropTypes.func
};