import React, {Component} from 'react'
import CarStockDataService from '../../service/CarStockDataService'

class CarStock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            carstocks: [],
            id: this.props.match.params.id,
            image: '',
            brand: '',
            color: '',
            yearMade: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        let carstock = {
            id: this.state.id,
            brand: this.state.image,
            brand: this.state.brand,
            color: this.state.color,
            yearMade: this.state.yearMade
        }
        
        CarStockDataService.createCarStock(carstock)
            .then(this.props.history.push(`/CarStock`))
    }

    render() {
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Add CarStock</h3>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>ID:</label>
                            <input className="form-control" type="text" value={this.state.id} disabled></input>
                        </div>
                        <div>
                            <lable>Image:</lable>
                            <input className="form-control" type="text" name="image" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <lable>Brand:</lable>
                            <input className="form-control" type="text" name="brand" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <lable>Color:</lable>
                            <input className="form-control" type="text" name="color" onChange={this.handleChange}></input>
                        </div>
                        <div>
                            <lable>Year Made:</lable>
                            <input className="form-control" type="text" name="yearMade" onChange={this.handleChange}></input>
                        </div><br/><br/>
                        <button className="btn btn-success" type="submit">Submit</button><br/><br/>
                    </form>
                </div>
            </div>
        )
    }
}

export default CarStock