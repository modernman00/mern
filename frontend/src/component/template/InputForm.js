import React from 'react'
import { Form } from "react-bootstrap"

export default function InputForm({ label, attribute, type, options, Validate, userData }) {

    let no = 0
    const style = {
        label: {
            color: 'blue',
            fontSize: 28,
            fontWeight: 'bold'
        },
        input: {
            borderColor: 'green',
            borderWidth: 5,
        }
    }
    // select option if user data is there
    let selectUser = (userData) && userData.map(el => {
        no++
        return <option key={no} value={el.name}> {el.name}
        </option>
    })
    // other select options
    let select = (options) && options.map((el, index) => {
        return <option key={index} value={el}> {el}</option>
    })

    const renderHtml = () => {
        if (type === 'select') {
            return <Form.Control
                as={type} name={attribute}
                onChange={Validate}
                style={style.input}>
                <option>Select</option>
                {
                    (attribute === 'user') ? selectUser : select
                }

            </Form.Control>
        } else if (type === 'image') {
            return <Form.File id={attribute} style={style.input} />
        } else {
            return <Form.Control
                style={style.input}
                onChange={Validate}
                type={type}
                name={attribute}
                placeholder={label}
                autoComplete="on"
            />
        }
    }

    return (
        <Form.Group>
            <Form.Label style={style.label}><b>{label} </b></Form.Label>
            {renderHtml()}
        </Form.Group>
    )

}
