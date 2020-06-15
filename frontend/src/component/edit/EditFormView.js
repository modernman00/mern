import React from 'react'
import { Form } from "react-bootstrap"

export default function EditFormView(props, {Validate}) {
    return (

        <Form>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="first_name" onChange={Validate} value ={props.firstName} /> 
            </Form.Group>

                   <Form.Group>
                <Form.Label>Last Name</Form.Label>
                       <Form.Control type="text" name="last_name" value ={props.lastName}  /> 
            </Form.Group>

                   <Form.Group>
                <Form.Label>Weight</Form.Label>
                       <Form.Control type="text" name="weight" value ={props.weight} placeholder="Enter weight" /> 
            </Form.Group>

                <Form.Group>
                <Form.Label>Body Type</Form.Label>
                <Form.Control type="text" name="bodyType" value ={props.body} /> 
            </Form.Group>

                   <Form.Group>
                <Form.Label>Duration</Form.Label>
                       <Form.Control type="text" name="duration" value ={props.duration} /> 
            </Form.Group>

            
                   <Form.Group>
                <Form.Label>User's Name</Form.Label>
                       <Form.Control type="text" name="user" value ={props.user} /> 
            </Form.Group>

              <Form.Group>
                <Form.Label>User's Name</Form.Label>
                       <Form.Control type="text" name="id" value ={props.id} /> 
            </Form.Group>
    

        </Form>

    )
}
