import React from 'react'
import { Form } from "react-bootstrap"

export default function InputForm({ label, attribute, type, option, Validate, user }) {

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

    const renderHtml = () => {

        let no = 0

        if (attribute === "user") {
            return <Form.Control
                as={type} name={attribute}
                onChange={Validate}
                style={style.input}>
                <option>Select</option>
                {            
                    user.map(el => {
                        return <option key = {el.username} 
                        value={el.username}>
                            {el.username}
                        </option>
                    })
                
                }          
                
            </Form.Control>
        } else if (type === 'select') {
            return <Form.Control
                as={type} name={attribute}
                onChange={Validate}
                style={style.input}>
                <option>Select</option>
                {option.map(el => {
                    no++
                    return <option key ={no} value={el}>
                        {el}
                    </option>
                })}
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
                autoComplete = "on"
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
