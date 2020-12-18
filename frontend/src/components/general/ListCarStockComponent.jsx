import React, { Component } from 'react'
import CarStockDataService from '../../service/CarStockDataService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carstocks: []
        }
        this.refereshCarStock = this.refereshCarStock.bind(this)
        this.deleteCarStockClicked = this.deleteCarStockClicked.bind(this)
        this.upDateCarStockClicked = this.upDateCarStockClicked.bind(this)
        this.addCarStockClicked = this.addCarStockClicked.bind(this)
    }

    componentDidMount() {
        this.refereshCarStock();
    }

    refereshCarStock() {
        CarStockDataService.retrieveAllCarStock()
        .then(
            response => {
                this.setState({
                    carstocks: response.data,
                })
            }
        )
    }

    deleteCarStockClicked(id, brand, color) {
        console.log('Delete Employee Clicked')
        CarStockDataService.deleteCarStock(id)
        .then(
            response => {
                this.setState({message: `Deleted CarStock: ${brand} ${color}`})
                alert(this.state.message)
                this.refereshCarStock(); 
            }
        )
    }
    
    upDateCarStockClicked(id, brand) {
        console.log('Update CarStock Clicked')
        this.props.history.push(`/carstock/${id}/${brand}`)
    }

    addCarStockClicked() {
        console.log('Add CarStock Clicked')
        this.props.history.push(`/theCarStock/-1`)
    }
 
   render() {
       return(
           <div className="container">
               <h1 style={{textAlign:"center"}}>CarStock</h1><br></br>
               <div className="jumbotron"  style={{backgroundColor: "gray", color: "white"}}>
                   <table className="table">
                       <thead>
                           <tr style={{textAlign: "center" , color: "black"}}>
                               <th>Id</th>
                               <th>Brand</th>
                               <th>Color</th>
                               <th>Delete</th>
                               <th>Update</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.carstocks.map (
                                   carstocks => 
                                   <tr style={{textAlign: "center"}} key={carstocks.id}>
                                       <td>{carstocks.id}</td>
                                       <td>{carstocks.brand}</td>
                                       <td>{carstocks.color}</td>
                                       <td><button className="btn btn-warning" onClick={() => this.deleteCarStockClicked(carstocks.id, carstocks.brand, carstocks.color)}>Delete</button></td>
                                       <td><button className="btn btn-success" onClick={() => this.upDateCarStockClicked(carstocks.id, carstocks.brand)}>Update</button></td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
                   <div className="row">
                       <br/>
                       <button className="btn btn-success" onClick={this.addCarStockClicked}>Add CarStock</button>
                   </div>
               </div>
           </div>
       )
   } 
}

export default ListEmployeeComponent; 