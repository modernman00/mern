import React, { Component } from 'react'
import TableU from './template/TableU'
import { userData } from './data/formData'
import axios from "axios"
import ErrorBoundary from "./ErrorBoundary"

export default class User extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tableHead: userData,
            tableBody: []            
        }
    }

    componentDidMount(){ 
       // get out the data from backend
        axios.get('http://localhost:5000/user/show')
        .then(res =>{ 
            this.setState({ tableBody: res.data})
        })
        .catch(err => console.log(err))
    } 

    render() {
        return (
             <ErrorBoundary>
            <TableU 
            body={this.state.tableBody} 
            header={this.state.tableHead} 
            />
            </ErrorBoundary>
        )  
    }
}
