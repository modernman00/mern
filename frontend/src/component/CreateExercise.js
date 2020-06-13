import React, { Component } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { exerciseData } from "./data/formData";
import InputForm from "./template/InputForm";
import axios from "axios";
import ErrorBoundary from "./ErrorBoundary";

export default class CreateExercise extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
        this.state = {
            first_name: "",
            last_name: "",
            weight: "",
            bodyType: "",
            duration: "",
            error: "",
            user: "",
            userData: [],
            data: exerciseData,
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:5000/user/show")
            .then((res) => {
                this.setState({ userData: res.data });
            })
            .catch((err) => console.log(err));
    }

    Validate = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        let err;
        if (value.length > 10) {
            err = value.length > 10 && "Your entry is above the limit: " + name;
        }
        this.setState({
            error: err,
            [name]: value,
        });
    };

    submit = (e) => {
        e.preventDefault();
        alert("submit");
        const {
            first_name,
            last_name,
            weight,
            bodyType,
            duration,
            date,
            user,
        } = this.state;
        const exercise = {
            first_name,
            last_name,
            weight,
            bodyType,
            duration,
            date,
            user,
        };

        console.log(exercise);

        axios
            .post("http://localhost:5000/exercise/add", exercise)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
        window.location = "/exercise";
    };

    render() {
        return (
            // <form className="container" onSubmit={this.submit}>

            <Form className="container" onSubmit={this.submit}>
                <Alert variant={this.state.error && "danger"}>
                    {" "}
                    {this.state.error}{" "}
                </Alert>

                {this.state.data.map((el) => {
                    return (
                        <ErrorBoundary key={el.attribute}>
                            <InputForm
                                key={el.attribute}
                                label={el.label.toUpperCase()}
                                attribute={el.attribute}
                                type={el.type}
                                options={el.options}
                                Validate={this.Validate}
                                userData={this.state.userData}
                            />
                        </ErrorBoundary>
                    );
                })}

                <Button variant="primary" size="lg" type="submit">
                    Submit
        </Button>
            </Form>
        );
    }
}
