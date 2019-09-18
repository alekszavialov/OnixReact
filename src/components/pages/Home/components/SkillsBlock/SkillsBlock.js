import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import '../../../../../scss/components/pages/Home/components/SkillsBlock/skillsBlock.scss';

import Spinner from "../../../../elements/Spinner/Spinner";

skillBlock.propTypes = {
    skills: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default function skillBlock({skills}) {
    return (
        <article id="mySkills">
            <div className="container">
                {skills ? (
                    <Fragment>
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
                    </Fragment>) : <Spinner/>
                }
            </div>
        </article>
    )
}