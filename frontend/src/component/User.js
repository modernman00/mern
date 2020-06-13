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
            tableBody: [],
            dataDelete: []          
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

       deleteEntry = (id) => {
        axios.delete(`http://localhost:5000/user/delete/${id}`)
            .then(res =>{               
                this.setState({
                    dataDelete: res.data
                })
            })
            .catch(err => console.log(err))

        this.setState({
            dataDelete: this.state.dataDelete.filter(el => el._id !== id)
        })

        window.location ='/user'
    }


    render() {
        return (
             <ErrorBoundary>
            <TableU 
            body={this.state.tableBody} 
            header={this.state.tableHead} 
            deleteEntry = {this.deleteEntry}
            />
            </ErrorBoundary>
        )  
    }
}
