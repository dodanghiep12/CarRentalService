import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomeComponent extends Component {
    render() {
        return (
            <div className="container">
                    <p className="hai">A NEW WAY TO RENT</p>
                    <p className="hai">Quality rental vehicles</p>
                    <br/>
                    <button className="bt first">
                        <Link to="/SignIn">HERE</Link>
                    </button>                   
            </div>
        )
    }
}

export default HomeComponent;