import React, { Component } from 'react'
import { Form, Button, Alert } from "react-bootstrap"
import { userData } from './../data/formData'
import InputForm from './../template/InputForm'
import axios from "axios";

export default class CreateUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            name: "",
            data: userData,
            user: [],
            error: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/user/show')
            .then(res => {
                this.setState({ user: res.data })
            })
            .catch(err => console.log(err))
    }


    Validate = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        let err
        if (value.length > 10) {
            // if (value.length > 10)
            err = `Your entry for ${name} is above the expected limit\n`
        }
        if (name === 'name') {
            err = this.state.user.map(el => {
                return (value === el.name) && `We already have ${value} on record`
            })

        }
        this.setState({
            error: err,
            [name]: value
        })
    }

    submit = (e) => {
        e.preventDefault()

        const { username, password, name } = this.state;

        const data = {
            username, password, name
        }

        axios.post('http://localhost:5000/user/add', data)
            .then(res => { console.log(res.data) })
            .catch(err => { console.log("Could not get to the API - U" + err) })

        window.location = "/user"
    }

    render() {
        return (
            <Form className="container" onSubmit={this.submit}>
                <Alert variant={(this.state.error) && 'danger'}> {this.state.error} </Alert>
                {
                    this.state.data.map(el => {
                        return <InputForm key={el.attribute}
                            label={el.label.toUpperCase()} attribute={el.attribute}
                            type={el.type}
                            Validate={this.Validate} />
                    })
                }

                <Button variant="primary" size="lg" type="submit">
                    Submit
                        </Button>
            </Form>
        )
    }
}