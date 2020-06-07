//import{ userData } from './../data/formData'
import React from 'react'
import { Table } from "react-bootstrap"
import TableHead from "./TableHead"
import TableBody from "./TableBody"

export default function Show({data}) {
    console.log(data)
    return (
         <Table striped bordered hover>
                <TableHead />
                
                {
                    data.map(el => {
                        return <TableBody
                            key={el.name}
                            username={el.username}
                            name={el.name}
                            password={el.password}
                          />
                    })
                }
            </Table>
    )
}


