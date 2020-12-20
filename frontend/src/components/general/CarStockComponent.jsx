import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import CarStockDataService from '../../service/CarStockDataService'

class CarStockComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            image: this.props.match.params.image,
            brand: this.props.match.params.brand,
            color: this.props.match.params.color,
            yearMade: this.props.match.params.yearMade
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let carstock = {
            id: this.state.id,
            iamge: values.iamge,
            brand: values.brand,
            color: values.color,
            yearMade: values.yearMade
        }

            CarStockDataService.updateCarStock(carstock)
            .then(() => this.props.history.push('/CarStock'))
    }

    render() {
        let {id, brand, color} = this.state
        return(
            <div>
                <div className="jumbotron" style={{backgroundColor: "gray"}}>
                <h3 style={{textAlign: "center"}}>Update CarStock</h3>
                </div>
                <div className="container">
                    <Formik
                        initialValues={{id, brand, color}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-contorl" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset>
                                        <label>Image</label>
                                        <Field className="form-control" type="text" name="image" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Brand</label>
                                        <Field className="form-control" type="text" name="brand" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Color</label>
                                        <Field className="form-control" type="text" name="color" />
                                    </fieldset>
                                    <fieldset>
                                        <label>Year Made</label>
                                        <Field className="form-control" type="text" name="yearMade" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        } 
                    </Formik>
                </div>
            </div>
        )
    }
}

export default CarStockComponent 