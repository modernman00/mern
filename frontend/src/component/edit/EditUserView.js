import React from 'react'
import { Form } from "react-bootstrap"

const EditUserView = (props) => {
    return (
       <React.Fragment>

           <Form.Group>
               <Form.Label>Username</Form.Label>
               <Form.Control type="text"
                    name="username"
                    onChange={props.changeValue}
                    value={props.username}/>
           </Form.Group>

                <Form.Group>
               <Form.Label>Name</Form.Label>
               <Form.Control type="text"
                    name="name"
                    onChange={props.changeValue}
                    value={props.name}/>
           </Form.Group>


       </React.Fragment>
    )
}

export default EditUserView
