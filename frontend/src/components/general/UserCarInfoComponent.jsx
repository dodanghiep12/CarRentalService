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
        this.continueShopping = this.continueShopping.bind(this)
        this.deleteUserCarInfoClicked = this.deleteUserCarInfoClicked.bind(this)
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

    deleteUserCarInfoClicked(id, brand, color) {
        console.log("Delete Flashcard Set Clicked")
        UserCarInfoDataService.deleteUserCarInfo(id)
            .then(
                response => {
                    this.setState({ message: `Deleted Set: ${brand} ${color}` })
                    alert(this.state.message)
                    this.refreshUserCarInfo();
                }
            )
    }


    continueShopping(userID) {
        this.props.history.push(`/CarStock/${userID}`)
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
                                <th>UserID</th>
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
                                            <td>{usercarinfos.userID}</td>
                                            <td><button className="btn btn-danger" onClick={() => this.deleteUserCarInfoClicked(usercarinfos.id, usercarinfos.brand, usercarinfos.color)}>Remove</button></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div className="row">
                        <br />
                        <button className="btn btn-info" style={{margin: 10}} onClick={this.addFlashcardSetClicked}>Check Out</button>
                        <br/>
                       <button className="btn btn-dark" style={{margin: 10}}  onClick={() => this.continueShopping(this.state.id)}>Continue Shopping</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserCarInfoComponent;