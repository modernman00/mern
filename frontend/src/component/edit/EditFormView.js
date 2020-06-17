import React from 'react'
import { Form } from "react-bootstrap"

export default function EditFormView(props) {

    return (

        <React.Fragment>
            <Form.Group>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text"
                    name="first_name"
                    onChange={props.changeValue}
                    value={props.firstName}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    name="last_name"
                    onChange={props.changeValue}
                    value={props.lastName} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Weight</Form.Label>
                <Form.Control
                    type="text"
                    name="weight"
                    onChange={props.changeValue}
                    value={props.weight} placeholder="Enter weight" />
            </Form.Group>

            <Form.Group>
                <Form.Label>Body Type</Form.Label>
                <Form.Control
                    type="text"
                    name="bodyType"
                    onChange={props.changeValue}
                    value={props.body} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Duration</Form.Label>
                <Form.Control
                    type="text"
                    name="duration"
                    onChange={props.changeValue}
                    value={props.duration} />
            </Form.Group>


            <Form.Group>
                <Form.Label>User's Name</Form.Label>
                <Form.Control
                    type="text"
                    name="user"
                    onChange={props.changeValue}
                    value={props.user} />
            </Form.Group>

            <Form.Group>
                <Form.Label>User's Name</Form.Label>
                <Form.Control
                    type="text"
                    onChange={props.changeValue}
                    name="id"
                    value={props.id} />
            </Form.Group>
        </React.Fragment>




    )
}
