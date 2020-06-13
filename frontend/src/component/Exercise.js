import React, { Component } from 'react'
import { exerciseData } from './data/formData'
import axios from "axios"
import TableE from './template/TableE'
import ErrorBoundary from './ErrorBoundary';


export default class Exercise extends Component {

    constructor(props) {
        super(props)

        this.state = {
            tableHead: exerciseData,
            tableBody: [],
            dataDelete: "",
        }
    }

    componentDidMount() {
        // get out the data from backend
        axios.get('http://localhost:5000/exercise/show')
            .then(res => {           
                this.setState({ 
                tableBody: res.data,
                })
             })
            .catch(err => console.log(err))
    }

    deleteEntry = (id) => {
        axios.delete(`http://localhost:5000/exercise/delete/${id}`)
            .then(res =>{
               
                this.setState({
                    dataDelete: res.data
                })
            })
            .catch(err => console.log(err))

        this.setState({
            dataDelete: this.state.dataDelete.filter(el => el._id !== id)
        })
    }

    render() {
        return (
            <ErrorBoundary>
            <TableE 
            body={this.state.tableBody} 
            header={this.state.tableHead} 
            />
            </ErrorBoundary>
        )
    }
}
