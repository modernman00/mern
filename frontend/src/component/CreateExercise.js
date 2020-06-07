import React, { Component } from 'react'
import { Form, Button } from "react-bootstrap"
import { exerciseData } from './data/formData'
import InputForm from './template/InputForm'
import axios from 'axios'

export default class CreateExercise extends Component {
    constructor(props) {
        super(props)

        this.inputRef = React.createRef();
        this.state = {
            first_name: "",
            last_name: "",
            weight: "",
            bodyType: "",
            duration: "",
            error: "",
            user: [],  
            data: exerciseData
        }
    }

    componentDidMount()
    {
        axios.get('http://localhost:5000/user/show')
        .then(res =>{ this.setState({ user: res.data})
     })
        .catch(err => console.log(err))
    }

    componentDidUpdate()
    {

    }


    componentWillUnmount()
    {

    }


    Validate = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        let err;
        if(value.length > 10)  {
                err = (value.length > 10) && "Your entry is above the limit " + name
        }  
       this.setState({
           error : err,
           [name] : value
       })
    }

    submit = (e) => {
        e.preventDefault()
        const {first_name, last_name, weight, bodyType, duration, date, user} = this.state;
        const exercise = {
            first_name : first_name,
            last_name : last_name,
            weight: weight,
            bodyType: bodyType,
            duration: duration,
            date: date,
            user: user
        }
       
        axios.post('http://localhost:5000/exercise/add', exercise)
        .then(res => {
            console.log(res.data)
            })
        .catch(err => {
            console.log(err)
        })


       window.location = "/exercise"
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
                            label={el.label.toUpperCase()} 
                            attribute={el.attribute} 
                            type={el.type} 
                            option = {el.options} 
                            Validate ={this.Validate}
                            user = {this.state.user}/>
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
