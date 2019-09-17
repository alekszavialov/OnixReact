import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import ItemsTree from "./components/ItemsTree/ItemsTree";
import CustomTable from "./components/CustomTable/CustomTable";

homeView.propTypes = {
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

export default function homeView
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
            <article id="table">
                {
                    objectTable ?
                        (
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
                        ) :
                        errorLoadingData ?
                            <h2 className="loading-error">{errorLoadingData}</h2> :
                            <div className="lds-hourglass"/>
                }
            </article>
            <article id="workExperience">
                <div className="container separator">
                    <h2>Work Experience</h2>
                    <ItemsTree data={workExperience}/>
                </div>
            </article>
            <article id="education">
                <div className="container">
                    <h2>Education</h2>
                    <ItemsTree data={education}/>
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