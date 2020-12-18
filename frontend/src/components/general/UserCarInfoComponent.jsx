import React, { Component } from 'react';
import UserCarInfoDataService from '../../service/UserCarInfoDataService';
import { Redirect } from "react-router-dom";

class UserCarInfoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usercarinfos: [],
            id:this.props.location.state.id,
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
        if(this.state.renderCards){
                //return <Redirect to={"/FlashcardSets"} />                  
                return <Redirect
                to={{
                pathname: "/cardSet",
                state: { id: this.state.setID }
              }}
            />           

        }
        return (
            <div className="container">
                <h1 style={{ textAlign: "center" }}>UserCarInfo</h1><br></br>
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
                </div>
            </div>
        )
    }
}

export default UserCarInfoComponent;