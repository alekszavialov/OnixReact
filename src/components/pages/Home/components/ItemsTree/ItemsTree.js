import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import '../../../../../scss/components/pages/Home/components/ItemsTree/itemsTree.scss';

import Spinner from "../../../../elements/Spinner/Spinner";

export default function ItemsTree({data, id, title}) {
    return (
        <article id={id}>
            <div className="container">
                {data ? (
                    <Fragment>
                        <h2>{title}</h2>
                        <ul className="tree">
                            {
                                data.map(item =>
                                    <li key={item.title}>
                                        <span/>
                                        <div className="tree-item">
                                            <h3>{item.title}</h3>
                                            <span>{item.place}</span>
                                            <span className="tree-item-date">{item.date}</span>
                                            <p>{item.description}</p>
                                        </div>
                                    </li>
                                )
                            }
                        </ul>
                    </Fragment>
                ) : <Spinner/>}
            </div>
        </article>

    )
}

ItemsTree.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.string,
    title: PropTypes.string
};