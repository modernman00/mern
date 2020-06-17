import React, { Component } from 'react'
import { Form, Button, Alert } from "react-bootstrap"
import EditUserView  from "./EditUserView"
import axios from "axios";

export default class EditUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            name: "",
            userData: [],
            error: ""
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/user/show/'+ this.props.match.params.id)
            .then(res => {
                console.log(res.data)
                this.setState({ 
                    username: res.data.username,
                    name : res.data.name
                    })
            })
            .catch(err => console.log(err))

            axios.get('http://localhost:5000/user/show')
            .then(res => {
                this.setState({ 
                   userData: res.data,
                    })
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
            err = this.state.userData.map(el => {
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

        const { username, name } = this.state;

        const data = {
            username, name
        }

        axios.post(`http://localhost:5000/user/update/${this.props.match.params.id}`, data)
            .then(res => { console.log(res.data) })
            .catch(err => { console.log("Could not get to the API - U" + err) })

        window.location = "/user"
    }

    render() {
        return (
            <Form className="container" onSubmit={this.submit}>
                <Alert variant={(this.state.error) && 'danger'}> {this.state.error} </Alert>
                {
                     <EditUserView
                            username={this.state.username}
                            name={this.state.name}
                            changeValue={this.Validate}
                    />
                }

                <Button variant="primary" size="lg" type="submit">
                    Submit
                        </Button>
            </Form>
        )
    }
}