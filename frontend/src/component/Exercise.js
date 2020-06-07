import React, { Component } from 'react'
import Show from './template/Show'
import { userData } from './data/formData'
import axios from "axios"

export default class Exercise extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: userData,
            dbData: ""
        }
    }

    componentDidMount() {
        // get out the data from backend
        axios.get('http://localhost:5000/user/show')
            .then(res => {
                this.setState({ dbData: res.data })
                console.log(res.data)
                  console.log(this.state.user)
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Show data = {this.state.user }/>
        )
    }
}
