import React, { Component } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { exerciseData } from './../data/formData'
import axios from 'axios'
import ErrorBoundary from './../ErrorBoundary';
import EditFormView from './EditFormView';

export default class EditExercise extends Component {
    constructor(props) {
        super(props)
       // this.inputRef = React.createRef();
        this.state = {
            first_name: "",
            last_name: "",
            weight: "",
            bodyType: "",
            duration: "",
            id: "",
            error: "",
            user:"",
            userData: [],  
            data: exerciseData
        }

        console.log(props)
    }

    componentDidMount()
    {//
        axios.get('http://localhost:5000/exercise/show/'+this.props.match.params.id)
        .then(res =>{ this.setState({ 

            first_name: res.data.first_name,
            last_name: res.data.last_name,
            weight: res.data.weight,
            bodyType: res.data.bodyType,
            duration: res.data.duration,
            date: res.data.date,
            id: res.data._id,
            user : res.data.user

        })

        console.log(res.data)
     })
        .catch(err => console.log(err))
    }

    Validate = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        let err;
        if(value.length > 10)  {
                err = (value.length > 10) && "Your entry is above the limit: " + name
        }  
       this.setState({
           error : err,
             [name] : value
       })

        // this.setState(function(prev, props){
        //     return {[value] : prev.value
            
        //     }
        // })
    }
    
           
    submit = (e) => {
        
        e.preventDefault()
        const {first_name, last_name, weight, bodyType, duration, date, user} = this.state;
        const exercise = {
           first_name, last_name, weight, bodyType, duration, date, user
        }
       
        axios.post(`http://localhost:5000/exercise/update/${exercise.id}`, exercise)
        .then(res => {
            console.log(res.data)
            })
        .catch(err => {
            console.log(err.response)
        })
         window.location = "/exercise"
    }

    render() {
        return (

                <Form className = "container" onSubmit={this.submit}>
                    <Alert variant = {(this.state.error) && 'danger'}> {this.state.error} </Alert>
                 
                    {
                            <ErrorBoundary>
                                <EditFormView
                            firstName={this.state.first_name} 
                            lastName={this.state.last_name} 
                            Validate = {this.Validate}
                            id={this.state.id} 
                            user ={this.state.user}
                            weight = {this.state.weight} 
                            duration ={this.state.duration}
                            body ={this.state.bodyType}
                            date = {this.state.date}/>
                            </ErrorBoundary>
                 
                    }

                    <Button variant="primary" size="lg" type="submit">
                        Submit
                    </Button>
                </Form>


        )
    }
}
