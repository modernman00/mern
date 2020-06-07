import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap"
import { userData } from './data/formData'
import InputForm from './template/InputForm'
import axios from "axios";

export default class CreateUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            name :"",
            data: userData,
            user: [],
            error:""
        }
    }

     componentDidMount()
    {
        axios.get('http://localhost:5000/user/show')
        .then(res =>{ this.setState({ user: res.data})
     })
        .catch(err => console.log(err))
    }


        Validate = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        let err
        if(value.length > 20)  {
                if (value.length > 10) 
                err = `Your entry for ${name} is above the expected limit\n` 
        }  
        if(name === 'name') {
            for (let i in this.state.user) {
                if(value === this.state.user[i].username) {
                    err += `We already have the {${value}}you typed on record`
                }        
            }            
        }
       this.setState({
           error : err,
           [name] : value
       })
    }

    submit = (e) => {
        e.preventDefault()

       const {username, password, name} = this.state;

       const data = { 
           username : username, 
           password : password, 
           name: name 
        }
        
        axios.post('http://localhost:5000/user/add', data)
        .then(res => {console.log(res.data)})
        .catch(err => { console.log("Could not get to the API - U" + err)}) 
  
        window.location = "/user"
    }

    render() {     
             return (
             <div className="container">
            <form onSubmit={this.submit}>
                {this.state.error}
                    <Form>
                        {
                            this.state.data.map(el => {
                                return <InputForm key={el.attribute} 
                                label={el.label.toUpperCase()} attribute={el.attribute} 
                                type={el.type} 
                                Validate ={this.Validate} />
                            })
                        }

                        <Button variant="primary" size="lg" type="submit">
                            Submit
                        </Button>
                    </Form>


                </form>

            </div>
        )
    }
}
