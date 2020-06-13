import React, { Component } from 'react'
import TableE from './template/TableE'

export default class ShowExercise extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             data : this.props.data
        }
    }

    componentDidMount() {
        console.log(this.props.dataTW)
    }
    



    render() {
        return (
            <TableE body = {this.state.body} header ={this.state.header} />
        )
    }
}
