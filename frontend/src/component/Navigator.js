import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Nav, Button, Form, FormControl} from "react-bootstrap"

export default class Navigator extends Component {
    render() {
        return (

            <Navbar bg="light" expand="lg">
                <Navbar.Brand> <Link to="/">MERN TESTING</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        {/* <Nav.Link>  */}
                            <Link to="/user">User</Link>
                            {/* </Nav.Link> */}
                         {/* <Nav.Link>  */}
                             <Link to="/exercise">Exercise</Link>
                             {/* </Nav.Link> */}
                         {/* <Nav.Link>  */}
                             <Link to="/createUser">Create User</Link>
                             {/* </Nav.Link>
                         <Nav.Link>  */}
                             <Link to="/CreateExercise">Create Exercise</Link>
                             {/* </Nav.Link> */}
        
             
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>


        )
    }
}
