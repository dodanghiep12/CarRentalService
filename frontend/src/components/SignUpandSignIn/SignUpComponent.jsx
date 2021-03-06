import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import UsersDataService from '../../service/UsersDataService';


class SignUpComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            userName: '',
            password: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values) {
        let user = {
            userName: values.userName,
            password: values.password,
            firstName: values.firstname,
            lastName: values.lastname
        }

        UsersDataService.createUser(user)
        .then(() => this.props.history.push('/SignIn'))
    }

    render() {
        let {id, firstName, lastName, userName, password} = this.state
        return (
            <div className="base-container">
                <br/>
                <div className="header">Register</div>
                <div className="content">
                <div className="image">
                    <img src="https://static.thenounproject.com/png/6478-200.png" alt="new"/>
                </div>
                    
                    <Formik
                        initialValues={{id, firstName, lastName, userName, password}}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form className="form">
                                    {/* <fieldset className="form-group">
                                        <label >ID:</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset> */}
                                    <fieldset className="form-group">
                                        <label>Username</label>
                                        <Field className="form-control" type="text" name="userName" placeholder="userName" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Password</label>
                                        <Field className="form-control" type="text" name="password" placeholder="password" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Firstname</label>
                                        <Field className="form-control" type="text" name="firstname" placeholder="firstname" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Lastname</label>
                                        <Field className="form-control" type="text" name="lastname" placeholder="lastname" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <button className="btn" type="submit">Register</button>
                                    </fieldset>
                                    <br/>
                                    <br/>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }
}

export default SignUpComponent;