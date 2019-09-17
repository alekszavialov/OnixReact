import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../../../../assets/images/404.jpg';

export default class ErrorPage extends Component{
    render(){
        return <div>
            <img alt="error" src={PageNotFound}  />
            <p style={{textAlign:"center"}}>
                <Link to="/">Go to Home </Link>
            </p>
        </div>;
    }
}