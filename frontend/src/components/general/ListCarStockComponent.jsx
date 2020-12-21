import React, { Component } from 'react'
import CarStockDataService from '../../service/CarStockDataService';
import UserCarInfoDataService from '../../service/UserCarInfoDataService';

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.userID,
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

    deleteCarStockClicked(brand, color, price) {
        console.log('Delete Employee Clicked')
        // CarStockDataService.deleteCarStock(id)
        // .then(
        //     response => {
        //         this.setState({message: `Deleted CarStock: ${brand} ${color}`})
        //         alert(this.state.message)
        //         this.refereshCarStock(); 
        //     }
        // )
        let usercarinfo = {
            brand: brand,
            color: color,
            userID: this.state.id,
            price: price
        }
        UserCarInfoDataService.createUserCarInfo(usercarinfo)
        .then(
            response => {
                this.setState({ message: `Added to Cart: ${brand} ${color} ${price}` })
                alert(this.state.message)
            }
        )
    }
    
    upDateCarStockClicked(id, brand, color) {
        console.log('Update CarStock Clicked')
        this.props.history.push(`/carstock/${id}/${brand}/${color}`)
    }

    addCarStockClicked() {
        console.log('Add CarStock Clicked')
        this.props.history.push(`/theCarStock/-1`)
    }
 
   render() {
       return(
           <div className="test">
               <h1 style={{textAlign:"center"}}>CarStock</h1><br></br>
               <div className="contacts" >
                           {
                               this.state.carstocks.map (
                                   carstocks => 
                                   <div className="Carcontent" style={{textAlign: "center"}} key={carstocks.id}>
                                       <img src={carstocks.image} alt="description" width="300" height="250"/>
                                       <p>Brand: {carstocks.brand}</p>
                                       <p>Color: {carstocks.color}</p>
                                       <p>Year Made: {carstocks.yearMade}</p>
                                       <p>Price: ${carstocks.price}</p>
                                       <button className="btn btn-warning" onClick={() => this.deleteCarStockClicked(carstocks.brand, carstocks.color, carstocks.price)}>Add to Cart</button>
                                   </div>
                               )
                           }
               </div>
           </div>
       )
   } 
}

export default ListEmployeeComponent; 