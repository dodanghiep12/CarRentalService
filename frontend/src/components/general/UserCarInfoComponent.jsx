import React, { Component } from 'react';
import UserCarInfoDataService from '../../service/UserCarInfoDataService';
import { Redirect } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

class UserCarInfoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id:this.props.location.state.id,
            usercarinfos: [],
            updatedName:""
        }    

    }

    componentDidMount() {
        this.refreshUserCarInfo();
    }

    refreshUserCarInfo() {
        UserCarInfoDataService.retrieveAllUserCarInfos()
            .then(
                response => {
                    this.setState({
                        usercarinfos: response.data
                    })
                }
            )
    }

    


    render() {
        return (
            <div className="container">
                <h1 style={{ textAlign: "center" }}>Cart <FaIcons.FaShoppingCart/></h1><br></br>
                <div className="jumbotron" style={{ backgroundColor: "gray", color: "white" }}>
                    <table className="table">
                        <thead>
                            <tr style={{ textAlign: "center", color: "black" }}>
                                <th>ID</th>
                                <th>Brand</th>
                                <th>Color</th>

                            </tr>
                        </thead>
                        <tbody>
                            {                              
                                this.state.usercarinfos.filter(elements => elements.userID === this.state.id).map(
                                    usercarinfos =>
                                        <tr style={{ textAlign: "center" }} key={usercarinfos.id}>
                                            <td>{usercarinfos.id}</td>
                                            <td>{usercarinfos.brand}</td>
                                            <td>{usercarinfos.color}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <br />
                        <button className="btn btn-info" onClick={this.addFlashcardSetClicked}>Check Out</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCarInfoComponent;