import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Navbar, Nav, Button, Form, FormControl } from "react-bootstrap"

export default class Navigator extends Component {
    render() {
        return (

                <Navbar bg="light" expand="lg">
                    <Navbar.Brand> <Nav.Link href="/">MERN TESTING</Nav.Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/user">User </Nav.Link>
                            <Nav.Link href="/exercise">Exercise</Nav.Link>
                            <Nav.Link href="/createUser">Create User</Nav.Link>
                            <Nav.Link href="/CreateExercise">Create Exercise</Nav.Link>
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
