import React, { Component } from 'react'
import Show from './template/Show'
import { userData } from './data/formData'
import axios from "axios"

export default class User extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: userData,
            tableHead: []            
        }
    }

    componentDidMount(){ 
       // get out the data from backend
        axios.get('http://localhost:5000/user/show')
        .then(res =>{ 
            this.setState({ tableHead: res.data})
            console.log(res.data)
            console.log(this.state.user)
            })
        .catch(err => console.log(err))
    } 

    render() {
        return (
            this.state.tableHead.map( el => {
                return  <Show key = {el.name} username = {el.username}  name = {el.name} password = {el.password} header = {this.state.user} />
            }          
        )
        )  
    }
}
