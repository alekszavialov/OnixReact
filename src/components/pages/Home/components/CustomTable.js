import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import '../../../../scss/components/pages/Home/components/customTable.scss';

import Spinner from "../../../elements/Spinner/Spinner";
import ErrorMessage from "../../../elements/ErrorMessage/ErrorMessage";

export default function CustomTable(
    {
        data,
        phone,
        name,
        errorLoadingData,
        sortByFilter,
        bubbleSort,
        addToYearsTable,
        changeValue
    }) {
    return (
        <article id="table">
            <div className="container">
                {data ? (
                        <Fragment>
                            <h2>Years</h2>
                            < h3> Press CTRL(CMD) + Mouse Left to activate element</h3>
                            <h3>Press ALT + Mouse Left to deactivate element</h3>
                            <form
                                className="addToTree"
                                onSubmit={addToYearsTable}
                            >
                                <input
                                    type="text"
                                    onChange={(e) => changeValue(e, 'phone')}
                                    placeholder='Write some phone number'
                                    value={phone}
                                />
                                <input
                                    type="text"
                                    onChange={(e) => changeValue(e, 'name')}
                                    placeholder='Write some name'
                                    value={name}
                                />
                                <button>Add</button>
                            </form>
                            <div className="filterTree">
                                <button onClick={sortByFilter}>Filter tree by name</button>
                            </div>
                            <div className="filterTree">
                                <button onClick={bubbleSort}>Bubble sort by name</button>
                            </div>
                            <table className="customTable">
                                <tbody>
                                {
                                    data
                                }
                                </tbody>
                            </table>
                        </Fragment>
                    ) :
                    errorLoadingData ?
                        <ErrorMessage message={errorLoadingData}/> :
                        <Spinner/>
                }
            </div>
        </article>
    )
}

CustomTable.propTypes = {
    data: PropTypes.objectOf(PropTypes.object).isRequired,
    phone: PropTypes.string,
    name: PropTypes.string,
    errorLoadingData: PropTypes.string,
    sortByFilter: PropTypes.func,
    bubbleSort: PropTypes.func,
    addToYearsTable: PropTypes.func,
    changeValue: PropTypes.func,
};